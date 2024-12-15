import React from "react";

const CoursesCard = ({ img, title, description, dataAos }) => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-white shadow-md hover:shadow-lg transition-all duration-300 md:w-[22%] w-[90%] p-6 rounded-xl cursor-pointer"
      data-aos={dataAos} // AOS Animation
    >
      {/* Card Image */}
      <div className="w-28 h-28 flex items-center justify-center">
        <img src={img} alt={title} className="object-contain w-full h-full" />
      </div>

      {/* Card Content */}
      <div className="text-center mt-4">
        <h3 className="font-semibold text-xl text-[#333]">{title}</h3>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
