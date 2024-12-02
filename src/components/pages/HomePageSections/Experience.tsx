"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { experienses } from "@/constants/educations";

import { useThemeStore } from "@/store/useThemeButton";
import React from "react";
import { twMerge } from "tailwind-merge";

const Experience = () => {
  const { theme } = useThemeStore();
  return (
    <section id="experience">
      <div className="container">
        <div className=" flex flex-col  ">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            Experience
          </h1>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect className="grid-cols-1" items={experienses}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
