import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const ProjectCard = ({ title, description, imgUrl, projectUrl, githubUrl, documentationUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='img' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-icon">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe}  className="icon"/>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}  className="icon"/>
            </a>
            <a href={documentationUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBook}  className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
