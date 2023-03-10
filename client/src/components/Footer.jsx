import React from 'react'
import '../css/Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="leftFooter">
        <h4>
          Download our App
        </h4>
        <p>Contact @</p>
        <p>9845848483</p>
      </div>
      <div className="midFooter">
        <h1>Pc-Components</h1>
        <p>High Quality is our first Priority</p>
        <p>Copyrights 2023 &copy; PcShopiey</p>
      </div>
      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="http://instagram.com"><FaInstagram/><span className="px-2">Instagram</span></a>
        <a href="http://facebook.com"><FaFacebook/><span className="px-2">Facebook</span></a>
   
      </div>

    </footer>
  )
}

export default Footer