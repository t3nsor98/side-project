import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import Learn from "../components/Learn/Learn.jsx";
import Coreteam from "../components/Coreteam/Coreteam.jsx";
import Membership from "../components/Membership/Membership.jsx";
import Review from "../components/Review/Review.jsx";
import Footer from "../components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Learn />
      <Coreteam />
      <Membership />
      <Review />
      <Footer />
    </>
  );
}

export default App;
