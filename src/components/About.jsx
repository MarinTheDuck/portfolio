import React from "react";

const About = () => {
  return (
    <div
      name="o meni"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            O meni
          </p>
        </div>

        <p className="text-xl mt-20">
          Ja sam Marin, Junior Software Developer. 
          Obožavam programiranje, računala i opčenito bilo što u IT sektoru! 
          Trenutno sam u srednjoj školi gdje također učim programirati.
        </p>

        <br />

        <p className="text-xl">
          Programiranje me krenulo interesirati kada bi sa prijateljima igrao igrice 
          i htio bi nadodati nešto u njih ili napraviti sam svoju igricu, 
          ili kada bi trebao napraviti nešto što bi se lakše napravilo sa nekom aplikacijom, 
          no ta aplikacija nije postojala. U takvim situacijama sam mislio kako bi bilo super kada bi 
          ja sam mogao napraviti nešto da rješim svoj neki problem, te sam zato krenuo programirati.
          Prvi programski jezik kojeg sam koristio bio je C#, no prvi programski jezik kojeg sam zapravo
          naučio kako spada je bio C.
        </p>
      </div>
    </div>
  );
};

export default About;
