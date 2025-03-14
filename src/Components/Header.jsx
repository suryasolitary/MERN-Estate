import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="text-lg sm:text-xl font-bold flex flex-wrap hover:cursor-pointer">
            <span className="text-slate-500">Surya </span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg font-lg flex items-center">
          <input
            type="text"
            className="bg-transparent mr-2 w-24 focus:outline-none sm:w-64"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600 "></FaSearch>
        </form>
        <ul className="flex gap-5 text-md font-semibold">
          <Link to="/">
            <li className="hidden sm:inline hover:underline hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline hover:cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className=" sm:inline hover:underline hover:cursor-pointer">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
