import { projects } from "../data";

const Projects = () => {
  return (
    <div
      id="projects"
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full py-60">
        <div className="pb-12">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="flex flex-wrap -m-4 ">
          {projects.map(({ id, src, preview, code, title, description }) => (
            <a href={preview} key={id} className="sm:w-1/2 p-4">
              <div className="flex relative flex-col">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-48 object-cover object-center rounded-md"
                  src={src}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {code}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {title}
                  </h1>
                  <p className="leading-relaxed">{description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
