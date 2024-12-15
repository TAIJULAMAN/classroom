import ReviewCard from "../layout/ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Reviews = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center px-[20px] md:px-[100px] pt-[40px] bg-slate-50">
      {/* Section Heading */}
      <h1 className="font-bold text-center text-4xl lg:mt-14 mt-20 text-gray-800">
        Customer <span className="text-[#ff5757]">Reviews</span>
      </h1>
      <p className="text-gray-500 text-center mt-4 mb-8 max-w-2xl mx-auto">
        What our customers say about us! Check out their experiences and
        feedback.
      </p>

      {/* Review Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <ReviewCard
          img="/avatar1.png"
          title="Mathew Hade"
          feedback="The platform is absolutely amazing! The courses are well-structured, and I learned so much in a short time."
          dataAos="fade-up"
        />
        <ReviewCard
          img="/avatar2.png"
          title="Joss Butler"
          feedback="Exceptional experience! Highly recommend for anyone looking to upgrade their skills and knowledge."
          dataAos="fade-up"
        />
        <ReviewCard
          img="/avatar3.png"
          title="Angelina Jolie"
          feedback="Great content and instructors. The interactive approach makes learning fun and engaging!"
          dataAos="fade-up"
        />
      </div>
    </div>
  );
};

export default Reviews;
