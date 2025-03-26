import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp.png";
import researchRoundtable from "../assets/img/researchRoundtable.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import socJunction from "../assets/img/socJunction.png";
import CreditCard from "../assets/img/CreditCard.png";
import airCanvas from "../assets/img/airCanvas.png";
import safetyVibes from "../assets/img/SafetyVibes.png";
import financialSakhi from "../assets/img/FinancialSakhi.png";
import location from "../assets/img/Location.png";
export const Projects = () => {

  const webprojects = [
    {
      title: "Real-Time Location Tracker",
      description: "A web application that tracks users' locations in real-time using Leaflet.js, Socket.io, and Geolocation API. Multiple users can join, and their locations will be displayed on a live interactive map.",
      imgUrl: location,
      projectUrl: "https://real-time-location-tracker-46ha.onrender.com/",
      githubUrl: "https://github.com/PalakB09/Real-Time-Location-Tracker",
      documentationUrl: "https://github.com/PalakB09/Real-Time-Location-Tracker/blob/main/README.md",

    },
    {
      title: "Financial Sakhi",
      description: "A full-stack financial application built using the MERN stack aiming to revolutionize financial services by offering digital payments, fund management, insurance integration, and enhanced security features.",
      imgUrl: financialSakhi,
      projectUrl: "https://financial-sakhi.vercel.app/",
      githubUrl: "https://github.com/PalakB09/Financial-Sakhi",
      documentationUrl: "https://github.com/PalakB09/Financial-Sakhi/blob/main/README.md",
    },
    {
      title: "Safety Vibes",
      description: "Developed a full-stack responsive platform for women’s safety, featuring emergency alerts, live location tracking, incident reporting, and real-time support for quick responses. ",
      imgUrl: safetyVibes,
      projectUrl: "https://women-safety-website.vercel.app/",
      githubUrl: "https://github.com/PalakB09/Safety-Vibes?tab=readme-ov-file",
      documentationUrl: "https://github.com/PalakB09/Safety-Vibes/blob/main/README.md",
    },
    {
      title: "Finger Paint Canvas",
      description: "Designed a Python-based digital drawing platform enabling art creation on a canvas with any object. ",
      imgUrl: airCanvas,
      projectUrl: "https://github.com/PalakB09/Finger-Paint-Canvas/tree/main",
      githubUrl: "https://github.com/PalakB09/Finger-Paint-Canvas/tree/main",
      documentationUrl: "#",
    },
    {
      title: "Credit Card Approval Prediction System",
      description: "Logistic regression model using Python libraries to predict credit card approval ",
      imgUrl: CreditCard,
      projectUrl: "https://colab.research.google.com/drive/1tVYY_giR5IAvZnHr_R6FxOCONDSvUkDb?usp=sharing",
      githubUrl: "https://github.com/PalakB09/Credit-Card-Approval-Prediction",
      documentationUrl: "",
    },
    {
      title: "Society Junction",
      description: "A perfect solution to all the society heads solving the problems they face while recruiting for society.",
      imgUrl: socJunction,
      projectUrl: "https://society-junction.bubbleapps.io/version-test",
      githubUrl: "https://devfolio.co/projects/society-junction-b99f",
      documentationUrl: "https://www.canva.com/design/DAFY9zIJJv0/otdnoJxk4UzovbBECx0CGg/view?utm_content=DAFY9zIJJv0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ];

  const uiuxprojects = [
    {
      title: "Research RoundTable",
      description: "(2nd runner up Advancing the frontiers of research by fostering collaboration and innovation",
      imgUrl: researchRoundtable,
      projectUrl: "https://www.canva.com/design/DAFXc6Z9Ziw/wH8JukGhbI1ABzuTJq66Ew/edit",
      githubUrl: "https://devfolio.co/projects/research-roundtable-48c1",
      documentationUrl: "#"
    },  
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I've worked on, showcasing my skills and experiences in action</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development and ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Game Development</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          uiuxprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
