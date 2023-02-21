import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialMedia = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md  bg-gray-500 rounded-tr-md"
        >
          <a
            href="https://linkedin.com/"
            className="flex justify-between items-center w-full text-white"
          target="_blank" rel="noreferrer">
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md  bg-gray-500"
        >
          <a
            href="https://github.com/"
            className="flex justify-between items-center w-full text-white"
            target="_blank" rel="noreferrer">
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md  bg-gray-500"
        >
          <a
            href="mailto:frank.asamoah119@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md  bg-gray-500 rounded-br-md"
          download="true"
        >
          <a
            href="/lebenslauf.pdf"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
