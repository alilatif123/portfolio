import React, { useState, useEffect } from 'react';
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane, 
  FaComments, 
  FaCheckCircle,
  FaInfoCircle,
  FaSpinner,
  FaClipboardList
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isFocused, setIsFocused] = useState({
    username: false,
    phoneNumber: false,
    email: false,
    subject: false,
    message: false
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: false
  });
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    setAnimateForm(true);
  }, []);

  const handleFocus = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    setIsFocused({
      ...isFocused,
      [field]: false
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Validate form
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Please enter your name";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Please enter your phone number";
    if (!formData.email.trim()) newErrors.email = "Please enter your email address";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus({ 
        submitted: true, 
        submitting: false, 
        success: false, 
        error: true 
      });
      return;
    }

    // Form is valid, simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: false
      });
      
      setFormData({
        username: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          submitting: false,
          success: false,
          error: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${animateForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <span className="inline-block px-3 py-1 bg-[#E6C200]/10 text-[#E6C200] font-medium rounded-full text-sm mb-3">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 ${animateForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-200`}>
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 text-white rounded-xl shadow-xl overflow-hidden h-full">
              <div className="bg-[#E6C200] py-6 px-8">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 h-full">
                <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E6C200]/10 flex items-center justify-center mr-4">
                      <FaPhone className="text-[#E6C200]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E6C200]/10 flex items-center justify-center mr-4">
                      <FaEnvelope className="text-[#E6C200]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">contact@yourcompany.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E6C200]/10 flex items-center justify-center mr-4">
                      <FaComments className="text-[#E6C200]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Live Chat</p>
                      <p className="text-white font-medium">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-4">Connect with us</p>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E6C200]/20 flex items-center justify-center transition-colors duration-300">
                      <span className="text-[#E6C200]">FB</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E6C200]/20 flex items-center justify-center transition-colors duration-300">
                      <span className="text-[#E6C200]">TW</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E6C200]/20 flex items-center justify-center transition-colors duration-300">
                      <span className="text-[#E6C200]">IG</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E6C200]/20 flex items-center justify-center transition-colors duration-300">
                      <span className="text-[#E6C200]">LI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {formStatus.success ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <FaCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus({ submitted: false, submitting: false, success: false, error: false })}
                    className="px-8 py-3 bg-[#E6C200] text-white font-medium rounded-lg hover:bg-[#d4b200] transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                    
                    {formStatus.error && (
                      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                        <div className="flex">
                          <FaInfoCircle className="text-red-500 mt-0.5" />
                          <p className="ml-3 text-red-700">Please correct the errors below and try again.</p>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                          <div className={`group relative border ${errors.username ? 'border-red-500' : isFocused.username ? 'border-[#E6C200]' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                            <label 
                              className={`absolute left-4 ${
                                isFocused.username || formData.username 
                                  ? '-top-3 text-xs' 
                                  : 'top-3 text-base'
                              } bg-white px-1 transition-all duration-300 ${
                                errors.username 
                                  ? 'text-red-500' 
                                  : isFocused.username 
                                    ? 'text-[#E6C200]' 
                                    : 'text-gray-500'
                              }`}
                            >
                              Full Name
                            </label>
                            <div className="flex items-center">
                              <div className={`pl-4 py-3 ${
                                errors.username 
                                  ? 'text-red-500' 
                                  : isFocused.username 
                                    ? 'text-[#E6C200]' 
                                    : 'text-gray-400'
                              } transition-colors duration-300`}>
                                <FaUser />
                              </div>
                              <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                onFocus={() => handleFocus('username')}
                                onBlur={() => handleBlur('username')}
                                className="w-full py-3 px-3 text-gray-900 outline-none bg-transparent"
                              />
                            </div>
                          </div>
                          {errors.username && (
                            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                          )}
                        </div>
                        
                        {/* Phone Field */}
                        <div>
                          <div className={`group relative border ${errors.phoneNumber ? 'border-red-500' : isFocused.phoneNumber ? 'border-[#E6C200]' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                            <label 
                              className={`absolute left-4 ${
                                isFocused.phoneNumber || formData.phoneNumber 
                                  ? '-top-3 text-xs' 
                                  : 'top-3 text-base'
                              } bg-white px-1 transition-all duration-300 ${
                                errors.phoneNumber 
                                  ? 'text-red-500' 
                                  : isFocused.phoneNumber 
                                    ? 'text-[#E6C200]' 
                                    : 'text-gray-500'
                              }`}
                            >
                              Phone Number
                            </label>
                            <div className="flex items-center">
                              <div className={`pl-4 py-3 ${
                                errors.phoneNumber 
                                  ? 'text-red-500' 
                                  : isFocused.phoneNumber 
                                    ? 'text-[#E6C200]' 
                                    : 'text-gray-400'
                              } transition-colors duration-300`}>
                                <FaPhone />
                              </div>
                              <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                onFocus={() => handleFocus('phoneNumber')}
                                onBlur={() => handleBlur('phoneNumber')}
                                className="w-full py-3 px-3 text-gray-900 outline-none bg-transparent"
                              />
                            </div>
                          </div>
                          {errors.phoneNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Email Field */}
                      <div>
                        <div className={`group relative border ${errors.email ? 'border-red-500' : isFocused.email ? 'border-[#E6C200]' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                          <label 
                            className={`absolute left-4 ${
                              isFocused.email || formData.email 
                                ? '-top-3 text-xs' 
                                : 'top-3 text-base'
                            } bg-white px-1 transition-all duration-300 ${
                              errors.email 
                                ? 'text-red-500' 
                                : isFocused.email 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-500'
                            }`}
                          >
                            Email Address
                          </label>
                          <div className="flex items-center">
                            <div className={`pl-4 py-3 ${
                              errors.email 
                                ? 'text-red-500' 
                                : isFocused.email 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-400'
                            } transition-colors duration-300`}>
                              <FaEnvelope />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => handleFocus('email')}
                              onBlur={() => handleBlur('email')}
                              className="w-full py-3 px-3 text-gray-900 outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                      
                      {/* Subject Field */}
                      <div>
                        <div className={`group relative border ${errors.subject ? 'border-red-500' : isFocused.subject ? 'border-[#E6C200]' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                          <label 
                            className={`absolute left-4 ${
                              isFocused.subject || formData.subject 
                                ? '-top-3 text-xs' 
                                : 'top-3 text-base'
                            } bg-white px-1 transition-all duration-300 ${
                              errors.subject 
                                ? 'text-red-500' 
                                : isFocused.subject 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-500'
                            }`}
                          >
                            Subject
                          </label>
                          <div className="flex items-center">
                            <div className={`pl-4 py-3 ${
                              errors.subject 
                                ? 'text-red-500' 
                                : isFocused.subject 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-400'
                            } transition-colors duration-300`}>
                              <FaClipboardList />
                            </div>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              onFocus={() => handleFocus('subject')}
                              onBlur={() => handleBlur('subject')}
                              className="w-full py-3 px-3 text-gray-900 outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>
                      
                      {/* Message Field */}
                      <div>
                        <div className={`group relative border ${errors.message ? 'border-red-500' : isFocused.message ? 'border-[#E6C200]' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                          <label 
                            className={`absolute left-4 ${
                              isFocused.message || formData.message 
                                ? '-top-3 text-xs' 
                                : 'top-3 text-base'
                            } bg-white px-1 transition-all duration-300 ${
                              errors.message 
                                ? 'text-red-500' 
                                : isFocused.message 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-500'
                            }`}
                          >
                            Message
                          </label>
                          <div className="flex">
                            <div className={`pl-4 pt-3 ${
                              errors.message 
                                ? 'text-red-500' 
                                : isFocused.message 
                                  ? 'text-[#E6C200]' 
                                  : 'text-gray-400'
                            } transition-colors duration-300`}>
                              <FaComments />
                            </div>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onFocus={() => handleFocus('message')}
                              onBlur={() => handleBlur('message')}
                              rows="5"
                              className="w-full pt-3 px-3 text-gray-900 outline-none bg-transparent resize-none"
                            ></textarea>
                          </div>
                        </div>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>
                      
                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={formStatus.submitting}
                          className={`w-full py-4 px-6 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group ${
                            formStatus.submitting 
                              ? 'bg-gray-500 cursor-not-allowed' 
                              : 'bg-[#E6C200] hover:bg-[#d4b200]'
                          }`}
                        >
                          <span className="absolute inset-0 w-full h-full transition-all duration-300 scale-x-0 origin-left bg-black/10 group-hover:scale-x-100"></span>
                          <span className="relative flex items-center justify-center">
                            {formStatus.submitting ? (
                              <>
                                <FaSpinner className="animate-spin mr-2" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="mr-2" />
                                <span>Send Message</span>
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="bg-gray-50 px-10 py-4 text-center border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      By submitting this form, you agree to our <span className="text-[#E6C200] font-medium">Privacy Policy</span> and <span className="text-[#E6C200] font-medium">Terms of Service</span>.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;