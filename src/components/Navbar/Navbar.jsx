import React from "react";
import { GiPodium } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegSmileWink } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="relative w-full">
      <div className="hidden items-center justify-between gap-10 rounded-2xl border-[1px] border-[#571464] bg-[#3c193f]  px-14 py-5 backdrop-blur-md xl:flex">
        <a
          className="flex items-center gap-4 text-gray transition-all duration-300 hover:grayscale-0 grayscale-0 activeLink"
          href=""
        >
          <FaHome size={20} /> Strona główna
        </a>
        <a
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href=""
        >
          <LuMessagesSquare size={20} /> Ranking wiadomości
        </a>
        <a
          target="_blank"
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href=""
        >
          <GiPodium size={20} /> Ranking emotkersów
        </a>
        <a
          target="_blank"
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href=""
        >
          <FaRegSmileWink size={20} /> Najczęściej używane emotki
        </a>
      </div>
    </nav>
  );
};
