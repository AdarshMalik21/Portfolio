import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiReact, SiNodedotjs } from "react-icons/si";
import MyPhoto from "../../assets/MyPhoto.jpg"; // replace with your image path
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white">

            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <p className="text-sm text-gray-500 mb-2">Welcome In My Feed</p>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Hello, I'm a
                    <ReactTyped
                        className="text-red-700 font-bold pl-2"
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Adarsh is a passionate and detail-oriented Web Developer with a strong command over the MERN Stack (MongoDB, Express.js, React.js, Node.js). With a background in IT and hands-on experience in creating responsive and user-friendly web applications, I specialize in delivering elegant frontend experiences paired with robust backend solutions. I am continuously learning and evolving with the latest tech trends and strive to build impactful software solutions that combine functionality with aesthetics.

                    Skilled in:
                    - React.js, Tailwind CSS, JavaScript, HTML, CSS
                    - Node.js, Express.js, MongoDB, RESTful APIs
                    - Git, GitHub, Firebase, and deployment
                    - Agile methodologies & collaborative teamwork

                    Currently exploring: Django, full-stack project integration, and advanced data structures.

                </p>

                {/* Social Icons */}
                <div className="flex  justify-between">
                    <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
                        <span className="text-sm text-gray-500">Available on</span>
                        <div className="flex gap-4 text-xl text-gray-700">
                            <FaFacebook className="hover:text-blue-600 cursor-pointer" onClick={() => window.open("https://facebook.com")} />
                            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
                            <FaGithub className="hover:text-black cursor-pointer" />
                            <FaTelegram className="hover:text-blue-400 cursor-pointer" />
                        </div>
                    </div>

                    {/* Working On Icons */}
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <span className="text-sm text-gray-500">Currently working on</span>
                        <div className="flex gap-4 text-2xl text-gray-700">

                            <SiTailwindcss className="hover:text-blue-500" />
                            <SiReact className="hover:text-cyan-500" />
                            <SiNodedotjs className="hover:text-green-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src={MyPhoto}
                    alt="Developer"
                    className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-200 shadow-xl"
                />
            </div>
        </section>
    );
};

export default Hero;
