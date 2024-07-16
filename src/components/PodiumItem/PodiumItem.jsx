import React from "react";
import { motion } from "framer-motion";

export const PodiumItem = ({ chatter, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex flex-col min-w-48 items-center relative md:last:mx-24 cursor-pointer"
    >
      {/* <span>{index + 1}</span> */}
      <p className="absolute left-1/2 -top-16 hidden -translate-x-1/2 translate-y-full text-2xl font-black italic podium_placement sm:block">
        #{index + 1}
      </p>
      <img
        className="w-[6.5rem] h-[6.5rem] md:w-[7.5rem] md:h-[7.5rem]  transition-[scale] duration-[0.3s] p-[0.1rem] rounded-[50%] border-[0.2rem] border-solid border-[#571464]"
        src="/assets/user.png"
        alt=""
      />
      <p className="md:text-2xl font-bold tracking-widest">
        {chatter.username}
      </p>
      <span className="text-[0.9rem] text-[#b02eca]">
        {chatter.messageCount} wpisów
      </span>
    </motion.div>
  );
};
