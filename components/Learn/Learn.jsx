import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CountUp from "react-countup";
import "./Learn.css";

function Learn() {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("scroll-in");
        } else {
          element.classList.remove("scroll-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="learn-section py-5">
      <Row className="g-4">
        {/* First Column */}
        <Col lg={4} className="text-center">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fluid
            className="mb-3 learn-img animate-on-scroll"
            alt="Learn with Milliondots"
          />
          <h3 className="mb-3 animate-on-scroll">Learn with Milliondots</h3>
          <p className="mb-4 animate-on-scroll">
            From Absolute basics to an expert level, we cover it all: Equipping
            you with profitable trading skills, Advanced strategies & tips to
            bring in profitability in Equity & FnO covering everything about
            Indian market. But we're not your average program. We don't just
            teach;
          </p>
          <Button variant="success" className="join-now animate-on-scroll">
            Join Now
          </Button>
        </Col>
        {/* Second Column */}
        <Col lg={4}>
          <Row className="h-75">
            <Col className="middle-top d-flex flex-column justify-content-center align-items-center text-center animate-on-scroll">
              <h3>4.6 Star Global Traders Community</h3>
              <p className="mb-4">
                We have students, working professionals, business owners,
                housewives and everyone who are passionate about trading.
              </p>
              <div className="profile-images d-flex justify-content-center">
                {/* Use provided image for profile images */}
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s"
                  roundedCircle
                  className="profile-img mx-1"
                  alt="Profile 1"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s"
                  roundedCircle
                  className="profile-img mx-1"
                  alt="Profile 2"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s"
                  roundedCircle
                  className="profile-img mx-1"
                  alt="Profile 3"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s"
                  roundedCircle
                  className="profile-img mx-1"
                  alt="Profile 4"
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s"
                  roundedCircle
                  className="profile-img mx-1"
                  alt="Profile 5"
                />
              </div>
            </Col>
          </Row>
          <Row className="h-25 middle-bottom d-flex align-items-center animate-on-scroll">
            <Col xs={4}>
              <Image src="bottom-image.jpg" fluid alt="1k to 15k" />
            </Col>
            <Col xs={8} className="text-left">
              <h4>
                <CountUp
                  start={1000}
                  end={15000}
                  duration={5}
                  separator=","
                  suffix="+"
                />
              </h4>
              <p className="mb-0">Global traders community</p>
            </Col>
          </Row>
        </Col>
        {/* Third Column */}
        <Col lg={4} className="text-center">
          <h3 className="mb-3 animate-on-scroll">Learn with Milliondots App</h3>
          <p className="mb-4 animate-on-scroll">
            Become a trader who achieves dreams with confidence.
          </p>
          <Image
            src="app-screenshot.jpg"
            fluid
            className="app-img animate-on-scroll"
            alt="App Screenshot"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col lg={12} className="text-center">
          <p className="animated-text animate-on-scroll">and counting...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Learn;
