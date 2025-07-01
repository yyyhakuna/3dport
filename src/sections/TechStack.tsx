import TitleHeader from "../components/HeroModles/TitleHeader";
import { techStackIcons } from "../constants";
import { TechIcon } from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        delay: 0.5,
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          end: "bottom top",
        }
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My preferred tech stack"
          sub=" The Skills I Bring to the Table "
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* {techStackIcons.map((icon) => (
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                    <div className='tech-card-animated-bg'>
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <img src={icon.imgPath} />
                            </div>
                            <div className='padding-x w-full'>
                                <p>{icon.name}</p>
                            </div>
                        </div>

                    </div>

                </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
