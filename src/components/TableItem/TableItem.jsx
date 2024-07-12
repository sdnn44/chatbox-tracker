import React from "react";

export const TableItem = ({ chatter, index }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-2">
      <ul className="flex flex-col gap-1 md:w-1/2 w-[min(22rem,25rem)]">
        <li className="border-[1px] border-[#571464] flex cursor-pointer bg-[#3c193f] hover:bg-[#5d2761] items-center justify-around gap-4 w-full transition-[background-color] duration-[0.3s] p-4 rounded-2xl">
          <span className="first:text-base first:font-[bold]">
            #{index + 1}
          </span>
          <img
            className="hidden md:flex w-[2.8rem] h-[2.8rem] rounded-[50%] border-[1px] border-[#571464]"
            src="/assets/user.png"
            alt={chatter.username}
          />
          <p className="w-full text-center text-xl tracking-widest break-all">
            {chatter.username}
          </p>
          <span className="text-[#fff] w-[min(30%,20rem)]">
            {chatter.messageCount} wpisów
          </span>
        </li>
      </ul>
    </div>
  );
};
