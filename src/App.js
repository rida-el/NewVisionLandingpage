import logo from "./logo.svg";
import "./App.css";
import hero from "./Componants/img/hero.png";
import Navbar from "./Componants/Navbar/Navbar";
import Strategie from "./Componants/strategie/Strategie";
import Project from "./Componants/Projects/Project";

const App = () => {
  return (
    <section
      className="bg-url h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4 relative">
        {/* <h2 className="text-2xl font-medium ">Fashion Tips</h2> */}
        <h1 className="font md:text-5xl text-3xl py-1 text-white absolute top-28 left-40">
          explorons les limites du <span className="sous-font">digital</span>
        </h1>
        <h1 className="font md:text-5xl text-3xl py-1 text-white absolute top-20 left-20">
          Entre <span className="sous-font">projets</span> et{" "}
          <span className="sous-font">innovation</span>
        </h1>
        <div className="">
          <img
            className="hero-size absolute top-20 right-0 "
            src={hero}
            alt=""
          />
          <p className="text-3xl rot absolute top-30">SCROL</p>
        </div>
      </div>
      <Strategie />
      <Project />
    </section>
    
  );
};

export default App;
