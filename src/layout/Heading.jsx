
const Heading = (props) => {
  return (
    <div>
      <h3 className="text-xl md:text-4xl font-semibold">
        {props.title1} <span className=" text-[#ff5757]">{props.title2}</span>
      </h3>
    </div>
  );
};

export default Heading;
