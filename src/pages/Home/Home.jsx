import React from "react";
import { SinglePost } from "../../components/Chatbox/SinglePost";
import { ChatterProfile } from "../../components/ChatterProfile/ChatterProfile";
import { Navbar } from "../../components/Navbar/Navbar";
import { SearchBar } from "../../components/Searchbar/SearchBar";

export const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <Navbar />
      </div>
      <div className="flex w-full items-center justify-evenly gap-5">
        <ChatterProfile />
        <div className="flex flex-col gap-4 items-start">
          {/* <span className="w-full bg-[#230528] border-[1px] border-[#571464] py-1 px-5 rounded-3xl"> */}
            <h1 className="text-xl tracking-wider opacity-70 font-extralight text-left">Znajdź wiadomości użytkownika</h1>
          {/* </span> */}
          <SearchBar />
        </div>
      </div>
      <SinglePost />
    </>
  );
};
