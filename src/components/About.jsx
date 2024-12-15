import img from "/about.png";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-10 px-[20px] md:px-[100px] pt-[80px] bg-gray-50">
      {/* Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        data-aos="fade-left"
      >
        <img
          src={img}
          alt="About Section"
          className="rounded-lg shadow-lg w-full md:w-[90%] max-h-[350px] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full md:w-1/2 text-left space-y-6"
        data-aos="fade-right" // Animation added
      >
        <Heading title1="About" title2="Classroom" />
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-[#ff5757]">Classroom</span>, we
          strive to create an exceptional learning environment. Whether you are
          a student or teacher, our open-source tools, components, and resources
          are here to empower you.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Join us as we redefine classrooms with modern technology. Explore free
          tools, resources, and components tailored to make learning engaging
          and fun.
        </p>

        <div className="mt-8">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Get in Touch" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
