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
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input_email_message_section">
              <input type="email" placeholder="your email" />
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Message"
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
