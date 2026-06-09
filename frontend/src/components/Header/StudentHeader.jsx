import { BsPerson } from "react-icons/bs";

import logo from "../../assets/icons/logo.svg";

export function StudentHeader({ personName, hasBackButton }) {
  return (
    <header
      className={`
          fixed top-0 z-50
          flex justify-between items-center
          py-4 px-4 md:px-10
          bg-[#201f22]/80
          border-b-2 border-[#151416]/30
          w-full
          backdrop-blur-md
          ${hasBackButton && "md:pl-24"}
        `}
    >
      <img src={logo} alt="Letmerate" className="w-28" />
      <div className="flex items-center gap-2">
        <span className="hidden text-[#FEFEFE]/80 text-lg md:block">
          {personName}
        </span>
        <span className="block text-[#FEFEFE]/80 text-lg md:hidden">
          {personName.split(" ")[0]}
        </span>
        <div className="flex items-center justify-center p-2 bg-[#FEFEFE]/80 rounded-full">
          <BsPerson size={24} />
        </div>
      </div>
    </header>
  );
}
