"use client";
import React from "react";
import ThemeButton from "../ui/ThemeButton";
import { useThemeStore } from "@/store/useThemeButton";
import { twMerge } from "tailwind-merge";
import BurgerMenu from "../ui/BurgerMenu";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Header = () => {
  const { theme } = useThemeStore();
  return (
    <header className=" fixed w-full py-[40px] z-50 backdrop-blur-xl top-0">
      <div className="container">
        <div
          className={twMerge(
            `w-full h-[70px] flex items-center justify-between rounded-full p-3 ${
              theme === "light" ? "bg-black" : "bg-white"
            }`
          )}
        >
          <div className=" w-[100px]  flex items-senter gap-x-1">
            <MdOutlineArrowBackIos size={40} className="text-[#ffc107]" />
            <p className="text-[#ffc107] text-[25px] font-bold">D</p>
            <MdOutlineArrowForwardIos size={40} className="text-[#ffc107]" />
          </div>

          <div className="flex items-center gap-x-3">
            <ThemeButton />
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
