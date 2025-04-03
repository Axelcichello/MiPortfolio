import React from "react";
import { FaCode, FaPaintBrush, FaChalkboardTeacher } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaPaintBrush className="text-4xl text-gray-600" />,
      title: "Front-End",
      description: "Diseño de interfaces intuitivas, accesibilidad, animaciones, interactividad y experiencia de usuario.",
      details: [{ label: "Tecnologias:", value: "React, Tailwind CSS, HTML, CSS, JavaScript" }],
    },
    {
      icon: <FaCode className="text-4xl text-gray-600" />,
      title: "Back-End",
      description: "Creación de APIs, autenticación, manejo de datos, optimización de rendimiento.",
      details: [{ label: "Tecnologias:", value: "Laravel, Node.js, PHP, Express.js, Java" }],
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-gray-600" />,
      title: "Bases de datos",
      description: "Diseño de bases de datos, consultas eficientes, modelado de datos.",
      details: [{ label: "Tecnologias:", value: "MySQL, PostgreSQL, MongoDB" }],
    },
  ];

  return (
    <section className="py-20 bg-gray-950 rounded-t-3xl">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Mis habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Contenido superior */}
              <div className="flex-grow">
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
              </div>
              {/* Tecnologías */}
              <div className="mt-4">
                <ul className="text-left">
                  {skill.details.map((detail, i) => (
                    <li key={i} className="mb-2">
                      <span className="font-bold text-gray-800">{detail.label}</span>{" "}
                      <span className="text-gray-800">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;