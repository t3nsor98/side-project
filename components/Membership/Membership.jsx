import { useEffect, useRef } from "react";
import "./Membership.css";

function Membership() {
  const animatedTextRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      animatedTextRefs.current.forEach((ref) => {
        if (ref) {
          const elementTop = ref.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
          if (elementTop < viewportHeight) {
            ref.classList.add("show");
          } else {
            ref.classList.remove("show");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="membership-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 membership-left">
            <p
              ref={(el) => (animatedTextRefs.current[0] = el)}
              className="animated-text"
            >
              Go Trading. Go Forward.
            </p>
            <h4
              ref={(el) => (animatedTextRefs.current[1] = el)}
              className="animated-text"
            >
              Milliondots Trading Entrepreneur
            </h4>
            <p
              ref={(el) => (animatedTextRefs.current[2] = el)}
              className="animated-text"
            >
              From absolute basics to an expert level, we cover it all:
              Equipping you with profitable trading skills, advanced strategies,
              and tips to bring in profitability in Equity & FnO covering
              everything about the Indian market. But we're not your average
              program. We don't just teach;
            </p>
          </div>
          <div className="col-lg-6 membership-right">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1628891439478-c613e85af7d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Membership"
                className="membership-image"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="row additional-info-row">
          <div className="col-lg-6">
            <div className="additional-info">
              <div className="additional-info-item">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Learning Method"
                />
                <p>
                  4 Steps <br /> Learning Method
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="additional-info">
              <div className="additional-info-item">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Absolute Basics"
                />
                <p>
                  Starts from <br /> Absolute Basics
                </p>
              </div>
              <button className="enroll-button">Enroll to Membership</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
