import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "C++", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "WPF", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "C#",
          porcentage: "90%",
          value: "90",
        },
        { id: "PHP_skill", content: ".Net", porcentage: "75%", value: "75" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "VanillaJS_skill",
          content: "QT",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "ML/AI",
          porcentage: "70%",
          value: "70",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Within the 3D Geometry & Technology department, we excel in two core areas: '3D Geometry' and 'Technology.'",
        },
        {
          id: "second-p-about",
          content:
            "In '3D Geometry,' our primary focus revolves around delivering spatial services, with a specialized emphasis on 3D modeling. Our partnership with spatial exemplifies our commitment to harnessing the potential of three-dimensional space. On the 'Technology' front, our team possesses a wide-ranging skill set encompassing C++, C#, Python, React JS, AI/ML, and more. This versatile expertise equips us to handle a variety of technical challenges and projects.",
        },
        {
          id: "third-p-about",
          content:
            "Additionally, we actively engage in forward-thinking initiatives. This includes driving Python automation, contributing to AI/ML ventures, suggesting tools to enhance project processes in the spatial domain, and active participation in TechKrafters, a platform for knowledge sharing and continuous learning. In essence, the 3D Geometry & Technology department merges spatial proficiency and diverse technological capabilities to foster innovation, streamline processes, and shape the future of our field.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Us</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
