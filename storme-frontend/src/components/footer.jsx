import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">StorME</h2>
          <p className="text-sm text-gray-400">Enterprise File Management Solution</p>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            <FaPhoneAlt className="inline-block mr-2" /> US:{" "}
            <span className="text-blue-400">+1-800-123-4567</span>
          </p>
          <p className="text-gray-400">
            <FaPhoneAlt className="inline-block mr-2" /> EMEA:{" "}
            <span className="text-blue-400">+44-20-7890-1234</span>
          </p>
          <p className="text-gray-400">
            <FaEnvelope className="inline-block mr-2" /> support@storme.com
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 py-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Lower Section */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} StorME, Inc. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/terms-of-use" className="hover:text-white">
            Terms of Use
          </a>
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/cookie-preferences" className="hover:text-white">
            Cookie Preferences
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
