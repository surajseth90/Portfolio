import "./style.scss";
import ProfilePic from "../../assets/images/profile-img.png";
import ExpImg from "../../assets/images/experience.png";
import EducationPic from "../../assets/images/education.png";
import { AboutSectionData } from "../../data";

export default function About() {
  return (
    <section id="about" className={`about-section`}>
      <div className="container">
        <div className="inner-container">
          <p className="text-center">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div>
              <img src={ProfilePic} alt="Profile" className="about-pic" />
            </div>
            <div className="flex-1 about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img src={ExpImg} alt="Experience icon" className="icon" />
                  <h3 className="text-dark">Experience</h3>
                  <p className="text-dark">
                    {AboutSectionData.experience.time} <br />
                    {AboutSectionData.experience.in}
                  </p>
                </div>
                <div className="details-container">
                  <img
                    src={EducationPic}
                    alt="Education icon"
                    className="icon"
                  />
                  <h3 className="text-dark">Education</h3>
                  <p className="text-dark">
                    {AboutSectionData.education.in} <br />
                    {AboutSectionData.education.time}
                  </p>
                </div>
              </div>
              <div className="text-container">
                <p>{AboutSectionData.aboutText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
