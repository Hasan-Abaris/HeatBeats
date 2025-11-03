import React from "react";
import Banner from "./Banner";
import Gamescategory from "./Gamescategory";
import Newgames from "./Newgames";
import Youmaylike from "./Youmaylike";
import Categories from "./Categories";

function GamesPage() {
  return (
    <div className="p-6 text-white">
      <Banner />
      <Gamescategory />
      <Newgames/>
      <Youmaylike/>
      <Categories/>
    </div>
  );
}

export default GamesPage;
