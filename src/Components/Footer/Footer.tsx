
import "./Footer.css";
import Contact from "../Contact/Contact";
export default () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <h2>Say Hello! ✌️</h2>
        <h1>Contact Me</h1>
      </div>
      <div className="footer-form">
        <Contact/>
      </div>
    </div>
  );
};
