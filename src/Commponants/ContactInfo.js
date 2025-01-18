import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container h-96 items-center text-center ">
      <h2>تواصل معنا</h2>
      <div className="contact-info ">
        <a href="https://www.facebook.com/profile.php?id=61556518981136" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-icon facebook" />
          <span>تابعنا على فيسبوك</span>
        </a>
      </div>
      <div className="contact-info">
        <a href="https://wa.me/201207770460" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon whatsapp" />
          <span>تواصل معنا على واتساب</span>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;

