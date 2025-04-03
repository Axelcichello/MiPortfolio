import React from "react"; // Agrega esta línea
import Header from "./components/Header";
import IconBanner from "./components/IconBanner";
import Bio from "./components/Bio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="max-w-[90%] mx-auto mt-10">
        <Header />
        <IconBanner />
      </div>
      {/*saco el div para que no me afecte el container en el gondo negro */}
      <Bio />
      <div className="max-w-[90%] mx-auto mt-10">
        <Skills />
      </div>
    </>
  );
}

export default App;
