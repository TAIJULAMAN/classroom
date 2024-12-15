import React, { useEffect } from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation only runs once
    });
  }, []);

  return (
    <div className="flex flex-col items-center md:px-[100px] px-[20px] pt-[80px] bg-slate-50">
      {/* Section Heading */}
      <Heading title1="Our" title2="Courses" />

      {/* Description */}
      <p className="text-gray-600 text-center mt-4 max-w-3xl">
        Explore our range of comprehensive courses designed to help you excel in
        your career and achieve your learning goals. From web and app
        development to graphic design and digital marketing, we provide
        top-notch training tailored to your needs.
      </p>

      {/* Courses Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 w-full">
        <CoursesCard
          img="/course1.png"
          title="Web Development"
          description="Learn the latest technologies to build modern, responsive websites and web applications."
          dataAos="fade-up"
        />
        <CoursesCard
          img="/course2.png"
          title="App Development"
          description="Master the skills to create powerful and user-friendly mobile applications."
          dataAos="fade-up"
        />
        <CoursesCard
          img="/course3.png"
          title="Graphic Design"
          description="Unleash your creativity with visual designs and tools used by professionals."
          dataAos="fade-up"
        />
        <CoursesCard
          img="/course4.png"
          title="Digital Marketing"
          description="Learn to create campaigns and grow businesses in the digital landscape."
          dataAos="fade-up"
        />
      </div>
    </div>
  );
};

export default Courses;
