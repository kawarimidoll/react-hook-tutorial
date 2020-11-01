import React from "react";

const Header = (props) => (
  <header className="bg-abyssblue h-16 flex flex-col items-center justify-center text-xl text-white p-2 cursor-pointer">
    <h2 className="m-0">{props.text}</h2>
  </header>
);

export default Header;
