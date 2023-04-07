import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <section className="contact-container">
      <h2 className="section-heading">Contact Us</h2>
      <div className="contact-info">
        <div className="address">
          <h3>Address</h3>
          <p>#1234, Main Road</p>
          <p>Hyderabad, Telangana</p>
          <p>India</p>
        </div>
        <div className="phone">
          <h3>Phone</h3>
          <p>+91 1234567890</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
      </div>
      <div className="flex">
        <div className="enquiry">
          <h3>Enquiry Form</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map">
          <iframe
            title="Hyderabad Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169826098!2d78.26795840666708!3d17.41229980085587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680848776886!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
