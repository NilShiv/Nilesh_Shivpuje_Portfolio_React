import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          About
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImage} alt="About Me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6" style={{ whiteSpace: "pre-line" }}>{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
