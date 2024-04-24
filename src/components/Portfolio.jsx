import React from "react";
import samoborNT from "../assets/portfolio/SamoborNT.jpg";
import whapper from "../assets/portfolio/whapper.png";
import rubik from "../assets/portfolio/rubik.png";
import zmijica from "../assets/portfolio/zmijica.png";
import ssviewer from "../assets/portfolio/ssviewer.png";
import pcwip from "../assets/portfolio/pcwip.png";
// import embeddedIot from "../assets/portfolio/embeddedIot.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: ssviewer,
      link2:
        "https://play.google.com/store/apps/details?id=com.strukovnasamobor.ssviewer_ucenici.twa",
      link3: "https://rasporedsati.strukovnasamobor.com/",
    },
    {
      id: 1,
      src: samoborNT,
      link: "https://github.com/MarinTheDuck/SamoborNT",
      link2:
        "https://play.google.com/store/apps/details?id=com.strukovnasamobor.samobornt&hl=en&gl=US",
    },
    {
      id: 2,
      src: pcwip,
    },
    // {
    //   id: 3,
    //   src: embeddedIot,
    // },
    {
      id: 3,
      src: zmijica,
      link: "https://replit.com/@MarinLtd/Zmijica",
    },
    {
      id: 4,
      src: rubik,
      link: "https://replit.com/@MarinLtd/Rubik2D",
    },
    {
      id: 5,
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
          <p className="py-6">
            Neki od mojih projekta
          </p>
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
                {/* render only if link property exists */}
                {portfolios[id].link && (
                  <a
                    href={portfolios[id].link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-blue-800 to-gray rounded text-center"
                  >
                    Code
                  </a>
                )}

                
                {/* render only if link2 property exists */}
                {portfolios[id].link2 && (
                  <a
                    href={portfolios[id].link2}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-green-800 to-gray rounded text-center"
                  >
                    App
                  </a>
                )}
                {/* render only if link3 property exists */}
                {portfolios[id].link3 && (
                  <a
                    href={portfolios[id].link3}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-red-800 to-gray rounded text-center"
                  >
                    Web
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
