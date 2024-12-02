"use client";
import React from "react";
import { useThemeStore } from "@/store/useThemeButton";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer className="mt-[50px] border-t">
      <div className="container">
        <div className="flex items-center h-[200px] p-[40px] w-ful">
          <div
            className={twMerge(
              `w-full  flex items-center justify-between rounded-full py-3 px-[20px] max-sm:flex-col ${
                theme === "light" ? "bg-black" : "bg-white"
              }`
            )}
          >
            <div className=" w-[100px]  flex items-senter gap-x-1">
              <MdOutlineArrowBackIos size={40} className="text-[#ffc107]" />
              <p className="text-[#ffc107] text-[25px] font-bold">D</p>
              <MdOutlineArrowForwardIos size={40} className="text-[#ffc107]" />
            </div>

            <div className="flex items-center gap-x-3 ">
              <p
                className={twMerge(
                  theme === "light"
                    ? "text-[18px] text-white font-semibold "
                    : "text-[18px] text-black font-semibold"
                )}
              >
                Designed & Built by Dilshod Adilbekov
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
