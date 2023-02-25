import { Link } from "react-scroll";
import profileImage from "../assets/profileImage.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    // <AiOutlineArrowRight />
    <div
      id="home"
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-fit"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 py-36 md:py-60 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-5xl text-white font-bold">
            Full Stack web developer
          </h2>
          <p className=" text-white pt-12 pb-4 max-w-md">
            Full stack web developer who enjoys connecting the dots: be it ideas
            from different disciplines, people from different teams, or
            applications from different industries
          </p>
          <div>
            <Link
              to="projects" smooth duration={500}
              className="group text-gray-700 w-fit py-3 px-3 my-2 hidden md:flex items-center rounded-md bg-gradient-to-r 
            from-cyan-500 via-orange-200 to-blue-500 cursor-pointer "
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-5">
          <img
            src={profileImage}
            alt="personal profile"
            className="object-cover mx-auto w-2/3 rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
