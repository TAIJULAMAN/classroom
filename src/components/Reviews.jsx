import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/badhon.jpg";
import img2 from "../assets/images/bappy.jpg";
import img3 from "../assets/images/opu.jpg";

const Reviews = () => {
  return (
       <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customers Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Badhon" />
        <ReviewCard img={img2} title="Bappy" />
        <ReviewCard img={img3} title="Opu" />
      </div>
    </div>
  );
};

export default Reviews;

