import React from "react";
import { SinglePost } from "../../components/Chatbox/SinglePost";
import { SearchBar } from "../../components/Searchbar/SearchBar";

export const Home = () => {
  return (
    <>
      <SearchBar />
      <SinglePost />
    </>
  );
};
