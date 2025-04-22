import React from 'react';

const projects = [
  {
    title: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    description: 'A basic Spotify clone website built using modern web technologies.',
    videoLink: 'https://www.linkedin.com/in/adarsh-malik/',
    codeLink: 'https://github.com/AdarshMalik21/',
  },
  {
    title: 'Django',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
    description: 'A fully functional blog website built using Django, featuring user authentication, post creation, editing, and deletion. The project follows MVC architecture and provides a clean and responsive UI for a smooth blogging experience.',
    videoLink: 'https://www.linkedin.com/in/adarsh-malik/',
    codeLink: 'https://github.com/AdarshMalik21/',
  },
  {
    title: 'React Js',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'Portfolio website built using React JS, showcasing my skills and projects. The website is responsive and user-friendly, providing a seamless experience across devices.',
    videoLink: 'https://www.linkedin.com/in/adarsh-malik/',
    codeLink: 'https://github.com/AdarshMalik21/',
  },
//   {
//     title: 'Node JS',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     videoLink: 'https://example.com/node-video',
//     codeLink: 'https://github.com/AdarshMalik21/',
//   },
];

const Portfolio = () => {
  return (
    <div  className="px-6 py-12 md:px-20 bg-white text-gray-800">
      <h2  className="text-3xl font-bold mb-2 text-gray-800">PortFolio</h2>
      <a href="#" className="text-gray-600  mb-8 inline-block">Featured Projects</a>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition transform scale-3d"
          >
            <img
            id = "portfolio"
              src={project.image}
              alt={project.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Video
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
