"use client";
import { education } from "@/constants/educations";
import { useThemeStore } from "@/store/useThemeButton";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Education = () => {
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
            Education
          </h1>

          <div className="flex flex-col  gap-y-4 w-full">
            {education.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex gap-x-5  group   rounded-xl w-full p-6 transition-all max-lg:flex-col gap-y-5",
                  theme === "dark"
                    ? "bg-white/65 hover:bg-white"
                    : "bg-neutral-100"
                )}
              >
                <div className="flex flex-col gap-y-6 max-sm:items-center">
                  <div className="flex items-center gap-x-5 group max-sm:flex-col gap-y-4">
                    <span className="flex items-center justify-center px-5 py-3 rounded-full text-2xl w-[200px]  bg-black text-[#ffc107] font-bold">
                      {item.date}
                    </span>
                    <span className=" flex items-center gap-x-3 bg-white text-2xl font-bold px-4 py-3 rounded-full text-black group-hover:bg-[#ffc107]">
                      <item.icon size={30} />
                      Graduation
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-black">
                    {item.speciality}
                  </h1>
                  <div className="flex items-center gap-x-4">
                    <Image src={item.logo} alt="logo" width={50} height={30} />
                    <h1 className="text-xl  text-black">{item.university}</h1>
                  </div>
                </div>
                <div className="bg-slate-500/25 p-4 rounded-md flex flex-col gap-y-5 items-center">
                  <div className="flex items-center gap-x-4">
                    <Image src={item.logo} alt="logo" width={50} height={30} />
                    <h1 className="text-xl  text-black">{item.university}</h1>
                  </div>
                  <p className="text-xl text-black">{item.aboutUniver}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
