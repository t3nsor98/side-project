import { useEffect, useRef } from "react";
import "./Review.css";

function Review() {
  const testimonialSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialSectionRef.current) {
        const elementTop =
          testimonialSectionRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const opacityValue = Math.max(
          0,
          (viewportHeight - elementTop) / viewportHeight
        );
        testimonialSectionRef.current.style.opacity = opacityValue.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="review-section py-5"
      style={{ backgroundColor: "#110025", color: "#ffffff" }}
    >
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <div className="header-text">
              <h4 className="mb-3">What our students say about us.</h4>
              <p>Go Trading Go Forward.</p>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <button className="btn btn-primary read-more-button">
              Read more Stories
            </button>
          </div>
        </div>

        <div className="testimonial-container">
          <div className="top-testimonials overflow-hidden mb-4">
            <div className="testimonial d-inline-block p-3 me-3">
              <h5 className="mb-3">Rajesh Sharma</h5>
              <p className="mb-3">
                "I learned so much from Milliondots. Their courses are
                fantastic!"
              </p>
              <div className="student-info d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Rajesh Sharma"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0">Rajesh Sharma</p>
                  <p className="mb-0">Student</p>
                </div>
              </div>
            </div>
            {/* Add more testimonials here */}
          </div>

          <div className="bottom-testimonials mb-4" ref={testimonialSectionRef}>
            <div className="testimonial p-3 mb-3">
              <h5 className="mb-3">Anjali Patel</h5>
              <p className="mb-3">
                "Milliondots changed the way I approach trading. Highly
                recommended!"
              </p>
              <div className="student-info d-flex align-items-center">
                <img
                  src="https://images.unsplash.com/photo-1607344557218-cbff0292b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Anjali Patel"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0">Anjali Patel</p>
                  <p className="mb-0">Student</p>
                </div>
              </div>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>

        <div
          className="testimonial-title text-center"
          ref={testimonialSectionRef}
        >
          <p>Testimonials</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
