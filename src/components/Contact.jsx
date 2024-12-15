import React, { useEffect } from "react";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 pt-[80px] px-[20px] md:px-[100px]">
      {/* Section Heading */}
      <Heading title1="Contact" title2="Us" />
      <p className="text-gray-500 text-center mt-4 mb-8 max-w-2xl">
        Have questions or feedback? Reach out to us by filling out the form
        below. We'll get back to you as soon as possible!
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 space-y-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex flex-col">
            <label htmlFor="userName" className="text-gray-700 font-medium">
              Your Name
            </label>
            <input
              className="py-3 px-4 border rounded-md outline-none focus:border-[#ff5757] transition-all duration-300"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail" className="text-gray-700 font-medium">
              Your Email
            </label>
            <input
              className="py-3 px-4 border rounded-md outline-none focus:border-[#ff5757] transition-all duration-300"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber" className="text-gray-700 font-medium">
              Your Number
            </label>
            <input
              className="py-3 px-4 border rounded-md outline-none focus:border-[#ff5757] transition-all duration-300"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMessage" className="text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              className="py-3 px-4 h-32 border rounded-md outline-none focus:border-[#ff5757] transition-all duration-300 resize-none"
              name="userMessage"
              id="userMessage"
              placeholder="Type your message here..."
            />
          </div>

          <div className="flex justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        {/* Contact Illustration */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/contact.png"
            alt="contact illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
