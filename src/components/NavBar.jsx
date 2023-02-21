import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className="flex justify-between items-center w-full h-20 text-white fixed bg-black z-20">
      <div>
        <Link to="about" smooth duration={500} className="text-xl italic font-signature ml-2">
          Frank Asamoah
        </Link>
      </div>
      <nav className="hidden md:flex">
        <Link
          to="home" smooth duration={500}
          className="px-4 cursor-pointer capitalize hover:scale-105 hover:text-white text-white duration-200"
        >
          home
        </Link>
        <Link
          to="about" smooth duration={500}
          className="px-4 cursor-pointer capitalize hover:scale-105 hover:text-white text-white duration-200"
        >
          about
        </Link>
        <Link
          to="projects" smooth duration={500}
          className="px-4 cursor-pointer capitalize hover:scale-105 hover:text-white text-white duration-200"
        >
          project
        </Link>

        <Link
          to="skills" smooth duration={500}
          className="px-4 cursor-pointer capitalize hover:scale-105 hover:text-white text-white duration-200"
        >
          skills
        </Link>
        <Link
          to="contact" smooth duration={500}
          className="px-4 cursor-pointer capitalize hover:scale-105 hover:text-white text-white duration-200"
        >
          contact
        </Link>
      </nav>
      <div
        className="pr-4 md:hidden cursor-pointer z-10 text-white"
        onClick={handleClick}
      >
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {click && (
        <nav
          className="flex flex-col absolute h-screen w-full top-0 left-0 justify-center
        bg-gradient-to-b from-black to-gray-800 items-center text-gray-500"
        >
          <Link
            to="home" smooth duration={500}
            onClick={() => setClick(!click)}
            className="cursor-pointer capitalize px-4 py-6 text-2xl hover:scale-105 hover:text-white text-gray-500 duration-200"
          >
            home
          </Link>
          <Link
            to="about" smooth duration={500}
            onClick={() => setClick(!click)}
            className="px-4 py-6 text-2xl cursor-pointer capitalize hover:scale-105 hover:text-white text-gray-500 duration-200"
          >
            about
          </Link>
          <Link
            to="projects" smooth duration={500}
            onClick={() => setClick(!click)}
            className="px-4 py-6 text-2xl cursor-pointer capitalize hover:scale-105 hover:text-white text-gray-500 duration-200"
          >
            projects
          </Link>

          <Link
            to="skills" smooth duration={500}
            onClick={() => setClick(!click)}
            className="px-4 py-6 text-2xl cursor-pointer capitalize hover:scale-105 hover:text-white text-gray-500 duration-200"
          >
            skills
          </Link>
          <Link
            to="contact" smooth duration={700}
            onClick={() => setClick(!click)}
            className="px-4 py-6 text-2xl cursor-pointer capitalize hover:scale-105 hover:text-white text-gray-500 duration-200"
          >
            contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
