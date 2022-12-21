import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { BsPerson, BsHeartFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [category, setCategory] = useState(false);

  function handleClick() {
    setNav(!nav);
  }
  function handleClickCategory() {
    setCategory(!category);
  }
  return (
    <div className="flex justify-between fixed w-full h-[80px] bg-[#362e2e] py-6 text-gray-300 text-lg p-2">
      <div>
        <ul className="hidden md:flex ">
          <li className="px-2">euro</li>
          <li className="px-2">usd</li>
          <li className="px-2">Men</li>
          <li className="px-2">Women</li>
          <li className="px-2">Diverse</li>
          <li className="px-2">Accessories</li>
        </ul>
      </div>
      <div className="tracking-widest uppercase">store</div>
      <div className="hidden md:flex ">
        <ul className="flex ">
          <li className="px-2">Homepage</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
          <li className="px-2">Stores</li>
          <li className="px-2 py-2">
            <FiSearch />
          </li>
          <li className="px-2 py-2">
            <BsPerson />
          </li>
          <li className="px-2 py-2">
            <BsHeartFill />
          </li>
          <li className="px-2 py-2">
            <SlBasket />
          </li>
        </ul>
      </div>
      {/* =========== >>>>  Navigation Left <<<< =========== */}
      <div
        onClick={handleClickCategory}
        className="md:hidden z-10 cursor-pointer absolute"
      >
        {!category ? (
          <BiCategoryAlt className="text-4xl" />
        ) : (
          <FaTimes className="text-4xl" />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !category
            ? "hidden"
            : "absolute top-0 right-0 w-full h-screen  bg-[#362e2e] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Men</li>
        <li className="py-6 text-4xl">Women</li>
        <li className="py-6 text-4xl">Diverse</li>
        <li className="py-6 text-4xl">Accessories</li>
      </ul>

      {/* ===>>>>> Navigation Right */}
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? (
          <FaBars className="text-4xl" />
        ) : (
          <FaTimes className="text-4xl" />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#362e2e] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Stores</li>
      </ul>
    </div>
  );
}

export default Navbar;
