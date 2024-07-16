import React, { useEffect } from "react";
import { SinglePost } from "../../components/Chatbox/SinglePost";
import { ChatterProfile } from "../../components/ChatterProfile/ChatterProfile";
import { SearchBar } from "../../components/Searchbar/SearchBar";
import { motion, useIsPresent } from "framer-motion";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContextProvider";

export const Home = () => {
  const { userName: urlUsername } = useParams();
  const { setSenderName } = useGlobalContext();
  const isPresent = useIsPresent();

  useEffect(() => {
    if (urlUsername) {
      setSenderName(urlUsername);
    }
  }, [urlUsername, setSenderName]);

  return (
    <>
      <div className="flex w-full items-center justify-evenly gap-5 flex-col md:flex-row h-64">
        <ChatterProfile />
        <div className="flex flex-col gap-4 items-start">
          {/* <span className="w-full bg-[#230528] border-[1px] border-[#571464] py-1 px-5 rounded-3xl"> */}
          <h1 className="text-sm md:text-xl tracking-wider opacity-70 font-extralight text-left">
            Znajdź wiadomości użytkownika
          </h1>
          {/* </span> */}
          <SearchBar />
        </div>
      </div>
      <SinglePost />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};
