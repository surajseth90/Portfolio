import "./style.scss";
import { SkillsData } from "../../data";

export default function Skills() {
  const renderSkills = () => {
    const temp =
      SkillsData &&
      SkillsData.length > 0 &&
      SkillsData.map((skillsArr, key) => {
        return (
          <div className="flex-1 skills-wrapper" key={key}>
            <h3 className="text-center">{skillsArr.title}</h3>
            <ul className="flex-center flex-wrap">
              {skillsArr.skillArr &&
                skillsArr.skillArr.length > 0 &&
                skillsArr.skillArr.map((skill) => {
                  return (
                    <li key={skill.name}>
                      <div className="skill-wrapper flex-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="skill-logo"
                        />
                        <p>{skill.name}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      });

    return temp;
  };

  return (
    <section id="skills" className="skills-container">
      <div className="container">
        <p className="text-center">Explore My</p>
        <h1 className="title">Skills Bucket</h1>
        <div className="d-flex flex-wrap skills-details-container">
          {renderSkills()}
        </div>
      </div>
    </section>
  );
}
