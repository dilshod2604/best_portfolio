"use client";
import { portfolio } from "@/constants/scills";
import { useThemeStore } from "@/store/useThemeButton";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const AboutPortfolio = () => {
  const { theme } = useThemeStore();
  return (
    <section className="pt-[100px]" id="portfolio">
      <div className="container">
        <div className="fex flex-col ">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center mb-[50px]",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            Portfolio made with
          </h1>
          <ul className="flex  items-center flex-wrap justify-center gap-x-4 gap-y-4">
            {portfolio.map((item) => (
              <li
                key={item.name}
                className={twMerge(
                  "flex items-center gap-x-3 px-[40px] py-3 rounded-full font-medium",
                  theme === "light"
                    ? "text-black  bg-white border border-neutral-300 shadow-lg"
                    : "bg-white text-black"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPortfolio;
