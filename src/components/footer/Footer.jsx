import React from "react";
import "./footer.css";
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiCodingninjas} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className=" footer__logo">
        CHANDU
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/chandanchaturvedi97"><FaFacebook/></a>
        <a href="https://www.instagram.com/chandan_chaturvedi97/"><FiInstagram/></a>
        <a href="https://twitter.com/chandan_1753"><FaTwitter/></a>
        <a href="https://leetcode.com/chandansiku97/"><SiLeetcode/></a>
        <a href="https://github.com/chandansiku97"><BsGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/chandanwjin"><SiGeeksforgeeks/></a>

        <a href="https://www.codingninjas.com/studio/profile/chandansiku97"><SiCodingninjas/></a>
       
        <a href="https://www.youtube.com/@technicalpanditjifreecodin4391"><BsYoutube/></a>
      </div>
   
    <div className="footer__copyright">
      <small>&copy; chandan chaturvedi. All rights reserved </small>
    </div>

    </footer>
  );
};

export default footer;
