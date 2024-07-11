import React from "react";
import { useGlobalContext } from "../../context/globalContextProvider";

export const ChatterProfile = () => {
  const { senderName, chatterAvatar } = useGlobalContext();
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 rounded-3xl border-[1px] border-[#571464] bg-[#3c193f] px-16 py-4 sm:flex-row sm:gap-24">
      <div className="relative flex flex-col justify-center items-center gap-2">
        <img
          alt="Głowa gracza WoleMamusie"
          className="relative z-10 rounded-2xl transition-all duration-300 w-[60px] h-[60px]"
          src={chatterAvatar}
        />
        <div className="text-center">
          <p className="text-lg transition-all duration-300 font-semibold">
            {senderName}
          </p>
          <p className="text-sm text-[#8884d8]">3820 wpisów</p>
        </div>
        {/* <p className="pointer-events-none absolute left-1/2 top-2 -translate-x-[120%] select-none text-5xl font-black italic text-transparent [-webkit-text-stroke:1px_theme(colors.primary)] [text-shadow:0_0_30px_theme(colors.primary/40)]">
          #1
        </p> */}
      </div>
      <p className="absolute left-1/2 bg-[#230528] border-[1px] border-[#571464] top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-3xl px-4 py-[5px] text-sm">
        Użytkownik
      </p>
    </div>
    // </div>
  );
};
