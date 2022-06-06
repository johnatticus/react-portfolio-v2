import "./contact.css";
// import Phone from "../../img/phone.png";
import Email from "../../img/gmail.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zpkbh84",
        "template_3cek0ce",
        formRef.current,
        "71Rei2fZs5ZBBSrNf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />
              <a href="www.linkedin.com/in/johnhysong" target="_blank" rel="noreferrer">Linked In</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:johnahysong@gmail.com" rel="noreferrer">johnahysong@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a href="https://github.com/johnatticus" target="_blank" rel="noreferrer">johnatticus</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
