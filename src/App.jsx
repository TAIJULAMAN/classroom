import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div id="reviews">
            <Reviews />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
