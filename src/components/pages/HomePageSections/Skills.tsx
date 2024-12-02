"use client";
import React from "react";
import { useThemeStore } from "@/store/useThemeButton";
import { twMerge } from "tailwind-merge";
import { designTools, productivityTools, skills } from "@/constants/scills";
import Image from "next/image";

const Skills = () => {
  const { theme } = useThemeStore();
  return (
    <section id="skills">
      <div className="container">
        <div className="flex flex-col gap-y-[40px]">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            Skills
          </h1>
          <div className="flex flex-col gap-y-[20px]">
            <h1
              className={twMerge(
                " font-black text-[30px] w-full text-center",
                theme === "light" ? "text-black" : "text-[#ffc107]"
              )}
            >
              Design Tools I Use
            </h1>
            <ul className="flex  items-center flex-wrap justify-center gap-x-4 gap-y-4">
              {designTools.map((item) => (
                <li key={item.name}
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
          <div className="flex flex-col gap-y-[20px]">
            <h1
              className={twMerge(
                " font-black text-[30px] w-full text-center",
                theme === "light" ? "text-black" : "text-[#ffc107]"
              )}
            >
              Technologies I Use
            </h1>
            <ul className="flex  items-center flex-wrap justify-center gap-x-4 gap-y-4">
              {skills.map((item) => (
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
          <div className="flex flex-col gap-y-[20px]">
            <h1
              className={twMerge(
                " font-black text-[30px] w-full text-center",
                theme === "light" ? "text-black" : "text-[#ffc107]"
              )}
            >
              Development & Productivity Tools I Use
            </h1>
            <ul className="flex  items-center flex-wrap justify-center gap-x-4 gap-y-4">
              {productivityTools.map((item) => (
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
      </div>
    </section>
  );
};

export default Skills;
