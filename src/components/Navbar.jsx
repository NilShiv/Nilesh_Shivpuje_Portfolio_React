import { FaCodeMerge } from "react-icons/fa6";
import logo from "../assets/nileshShivpujeLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaHackerrank, FaCode, FaCodeBranch, FaFileCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 h-10" src={logo} alt="Profile-Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/nilshiv/", "_blank")
          }
        />
        <FaGithub
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.github.com/NilShiv/", "_blank")
          }
        />
        <FaHackerrank
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.hackerrank.com/profile/nilshiv000", "_blank")
          }
        />
        <FaCode
          className="cursor-pointer"
          onClick={() =>
            window.open("https://leetcode.com/u/Nil_Shiv_/", "_blank")
          }
        />
        <FaInstagram
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/nil_shiv_/", "_blank")
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
