// import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-slate-200 text-black mt-8 md:mt-0">
    <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
      <div className=" w-full md:w-1/4">
        <h1 className=" font-semibold text-xl pb-4">Classroom</h1>
        <p className=" text-sm">
          Welcome to our classroom! Explore our courses,classes and discover the perfect course to develop your
          future.
        </p>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
        <nav className=" flex flex-col gap-2">
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
           home
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            About
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            Courses
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            Reviews
          </a>
        </nav>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
        <nav className=" flex flex-col gap-2">
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            Web design
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            Web development
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            web maintenance
          </a>
        </nav>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
        <nav className=" flex flex-col gap-2">
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            Classroom@email.com
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
            01892595424
          </a>
          <a
            className=" hover:text-backgroundColor transition-all cursor-pointer"
            href="/"
          >
           @classroom
          </a>
        </nav>
      </div>
    </div>
    <div>
      <p>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-backgroundColor">
            {" "}
           Md Shah Aman Patwary
          </span>
          | All rights reserved
        </p>
      </p>
    </div>
  </div>
  );
};
export default Footer;
