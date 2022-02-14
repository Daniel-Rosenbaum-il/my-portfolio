import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { ReactComponent as ContactMeIcon } from "../assets/img/contact-me-icon.svg";

export const ContactMe = () => {
  const form = useRef();
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    emailjs
      .sendForm(
        "service_dd4ozsq",
        "template_36gzntr",
        form.current,
        "user_VFOxgoZUihqBA737kagBL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setIsSendingEmail(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSendingEmail(false);
        }
      );
  };

  return (
    <div id="contact-me" className="contact-me ">
      <a href="#home">
        <BsFillArrowUpSquareFill className="arrow-icon" />
      </a>
      <h3>Contact me</h3>
      <div className="contact-me-container container">
        <form className="contact-me-form " ref={form} onSubmit={sendEmail}>
          <div className="input-field">
            <input
              className="form-input"
              type="text"
              placeholder=" "
              name="user_name"
              required={true}
            />
            <label className="form-label" htmlFor="user_name">
              Name
            </label>
          </div>

          <div className="input-field">
            <input
              className="form-input"
              placeholder=" "
              type="email"
              name="user_email"
              required={true}
            />
            <label className="form-label" htmlFor="user_email">
              Email
            </label>
          </div>

          <div className="input-field">
            <textarea
              rows="3"
              className="form-input"
              placeholder=" "
              name="message"
              required={true}
            />
            <label className="form-label" htmlFor="message">
              Message
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            value="Send"
            disabled={isSendingEmail}
          >
            Send
          </button>
        </form>
        <div>
          <ContactMeIcon className="contact-me-icon" />
        </div>
      </div>
    </div>
  );
};
