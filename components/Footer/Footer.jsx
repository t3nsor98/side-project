import { useEffect } from "react";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.querySelector(".footer-section");
      if (footerSection) {
        const rect = footerSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          footerSection.classList.add("scroll-visible");
        } else {
          footerSection.classList.remove("scroll-visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="upper-footer row align-items-center">
          <div className="col-md-6 left">
            <h4>Ready to get started?</h4>
            <p>
              Become a trader who achieves dreams with confidence using proven
              strategies.
            </p>
            <button className="btn btn-light">Enroll to membership</button>
          </div>
          <div className="col-md-6 right">
            {/* Placeholder for future content if needed */}
          </div>
        </div>
        <div className="lower-footer row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/100x50"
              alt="Company Logo"
              className="footer-logo"
            />
            <p>
              Creating a financially literate community and bringing out the
              opportunities in the financial market.
            </p>
          </div>
          <div className="col-md-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <strong>Pages</strong>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Who we Are
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Trading Entrepreneur
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Download Now</h4>
            <div className="download-buttons">
              <img
                src="https://via.placeholder.com/150x50"
                alt="Apple Store"
                className="store-button"
              />
              <img
                src="https://via.placeholder.com/150x50"
                alt="Google Play Store"
                className="store-button"
              />
            </div>
            <img
              src="https://via.placeholder.com/150x300"
              alt="App Screenshot"
              className="app-screenshot"
            />
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <p>© Milliondots. 2023 | Designed by zeptt</p>
          <div className="social-handles">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              X
            </a>
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
