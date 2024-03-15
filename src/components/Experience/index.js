import "./style.scss";
import { ExperienceData } from "../../data";
// import ExpImg from "../../assets/images/exp.jpeg";
import ExpImg from "../../assets/images/lap.png";

export default function Experience() {
  const renderExperiences = () => {
    const temp =
      ExperienceData &&
      ExperienceData.length > 0 &&
      ExperienceData.map((experience, key) => {
        return (
          <div className="flex-1 experience-wrapper" key={key}>
            <div className="experience-card">
              <p className="text-center">{experience.timePeriod}</p>
              <div
                className="d-flex align-items-center"
                style={{ marginTop: 20, gap: 40 }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
                </svg>
                <div>
                  <h3 className=" font-bold">{experience.jobTitle}</h3>
                  <p className="">
                    {experience.companyName}&nbsp;
                    <span className="font-14">({experience.location})</span>
                  </p>
                </div>
              </div>

              <ul className="roles-list">
                {experience.role &&
                  experience.role.length > 0 &&
                  experience.role.map((responsibility, key2) => {
                    return (
                      <li
                        key={`experience-${key}-${key2}`}
                        className="font-14"
                        dangerouslySetInnerHTML={{ __html: responsibility }}
                      ></li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      });

    return temp;
  };

  return (
    <section id="experience" className="experience-container">
      <div className="container">
        <p className="text-center">Get to know more about my</p>
        <h1 className="title">Experience</h1>
        <div
          className="experience-inner-container d-flex align-items-center flex-center"
          style={{ gap: 40 }}
        >
          <div className="">
            <img
              src={ExpImg}
              alt="experience"
              style={{ width: "100%", height: "auto", maxWidth: 400 }}
            />
            {/* {a} */}
          </div>
          <div className="d-flex flex-column flex-wrap experience-details-container">
            {renderExperiences()}
          </div>
        </div>
      </div>
    </section>
  );
}
