import { technologies } from "../data";

const Skills = () => {
  return (
    <div
      id="skills"
      name="skills"
      className="relative bg-gradient-to-b from-black to-gray-800 w-full text-white pb-60"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Skills & Technologies
          </p>
          
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 text-center">
          {technologies.map(({ id, title, style }) => (
            <div
              className={`shadow-md ${style} rounded-lg hover:scale-105 duration-500 py-2`}
              key={id}
            >
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
