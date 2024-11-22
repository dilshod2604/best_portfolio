"use client";
import React from "react";
import ThemeButton from "../ui/ThemeButton";
import { useThemeStore } from "@/store/useThemeButton";
import { twMerge } from "tailwind-merge";
import BurgerMenu from "../ui/BurgerMenu";
import Image from "next/image";

const Header = () => {
  const { theme } = useThemeStore();
  return (
    <header className="mt-[30px]">
      <div className="container">
        <div
          className={twMerge(
            `w-full h-[70px] flex items-center justify-between rounded-full p-3 ${
              theme === "light" ? "bg-black" : "bg-white"
            }`
          )}
        >
          <div className="w-[50px] h-[50px] rounded-full bg-[#ffc107] overflow-hidden">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
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
