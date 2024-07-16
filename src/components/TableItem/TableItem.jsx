import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const TableItem = ({ chatter, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.4, delay: index * 0.3 }}
      className="flex flex-col items-center justify-center w-full mb-2"
    >
      <ul className="flex flex-col gap-1 md:w-1/2 w-[min(22rem,25rem)]">
        <li
          onClick={() => {
            navigate(`/chatter/${chatter.username}`);
          }}
          className="border-[1px] border-[#571464] flex cursor-pointer bg-[#3c193f] hover:bg-[#5d2761] items-center justify-around gap-4 w-full transition-[background-color] duration-[0.3s] p-4 rounded-2xl"
        >
          <span className="text-[14px] md:text-base first:font-[bold]">
            #{index + 1}
          </span>
          <img
            className="hidden md:flex w-[2.8rem] h-[2.8rem] rounded-[50%] border-[1px] border-[#571464]"
            src="/assets/user.png"
            alt={chatter.username}
          />
          <p className="w-full text-center text-base md:text-xl tracking-widest break-all">
            {chatter.username}
          </p>
          <span className="text-[#fff] w-[min(30%,20rem)] text-[14px] md:text-base">
            {chatter.messageCount} wpisów
          </span>
        </li>
      </ul>
    </motion.div>
  );
};
