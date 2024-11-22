"use client";
import { useThemeStore } from "@/store/useThemeButton";
import React from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={twMerge(
        `flex items-center justify-center w-[50px] h-[50px] rounded-full ${
          theme === "light" ? "bg-white" : "bg-black"
        } `
      )}
    >
      {theme === "light" ? (
        <RiMoonClearFill size={30} className="text-black" />
      ) : (
        <MdSunny size={30} className="text-white" />
      )}
    </button>
  );
};

export default ThemeButton;
