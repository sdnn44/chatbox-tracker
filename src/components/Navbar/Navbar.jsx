import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiPodium } from "react-icons/gi";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";

const navItems = [
  { to: "/", icon: <FaHome size={20} />, label: "Strona główna" },
  {
    to: "/leaderboard",
    icon: <LuMessagesSquare size={20} />,
    label: "Ranking wiadomości",
  },
  {
    to: "/spammer-leaderboard",
    icon: <GiPodium size={20} />,
    label: "Ranking spammerów",
  },
  {
    to: "https://slajdev-projects.vercel.app/",
    icon: <GoProjectSymlink size={20} />,
    label: "Inne projekty",
    external: true,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full">
      <div className="flex items-center justify-between px-4 py-5 xl:hidden">
        <a className="text-white font-semibold tracking-widest" href={"/"}>
          chatbox-tracker
        </a>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`xl:flex md:rounded-2xl border-[1px] border-[#571464] bg-[#3c193f] px-14 py-5 backdrop-blur-md ${
          isOpen ? "block" : "hidden"
        } xl:flex`}
      >
        <ul className="flex flex-col xl:flex-row justify-between w-full">
          {navItems.map(({ to, icon, label, external }) => (
            <li key={label} className="my-2 xl:my-0">
              {external ? (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 xl:gap-4 text-white grayscale transition-all duration-300 hover:grayscale-0"
                >
                  {icon} {label}
                </a>
              ) : (
                <NavLink
                  to={to}
                  className="flex items-center gap-2 xl:gap-4 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  {icon} {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
