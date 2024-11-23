"use client";
import { useThemeStore } from "@/store/useThemeButton";
import React from "react";
import { twMerge } from "tailwind-merge";

const Testimonialse = () => {
  const { theme } = useThemeStore();
  return (
    <section className="my-[100px]">
      <div className="container">
        <div className="w-full flex flex-col  gap-y-4">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            Testimonials
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonialse;
