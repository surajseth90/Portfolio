import GmailLogo from "../../assets/images/email.png";
import LinkedInLogo from "../../assets/images/linkedin.png";
import PhoneLogo from "../../assets/images/phone.png";
import { ContactInfo } from "../../data";
import "./style.scss";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container d-flex">
        <div className="footer-fixed-text flex-center">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
        </div>

        <div className="contact-info-upper-container d-flex">
          <a href={`mailto:${ContactInfo.email}`} className="contact-wrapper">
            <img src={GmailLogo} alt="Email icon" className="contact-icon" />
            <span>{ContactInfo.email}</span>
          </a>

          <a
            href={`https://linkedin.com/in/${ContactInfo.linkedIn}`}
            target="_blank"
            rel="noreferrer"
            className="contact-wrapper"
          >
            <img
              src={LinkedInLogo}
              alt="LinkedIn icon"
              className="contact-icon"
            />
            <span>{ContactInfo.linkedIn}</span>
          </a>

          <a
            href={`tel:+91 ${ContactInfo.mobile}`}
            target="_blank"
            rel="noreferrer"
            className="contact-wrapper"
          >
            <img src={PhoneLogo} alt="phone icon" className="contact-icon" />
            <span>{ContactInfo.mobile}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
