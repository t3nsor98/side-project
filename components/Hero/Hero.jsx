import React, { useEffect } from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Hero() {
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
    <Container fluid className="hero-section text-center py-5">
      <Row className="align-items-center">
        <Col>
          <h1 className="animate-on-scroll">
            Let's make your <br /> Dreams come true!
          </h1>
          <p className="mt-3 animate-on-scroll">Go trading. Go Forward.</p>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fluid
            className="mt-4 animate-on-scroll"
            alt="Hero Image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
