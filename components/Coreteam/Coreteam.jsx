import { useEffect } from "react";
import "./Coreteam.css";

function Coreteam() {
  useEffect(() => {
    const handleScroll = () => {
      const dreamersText = document.querySelector(".dreamers-text");
      if (dreamersText) {
        const rect = dreamersText.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          dreamersText.classList.add("scroll-up");
        } else {
          dreamersText.classList.remove("scroll-up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="coreteam-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 coreteam-left">
            <h3>
              Core team <br /> who changed trading
            </h3>
            <p>
              Milliondots is a team of spirited financial educators who dream of
              working with more financially sustainable people.
            </p>
            <h3 className="dreamers-text">Dreamers</h3>
          </div>
          <div className="col-lg-6 coreteam-right">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Core Team"
              className="coreteam-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coreteam;
