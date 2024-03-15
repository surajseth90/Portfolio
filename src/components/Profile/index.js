import GitLogo from "../../assets/images/github.png";
import LinkedInLogo from "../../assets/images/linkedin.png";
import WebDevLogo from "../../assets/images/web-dev.avif";
import "./style.scss";
import { useTypewriter } from "react-simple-typewriter";
import Resume from "../../assets/files/resume.pdf";
import { ContactInfo,ProfileHeaderWordss } from "../../data";

function Profile() {
  const [text] = useTypewriter({
    words: ProfileHeaderWordss,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="profile" className="profile-section">
      <div className="container d-flex flex-wrap">
      
        <div className="section__text flex-1">
          <div className="profile-welcome-text">Welcome to my Portfolio</div>
          <h1 className="title">{text}</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-1"
              onClick={() => {
                window.open(Resume, "_blank");
              }}
            >
              Download CV
            </button>
            <button
              className="btn btn-2"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <a
              href={`https://linkedin.com/in/${ContactInfo.linkedIn}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedInLogo}
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>

            <a href={`${ContactInfo.gitLink}`} target="_blank" rel="noreferrer">
              <img src={GitLogo} alt="My Github profile" className="icon" />
            </a>
          </div>
        </div>
        <img
          src={WebDevLogo}
          alt="web development"
          className="web-dev-img flex-1"
        />
      </div>
    </section>
  );
}

export default Profile;
