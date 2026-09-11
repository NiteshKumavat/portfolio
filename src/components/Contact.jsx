import React, { useState } from 'react';

const Contact = () => {
  const contactLinks = {
    email: "niteshkumavat32@gmail.com",
    github: "https://github.com/NiteshKumavat",
    linkedin: "https://linkedin.com/in/"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="bg-[#0b0c0e] text-white min-h-screen px-8 py-16 flex items-center justify-center font-mono">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column - Contact Details */}
        <div className="space-y-8">
          <div>
            <span className="text-[#00ff87] text-xs tracking-widest font-bold uppercase block mb-6">
              CONTACT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Let's build <br />
              something <br />
              great<span className="text-[#00ff87]">.</span>
            </h1>
          </div>

          <div className="space-y-4 pt-4 text-sm">
            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="text-gray-500 uppercase tracking-widest text-xs">EMAIL</span>
              <a 
                href={`mailto:${contactLinks.email}`} 
                className="col-span-2 text-gray-200 hover:text-[#00ff87] transition-colors"
              >
                {contactLinks.email}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="text-gray-500 uppercase tracking-widest text-xs">GITHUB</span>
              <a 
                href={contactLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="col-span-2 text-gray-200 hover:text-[#00ff87] transition-colors"
              >
                {contactLinks.github.replace('https://', '')}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="text-gray-500 uppercase tracking-widest text-xs">LINKEDIN</span>
              <a 
                href={contactLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="col-span-2 text-gray-200 hover:text-[#00ff87] transition-colors"
              >
                {contactLinks.linkedin.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-gray-400">NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#121316] border border-gray-800 rounded-none px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-[#00ff87] placeholder-gray-600 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-gray-400">EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#121316] border border-gray-800 rounded-none px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-[#00ff87] placeholder-gray-600 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-gray-400">MESSAGE</label>
            <textarea
              name="message"
              rows={5}
              placeholder="What are you working on?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#121316] border border-gray-800 rounded-none p-4 text-sm text-gray-200 focus:outline-none focus:border-[#00ff87] placeholder-gray-600 transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00ff87] text-black font-bold uppercase tracking-wider py-4 text-xs hover:bg-[#00e077] transition-colors flex items-center justify-center gap-2"
          >
            SEND MESSAGE <span className="text-base">→</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;