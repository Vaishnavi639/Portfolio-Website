import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, BookIcon } from 'lucide-react';
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-gray-50 dark:bg-[#16213e]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-[#2563eb] dark:bg-[#FF9900] mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
          <div className="md:w-2/5 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 dark:bg-[#FF9900]/10 flex items-center justify-center mr-4">
                  <MailIcon size={18} className="text-[#2563eb] dark:text-[#FF9900]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Email
                  </p>
                  <a href="mailto:vaishnavipangare1304@gmail.com" className="text-gray-800 dark:text-white hover:text-[#2563eb] dark:hover:text-[#FF9900]">
                    vaishnavipangare1304@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 dark:bg-[#FF9900]/10 flex items-center justify-center mr-4">
                  <PhoneIcon size={18} className="text-[#2563eb] dark:text-[#FF9900]" />
                </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 dark:bg-[#FF9900]/10 flex items-center justify-center mr-4">
                  <MapPinIcon size={18} className="text-[#2563eb] dark:text-[#FF9900]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-10 mb-6">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Vaishnavi639" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2563eb] dark:hover:bg-[#FF9900] transition-colors">
                <GithubIcon size={18} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/vaishnavi-pangare/" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center hover:bg-[#2563eb] dark:hover:bg-[#FF9900] transition-colors">
                <LinkedinIcon size={18} className="text-white" />
              </a>
              <a href="https://medium.com/@pangarevaishnavi639" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-[#2563eb] dark:hover:bg-[#FF9900] transition-colors">
                <BookIcon size={18} className="text-white" />
              </a>
            </div>
            <div className="mt-10">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Languages
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['English', 'Hindi', 'Marathi', 'German'].map((language, index) => <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300 shadow-sm">
                      {language}
                    </span>)}
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              {isSubmitted ? <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-md p-4 mb-6">
                  <p className="text-green-700 dark:text-green-400">
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </p>
                </div> : <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#FF9900] focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#FF9900] focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#FF9900] focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#FF9900] focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 bg-[#2563eb] dark:bg-[#FF9900] text-white rounded-md hover:bg-[#1d4ed8] dark:hover:bg-[#e68a00] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
