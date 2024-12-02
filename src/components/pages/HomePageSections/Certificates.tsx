"use client";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { certificates, projects } from "@/constants/educations";
import { useThemeStore } from "@/store/useThemeButton";
import { twMerge } from "tailwind-merge";
const Certificates = () => {
  const { theme } = useThemeStore();
  return (
    <section>
      <div className="container">
        <div className=" flex flex-col  ">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            Certificates
          </h1>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect
              className="grid grid-cols-2 max-md:grid-cols-1"
              items={certificates}
              cardStyle={
                theme === "light"
                  ? "bg-neutral-100 text-black  group-hover:border-[#ffc107] border-2 "
                  : "bg-neutral-800 "
              }
              titleStyle={theme === "light" ? "text-black" : "text-zinc-100"}
              descriptionStyle={
                theme === "light" ? "text-neutral-800" : "text-zinc-400"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
