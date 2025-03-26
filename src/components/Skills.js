import React from "react";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/html_mtvekr.png", name: "HTML" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/css_dwovji.png", name: "CSS" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378773/Portfolio/skills/JS_iulfj9.webp", name: "JavaScript" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378375/Portfolio/skills/react_yqnl4j.png", name: "ReactJs" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378375/Portfolio/skills/node_cbe2w0.png", name: "NodeJs" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381971/Portfolio/skills/c_tzcyej.png", name: "C++" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712382126/Portfolio/skills/Tailwind_CSS_Logo.svg_hkayhb.png", name: "Tailwind CSS" },
    
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/mongodb_rc0zx8.png", name: "MongoDB" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/figma_dodbxt.png", name: "Figma" },

    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381974/Portfolio/skills/Git_icon_xuetxy.png", name: "Git" },
    { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381967/Portfolio/skills/Github_rqi4wv.png", name: "GitHub" },
    // { img: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712382285/Portfolio/skills/vercel_rnuj0z.png", name: "Vercel" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", name: "C" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name: "Python" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", name: "PostgreSQL" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png", name: "Postman" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>Here's a glimpse of the skills I bring to the table</p>
              {/* Grid for two rows */}
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
};
