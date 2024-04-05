import "./Contact.css";
import { useState } from "react";

import Email from "../SVG/Email/Email";
import LinkedIn from "../SVG/LinkedIn/LinkedIn";
import Github from "../SVG/Github/Github";
export default () => {
  const [inputFocusedName, setInputFocusedName] = useState(false);
  const [inputFocusedMail, setInputFocusedMail] = useState(false);
  const [inputFocusedMessage, setInputFocusedMessage] = useState(false);

  const handleInputFocusName = () => {
    setInputFocusedName(true);
  };

  const handleInputBlurName = () => {
    setInputFocusedName(false);
  };

  const handleInputFocusMail = () => {
    setInputFocusedMail(true);
  };

  const handleInputBlurMail = () => {
    setInputFocusedMail(false);
  };

  const handleInputFocusMessage = () => {
    setInputFocusedMessage(true);
  };

  const handleInputBlurMessage = () => {
    setInputFocusedMessage(false);
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <div
          className={`contact-name ${inputFocusedName ? "border-active" : ""}`}
        >
          <span>Name:</span>
          <input
            onFocus={handleInputFocusName}
            onBlur={handleInputBlurName}
          ></input>
        </div>
        <div
          className={`contact-email ${inputFocusedMail ? "border-active" : ""}`}
        >
          <span>Email:</span>
          <input
            onFocus={handleInputFocusMail}
            onBlur={handleInputBlurMail}
          ></input>
        </div>
        <div
          className={`contact-message ${
            inputFocusedMessage ? "border-active" : ""
          }`}
        >
          <span>Message:</span>
          <textarea
            onFocus={handleInputFocusMessage}
            onBlur={handleInputBlurMessage}
          ></textarea>
        </div>
        <div className="contact-submit-area">
          <div className="contact-submit-social">
            <Github />
            <LinkedIn />
            <Email />
          </div>
          <button className="contact-submit-btn-effect">Submit</button>
        </div>
      </div>
    </div>
  );
};
