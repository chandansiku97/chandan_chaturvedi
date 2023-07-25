import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_22uzesf', 'template_8i1ajgd', form.current, 'l0Lg5H-thvvj8D3_8')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
};


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="ontact__options-icon"/>
            <h4>Email</h4>
            <h5>chandansiku97@gmail.com</h5>
            <a href="mailto:chandansiku97@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className="ontact__options-icon"/>
            <h4>Instagram</h4>
            <h5></h5>
            <a
              href="https://www.instagram.com/chandan_chaturvedi97/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          {/* <article className="contact__option">
            <AiOutlineTwitter className="ontact__options-icon"/>
            <h4>Threads</h4>
            <h5>Chandan Chaturvedi</h5>
            <a
              href="https://www.threads.net/@chandan_chaturvedi97"
              target="_blank"
            >
              Send a message
            </a>
          </article> */}
          <article className="contact__option">
            <FaWhatsapp className="ontact__options-icon"/>
            <h4>WhatsApp</h4>
            <h5>+919771572650</h5>
            <a href="https://api.whatsapp.com/send?phone=9771572650" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text " name="name" placeholder="Your Full Name" required/>
          <input type=" email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button _type="submit" className="btn btn-primary"> Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
