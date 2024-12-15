import img from "/home.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[100px] pt-[80px] bg-slate-50">
      {/* Left Content */}
      <div
        className="md:w-1/2 space-y-5"
        data-aos="fade-right" // AOS Animation
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Welcome to
          <span className="text-[#ff5757] pl-2">Classroom!</span>
        </h2>
        <h3 className="text-xl md:text-3xl font-semibold leading-snug">
          Unlock Knowledge with
          <span className="text-[#ff5757] pl-1">Classroom</span>
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Classroom is your gateway to a world of limitless learning
          possibilities. Explore a vast library of courses—from academic
          subjects to practical skills—designed to empower you and achieve your
          goals.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Get Started" />
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="md:w-1/2 flex justify-center mt-5"
        data-aos="fade-left" // AOS Animation
      >
        <img
          src={img}
          alt="Classroom Illustration"
          className="md:w-[90%] max-h-[350px] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Home;
