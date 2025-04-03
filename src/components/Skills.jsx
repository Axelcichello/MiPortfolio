import React from "react";
import { FaCode, FaPaintBrush, FaChalkboardTeacher } from "react-icons/fa";
import { FaDatabase, FaProjectDiagram, FaTools } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaPaintBrush className="text-4xl text-gray-600" />,
      title: "Front-End",
      description:
        "Diseño de interfaces intuitivas, accesibilidad, animaciones, interactividad y experiencia de usuario.",
      details: [
        {
          label: "Tecnologias:",
          value: "React, Tailwind CSS, HTML, CSS, JavaScript",
        },
      ],
    },
    {
      icon: <FaCode className="text-4xl text-gray-600" />,
      title: "Back-End",
      description:
        "Creación de APIs, autenticación, manejo de datos, optimización de rendimiento.",
      details: [
        {
          label: "Tecnologias:",
          value: "Laravel, Node.js, PHP, Express.js, Java",
        },
      ],
    },
    {
      icon: <FaDatabase className="text-4xl text-gray-600" />, // Cambiado a FaDatabase
      title: "Bases de datos",
      description:
        "Diseño de bases de datos, consultas eficientes, modelado de datos.",
      details: [{ label: "Tecnologías:", value: "MySQL, PostgreSQL, MongoDB" }],
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-gray-600" />, // Cambiado a FaProjectDiagram
      title: "Gestión de proyectos y diagramas",
      description:
        "Planificación, diseño de procesos, diagramas UML, diccionarios de datos y documentación técnica.",
      details: [
        { label: "Herramientas:", value: "Microsoft Project, Lucidchart, Draw.io, Jira." },
      ],
    },
    {
      icon: <FaTools className="text-4xl text-gray-600" />, // Cambiado a FaTools
      title: "Otras tecnologías",
      description:
        "Manejo de control de versiones, configuración de servidores y herramientas de desarrollo.",
      details: [
        { label: "Tecnologías:", value: "Git, GitHub, Linux Server, Windows Server, Apache, VS Code" },
      ],
    },
  ];

  // Dividir el array en dos partes
  const firstThreeSkills = skills.slice(0, 3); // Primeras tres habilidades
  const remainingSkills = skills.slice(3); // Habilidades restantes

  return (
    <section className="py-10 bg-black rounded-t-3xl">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Mis habilidades
        </h2>

        {/* Grid para las primeras tres habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {firstThreeSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
              </div>
              <div className="mt-4">
                <ul className="text-left">
                  {skill.details.map((detail, i) => (
                    <li key={i} className="mb-2">
                      <span className="font-bold text-gray-800">
                        {detail.label}
                      </span>{" "}
                      <span className="text-gray-800">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Grid para las habilidades restantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {remainingSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition flex flex-col h-full"
            >
              <div className="flex-grow">
              <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
              </div>
              <div className="mt-4">
                <ul className="text-left">
                  {skill.details.map((detail, i) => (
                    <li key={i} className="mb-2">
                      <span className="font-bold text-gray-800">
                        {detail.label}
                      </span>{" "}
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