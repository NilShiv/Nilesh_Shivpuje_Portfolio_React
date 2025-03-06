import { DiJava } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { SiMysql, SiSpring } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Technologies
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-gradient-to-b from-[#f89820] to-[#5382a1]">
          <DiJava className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-gradient-to-b from-[#00758f] to-[#f29111]">
          <SiMysql className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-gradient-to-b from-[#60af02] to-[#0c6301]">
          <SiSpring className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-gradient-to-b from-[#0d6efd] to-[#6610f2]">
          <FaBootstrap className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4 bg-gradient-to-b from-[#dd1b16] to-[#a6120d]">
          <RiAngularjsLine className="text-7xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
