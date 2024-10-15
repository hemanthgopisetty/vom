import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-violet-500 h-12 border flex flex-row items-center justify-between w-full  ">
     
      <div className="flex flex-row items-center justify-center gap-4">
        <p>Home</p>
        <p>About us</p>
        <p>Contact</p>
        <p>Faq</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <button className="border-2 p-1 rounded-md">Sign Up</button>
        <button className="border-2 p-1 rounded-md">Login</button>
      </div>
    </nav>
  );
};
