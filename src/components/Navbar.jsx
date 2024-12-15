import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ff5757]">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-[20px] md:px-[100px] py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/classroom.png"
            alt="Classroom Logo"
            className="w-10 h-10 object-contain"
          />
          <Link
            to="home"
            className="text-2xl font-bold text-[#ff5757] cursor-pointer"
          >
            Classroom
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-lg">
          {["home", "about", "courses", "reviews"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-[#ff5757] underline"
              className="hover:text-[#ff5757] transition-all cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="px-4 py-2 bg-[#ff5757] text-white font-medium rounded-md hover:bg-[#ff3e3e] transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleChange}
            aria-label="Toggle menu"
            className="p-2 bg-[#ff5757] rounded-md text-white transition-all hover:bg-[#ff3e3e]"
          >
            {menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 w-[75%] h-full bg-white shadow-lg flex flex-col items-center pt-16 gap-8 text-lg font-semibold transition-transform duration-300`}
      >
        {["home", "about", "courses", "reviews", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setMenu(false)}
            className="text-[#ff5757] hover:text-[#ff3e3e] transition-all cursor-pointer"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
