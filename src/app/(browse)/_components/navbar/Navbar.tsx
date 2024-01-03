import {Logo} from "./logo";
import React from "react";
import Search from "./Search";
import Actions from "./Actions";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 justify-between flex items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
}

export default Navbar;
