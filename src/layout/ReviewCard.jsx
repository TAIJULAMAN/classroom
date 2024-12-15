import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const ReviewCard = (props) => {
  return (
    <div
      className="flex flex-col w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      data-aos={props.dataAos}
    >
      {/* Header with image and stars */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover border-2 border-[#ff5757]"
            src={props.img}
            alt="customer"
          />
          <div>
            <h2 className="font-semibold text-xl text-gray-800">
              {props.title}
            </h2>
            <div className="flex gap-1 text-orange-500">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
          </div>
        </div>
        <FaQuoteRight className="text-[#ff5757]" size={42} />
      </div>

      {/* Feedback Text */}
      <p className="text-gray-600 leading-relaxed">{props.feedback}</p>
    </div>
  );
};

export default ReviewCard;
