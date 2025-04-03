import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      {/* // div general del header */}
      <div >
        {/* div de los logos */}
        <div className="flex justify-between items-center py-4">
          {/*div del logo de perfil*/}
          <div className="text-gray-950 text-6xl">
            <CgProfile />
          </div>
          {/* div de los logos de proyectos */}
          <div className="text-gray-950 text-6xl flex gap-4">
            <GoProject />
            <GiSkills />
          </div>
        </div>
        <div className="text-center mt-14">
          <h1 className="font-bold text-6xl">Desarrollador Full Stack & Apasionado por la Tecnología</h1>
          <h2 className="text-2xl mt-6">Cuando disfrutas lo que haces, el código fluye solo.</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
