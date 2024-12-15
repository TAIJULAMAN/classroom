import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-[#ff5757] py-2 px-3 rounded-md mt-5 border-2 text-white">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
