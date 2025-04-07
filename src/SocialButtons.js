import { useState } from 'react';
import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaTimes, 
  FaExternalLinkAlt, 
  FaPaperPlane 
} from 'react-icons/fa';

export default function SocialButtons() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  
  const linkedinProfile = "https://www.linkedin.com/in/alilatif123/";
  const whatsappNumber = "923066298090";
  
  const toggleWhatsapp = () => {
    setWhatsappOpen(!whatsappOpen);
  };
  
  const openLinkedinProfile = () => {
    window.open(linkedinProfile, '_blank');
  };
  
  const openWhatsappWeb = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  
  const [whatsappMessage, setWhatsappMessage] = useState('');
  
  const sendWhatsappMessage = () => {
    if (whatsappMessage.trim()) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setWhatsappMessage('');
    }
  };
  
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      {/* LinkedIn Button - Direct Redirect */}
      <div className="absolute bottom-6 left-6">
        <button 
          onClick={openLinkedinProfile}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Connect on LinkedIn"
        >
          <FaLinkedin size={20} />
        </button>
      </div>
      
      {/* WhatsApp Button and Chat */}
      <div className="absolute bottom-6 right-6">
        <button 
          onClick={toggleWhatsapp}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {whatsappOpen ? <FaTimes size={20} /> : <FaWhatsapp size={20} />}
        </button>
        
        {whatsappOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <h3 className="font-medium">WhatsApp Chat</h3>
              <button onClick={openWhatsappWeb} className="hover:text-green-200">
                <FaExternalLinkAlt size={16} />
              </button>
            </div>
            <div className="p-4 h-64 bg-gray-50 overflow-y-auto">
              <div className="text-center text-gray-500 text-sm p-4">
                Message Ali Latif on WhatsApp (+92 306 6298090)
              </div>
            </div>
            <div className="p-3 border-t flex items-center gap-2">
              <input
                type="text"
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                onClick={sendWhatsappMessage}
                className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}