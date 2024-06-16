import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Welcome.css";

function Welcome() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        // Partially visible elements return true
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if (isVisible) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container fluid className="welcome-section py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="welcome-heading animate-on-scroll">
            Welcome to <span className="milliondots">Milliondots</span>
          </h2>
          <p className="welcome-text mt-3 animate-on-scroll">
            From Absolute basics to an expert level, we cover it all: Equipping
            you with profitable trading skills, Advanced strategies & tips to
            bring in profitability in Equity & FnO covering everything about
            Indian market. But we're not your average program. We don't just
            teach;
          </p>
          <h2 className="here-we-are mt-4 animate-on-scroll">Here we are</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
