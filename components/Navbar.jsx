"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import menu from "@/public/Icons/menu.png";

const Navbar = () => {
  const pathname = usePathname();
  const [dropdownexploreOpen, setDropdownExploreOpen] = useState(false);
  const [dropdownmenuOpen, setDropdownMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownexploreOpen && !event.target.closest(".dropdown")) {
        setDropdownExploreOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownexploreOpen]);

  const toggleExploreDropdown = () => {
    setDropdownExploreOpen(!dropdownexploreOpen);
  };
  const toggleMenuDropdown = () => {
    setDropdownMenuOpen(!dropdownmenuOpen);
  };

  return (
    <div className="flex my-12 xl:mx-64 justify-between ">
      <div className="hidden xl:flex w-1/3 justify-between">
        <div
          className={`py-1 link ${
            pathname === "/"
              ? "border border-black my-2 px-8 rounded-2xl bg-black text-white"
              : "border border-black my-2 px-8 rounded-2xl"
          }`}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          className={`py-1 link ${
            pathname === "/about"
              ? "border border-black my-2 px-8 rounded-2xl bg-black text-white"
              : "border border-black my-2 px-8 rounded-2xl"
          }`}
        >
          <Link href="/about">About</Link>
        </div>
      </div>

      <div className="relative w-36 xl:hidden" onClick={toggleMenuDropdown}>
        <Image
          src={menu}
          alt="menu"
          className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
        />
        {dropdownmenuOpen && (
          <div className="dropdown absolute border border-black bg-white mt-2 rounded-lg xs:p-3 p-1 shadow-lg text-sm xs:text-base text-center">
            <ul>
              <Link href="/">
                <li className="py-1 px-2 hover:border border-black ">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-1 px-2 hover:border border-black">About</li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      <div className="relative xs:w-36 w-24 " onClick={toggleExploreDropdown}>
        <div
          className={`border border-black sm:py-1 py-[0.5px] px-8 rounded-2xl w-3/4 ${
            dropdownexploreOpen ? " mr-10 bg-black" : "ml-10 bg-white"
          }`}
        ></div>
        <p className="text-center sm:text-lg text-sm">Explore</p>
        <div
          className={`border border-black sm:py-1 py-[0.5px] px-8 rounded-2xl w-3/4 ${
            dropdownexploreOpen ? "ml-10 bg-white" : "mr-10 bg-black"
          }`}
        ></div>
        {dropdownexploreOpen && (
          <div className="dropdown absolute border border-black bg-white mt-2 rounded-lg p-1 text-sm xs:text-base xs:p-3 shadow-lg xs:ml-10">
            <ul>
              <Link href="/learning">
                <li className="py-1 px-2 hover:underline">Learn</li>
              </Link>
              <Link href="/noteyourgame">
                <li className="py-1 px-2 hover:underline">Play</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
