import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin-in.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/x-twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/palak-bakshi09/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/PalakB09"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://x.com/PalakBakshi09"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
