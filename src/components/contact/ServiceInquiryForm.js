import { useState } from 'react';
import Title from '../layouts/Title';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    description: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });

  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    phone: false,
    websiteType: false,
    description: false,
    budget: false,
    timeline: false,
    additionalInfo: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFormFocus(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    setFormFocus(prev => ({
      ...prev,
      [field]: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Website type options
  const websiteTypes = [
    "Business Website",
    "eCommerce",
    "Portfolio",
    "Blog",
    "Web App",
    "Landing Page",
    "Other"
  ];

  // Budget options
  const budgetOptions = [
    "Less than $500",
    "$500 - $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "More than $10,000"
  ];

  // Timeline options
  const timelineOptions = [
    "1 month",
    "2-3 months",
    "3-6 months",
    "Flexible"
  ];

  // Main gold color from requirement
  const mainColor = "#ECCB2F";

  return (
    <div className="min-h-screen p-0 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Top circle */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: mainColor, transform: 'translate(30%, -30%)' }}></div>
        
        {/* Bottom circle */}
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: mainColor, transform: 'translate(-30%, 30%)' }}></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-16 w-24 h-24 opacity-20" style={{ backgroundColor: mainColor, borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}></div>
        <div className="absolute top-3/4 right-16 w-32 h-32 opacity-20" style={{ backgroundColor: mainColor, borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative icons in the background */}
        <div className="absolute top-20 left-1/4 text-gray-200 opacity-10 transform rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        
        <div className="absolute top-1/3 right-1/4 text-gray-200 opacity-10 transform -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 left-1/5 text-gray-200 opacity-10 transform rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-4xl px-4 py-16 md:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Title
            title="Let's create something amazing! Share your website needs."
            des="Request Form"
          />
        </div>
        
        {/* Main form container */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 p-6 md:p-10 relative">
          {/* Decorative elements inside form */}
          <div className="absolute top-0 right-0 h-1.5 w-1/3" style={{ backgroundColor: mainColor }}></div>
          <div className="absolute bottom-0 left-0 h-1.5 w-1/4" style={{ backgroundColor: mainColor }}></div>
          
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4" style={{ backgroundColor: mainColor }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Website Development Request</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className="peer w-full p-4 pr-10 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder-transparent"
                  placeholder=" "
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs"
                  style={{ peerFocusColor: mainColor }}
                >
                  Full Name
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className="peer w-full p-4 pr-10 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder-transparent"
                  placeholder=" "
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs"
                  style={{ peerFocusColor: mainColor }}
                >
                  Email Address
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              
              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  className="peer w-full p-4 pr-10 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all placeholder-transparent"
                  placeholder=" "
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                />
                <label 
                  htmlFor="phone"
                  className="absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs"
                  style={{ peerFocusColor: mainColor }}
                >
                  Phone Number
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              
              {/* Website Type */}
              <div className="relative">
                <select
                  name="websiteType"
                  id="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  onFocus={() => handleFocus('websiteType')}
                  onBlur={() => handleBlur('websiteType')}
                  className="peer w-full p-4 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all appearance-none bg-white"
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                >
                  <option value="" disabled></option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <label 
                  htmlFor="websiteType"
                  className={`absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all ${!formData.websiteType ? 'peer-focus:-top-2.5 peer-focus:text-xs text-base text-gray-400 top-4' : ''}`}
                  style={{ color: formData.websiteType || formFocus.websiteType ? mainColor : '' }}
                >
                  Type of Website
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Budget */}
              <div className="relative">
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={() => handleFocus('budget')}
                  onBlur={() => handleBlur('budget')}
                  className="peer w-full p-4 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all appearance-none bg-white"
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                >
                  <option value="" disabled></option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <label 
                  htmlFor="budget"
                  className={`absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all ${!formData.budget ? 'peer-focus:-top-2.5 peer-focus:text-xs text-base text-gray-400 top-4' : ''}`}
                  style={{ color: formData.budget || formFocus.budget ? mainColor : '' }}
                >
                  Estimated Budget
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="relative">
                <select
                  name="timeline"
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  onFocus={() => handleFocus('timeline')}
                  onBlur={() => handleBlur('timeline')}
                  className="peer w-full p-4 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all appearance-none bg-white"
                  style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
                >
                  <option value="" disabled></option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <label 
                  htmlFor="timeline"
                  className={`absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all ${!formData.timeline ? 'peer-focus:-top-2.5 peer-focus:text-xs text-base text-gray-400 top-4' : ''}`}
                  style={{ color: formData.timeline || formFocus.timeline ? mainColor : '' }}
                >
                  When Needed
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="relative mt-4">
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                onFocus={() => handleFocus('description')}
                onBlur={() => handleBlur('description')}
                rows="4"
                className="peer w-full p-4 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none placeholder-transparent"
                placeholder=" "
                style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
              ></textarea>
              <label 
                htmlFor="description"
                className="absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs"
                style={{ color: formData.description || formFocus.description ? mainColor : '' }}
              >
                Brief Description of the Project
              </label>
            </div>
            
            {/* Additional Information */}
            <div className="relative">
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                onFocus={() => handleFocus('additionalInfo')}
                onBlur={() => handleBlur('additionalInfo')}
                rows="3"
                className="peer w-full p-4 rounded-xl border border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none placeholder-transparent"
                placeholder=" "
                style={{ focusBorderColor: mainColor, focusRingColor: mainColor }}
              ></textarea>
              <label 
                htmlFor="additionalInfo"
                className="absolute left-4 -top-2.5 text-xs px-1 bg-white text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs"
                style={{ color: formData.additionalInfo || formFocus.additionalInfo ? mainColor : '' }}
              >
                Any other information or special requests?
              </label>
            </div>
            
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-medium text-white shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                style={{ backgroundColor: mainColor, boxShadow: `0 4px 14px rgba(236, 203, 47, 0.4)` }}
              >
                <span>Submit Request</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>

          {/* Poppins font import via style tag */}
          <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            body, input, select, textarea, button {
              font-family: 'Poppins', sans-serif;
            }
            textarea:focus, input:focus, select:focus {
              border-color: #ECCB2F !important;
              --tw-ring-color: #ECCB2F !important;
            }
            .peer:focus ~ label {
              color: #ECCB2F !important;
            }
          `}} />
        </div>
      </div>
    </div>
  );
}