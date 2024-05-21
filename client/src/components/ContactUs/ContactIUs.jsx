import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";
import ContactImg from "../../assets/contact.jpg";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_i2sloeg";
    const TEMPLATE_ID = "template_6s3bxes";
    const PUBLIC_KEY = "L6T67LfNs-OF2n6F0";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="form-img">
        <img src={ContactImg} alt="contact-img" />
      </div>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <h1 className="contact-heading">Contact Us</h1>
        <p>Feel free to share your feedback and thoughts about improving shopping experience</p>
        <div className="flex-container">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="form-group">
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
