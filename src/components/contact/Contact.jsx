import { Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <div className="contact">
        <div className="contact_wrapper">
          <h1 className="contact_title">Contact Us</h1>
          <form className="contact_form">
            <div className="input_name_section">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="input_email_message_section">
              <input type="email" id="email" placeholder="Your E-mail" />
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
              <button className="input_button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
