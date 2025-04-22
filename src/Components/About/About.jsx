import React from 'react';

const About = () => {
    return (
        <div className="px-6 py-10 md:px-20 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-green-600">About</h2>
            <p className="mb-8 text-lg">
                Hello, I'm Adarsh, a zealous and energetic Coder, with a Bachelor’s Degree in Computer Science.
                And proficiency in JAVA, Data Structures, and a thorough understanding of Python
                basics. My goal is to obtain a challenging position in a reputable organization,
                maximizing knowledge, skills and contributing to the success of the organization

            </p>

            {/* Education & Training */}
            <section id = "about"  className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Education & Training</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Bachelor’s degree in Computer Science , Teerthanker Mahaveer University, [2023]</li>
                    <li>Data Science with Python Programming, Shiksha Jn, [2022]</li>
                </ul>
            </section>

            {/* Skills & Expertise */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Skills & Expertise</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Proficient in [Java, JavaScript, Python]</li>
                    <li>Experienced with [React, Django]</li>
                    <li>Strong grasp of [MVC architecture]</li>
                    <li>Excellent problem-solving skills</li>
                    <li>Effective communicator and collaborator</li>
                </ul>
            </section>

            {/* Professional Experience */}
            {/* <section className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Professional Experience</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>[Job Title], [Company/Organization], [Dates] — Brief description of responsibilities and achievements</li>
                    <li>[Freelance/Contract Work], [Client/Organization], [Dates] — Brief description of projects and contributions</li>
                </ul>
            </section> */}

            {/* Achievements & Awards */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Achievements & Awards</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>[Participated in-Aadhar Hackathon], [2021]</li>
                    <li>[Team Leader in Smart India Hackathon], [2022]</li>
                    <li>[Participated in Technovation], [2025]</li>
                </ul>
            </section>

            {/* Mission Statement */}
            <section>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Mission Statement</h3>
                <p className="text-gray-700">
                    My mission is to leverage my skills and creativity to deliver innovative  solutions that exceed client expectations
                    and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges
                    and opportunities to expand my horizons.
                </p>
            </section>
        </div>
    );
};

export default About;
