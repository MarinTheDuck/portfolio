import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";
import java from "../assets/java.jpg";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import kotlin from "../assets/kotlin.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cppicon.png";
import cproglang from "../assets/Cproglang.png";
import csharp from "../assets/csharp.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 16,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 10,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-violet-400",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: cproglang,
      title: "C",
      style: "shadow-indigo-700",
    },
    {
      id: 14,
      src: cpp,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 15,
      src: csharp,
      title: "C#",
      style: "shadow-violet-600",
    },
  ];

  return (
    <div
      name="tehnologije"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tehnologije
          </p>
          <p className="py-6">Tehnologije s kojim imam iskustva</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
