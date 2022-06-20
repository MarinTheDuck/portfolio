import React from "react";
import samoborNT from "../assets/portfolio/SamoborNT.jpg";
import whapper from "../assets/portfolio/whapper.png";
import rubik from "../assets/portfolio/rubik.png";
import zmijica from "../assets/portfolio/zmijica.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: zmijica,
      link: "https://replit.com/@MarinLtd/Zmijica",
    },
    {
      id: 1,
      src: samoborNT,
      link: "https://github.com/MarinTheDuck/SamoborNT",
    },
    {
      id: 2,
      src: rubik,
      link: "https://replit.com/@MarinLtd/Rubik2D",
    },
    {
      id: 3,
      src: whapper,
      link: "https://replit.com/@MarinLtd/Whapper",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Neki od mojih projekta / neki od projekta u kojim sam sudjelovao</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-blue-800 to-gray rounded text-center">
                  Pregledaj
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
