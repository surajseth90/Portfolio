import "./style.scss";
import DefaultProjectImg from "../../assets/images/code-img.png";
import { ProjectData } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial call to set width
    handleResize();

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="project-section" id="projects">
      <div className="container">
        <p className="text-center">Have a look at</p>
        <h1 className="title">My Work</h1>

        <div className="flex-1 projects-wrapper">
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 500000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            spaceBetween={20}
            slidesPerView={
              ProjectData.length > 3
                ? windowWidth > 912
                  ? 3
                  : windowWidth > 512
                  ? 2
                  : 1
                : ProjectData.length
            }
          >
            {ProjectData &&
              ProjectData.length > 0 &&
              ProjectData.map((project) => {
                return (
                  <SwiperSlide
                    className="project-card-wrapper"
                    key={project.title}
                  >
                    <div className="project-card-inner-wrapper">
                      <div className="project-img-wrapper">
                        <img
                          src={project.img || DefaultProjectImg}
                          alt={project.title}
                        />
                      </div>

                      <h3>{project.title}</h3>
                      <p className="text-center font-14" dangerouslySetInnerHTML={{__html:project.desc}}></p>
                      <ul className="project-tech-list d-flex flex-wrap">
                        {project.techStack.map((tech) => {
                          return (
                            <li
                              className="project-tech font-12"
                              key={`${project.title}-${tech}`}
                            >
                              {tech}
                            </li>
                          );
                        })}
                      </ul>

                      {project.actions && project?.actions?.length > 0 && (
                        <div className="btn-container d-flex flex-wrap">
                          {project.actions.map((action, key) => {
                            return (
                              <a
                                key={`${action.label}_${key}`}
                                target="_blank"
                                rel="noreferrer"
                                href={action.URL || "#"}
                                className="btn btn-2 font-14"
                              >
                                {action.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
