"use client";
import { useThemeStore } from "@/store/useThemeButton";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import avatar from "../../../assets/avatar.svg";
import Link from "next/link";
import { IoIosPhonePortrait } from "react-icons/io";
import { hobbies } from "@/constants/tools";

const About = () => {
  const { theme } = useThemeStore();

  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-6">
          <h1
            className={twMerge(
              " font-black text-[50px] w-full text-center",
              theme === "light" ? "text-black" : "text-[#ffc107]"
            )}
          >
            About Me
          </h1>
          <div className="flex items-center gap-x-4 justify-center max-lg:flex-col max-lg:gap-y-5 pt-[50px]">
            <div className="flex  flex-col gap-y-4 h-auto">
              <div className="flex items-center gap-x-4">
                <div className="border-4 border-[#ffc107] rounded-full p-1">
                  <Image
                    src={avatar}
                    alt="myAvatar"
                    width={50}
                    height={50}
                    className="rounded-full bg-white "
                  />
                </div>

                <h1 className="text-[#ffc107] font-black text-[40px] mb-4">
                  I Love
                </h1>
              </div>
              <div className="flex flex-wrap max-w-[500px] gap-x-2 gap-y-4">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className={twMerge(
                      `px-4 py-2  rounded-full text-blue-700  font-bold text-2xl`,
                      theme === "light" ? "bg-[#ffc107]" : "bg-white"
                    )}
                  >
                    {hobby.icon + " " + hobby.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-x-4 max-sm:flex-col gap-y-4 ">
              <div
                className={twMerge(
                  "flex flex-col items-center justify-center rounded-3xl w-[250px] h-[250px] p-4  max-sm:w-[300px]",
                  theme === "light" ? "bg-neutral-100" : " bg-[#ffc107]/10"
                )}
              >
                <p className="text-bold font-black text-[40px] text-[#ffc107]">
                  1.5+
                </p>
                <p className="text-center font-bold text-[30px]">
                  Years Experience
                </p>
              </div>
              <div
                className={twMerge(
                  "flex flex-col items-center justify-center rounded-3xl w-[250px] h-[250px] p-4 max-sm:w-[300px]",
                  theme === "light" ? "bg-neutral-100" : " bg-[#ffc107]/10"
                )}
              >
                <p className="text-bold font-black text-[40px] text-[#ffc107]">
                  10+
                </p>
                <p className="text-center ` font-bold text-[30px]">
                  Project Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <div
              className={twMerge(
                " p-10 rounded-3xl",
                theme === "light" ? "bg-neutral-100" : "bg-neutral-800/60"
              )}
            >
              <p className="text-xl ">
                Hallo! My name is Dilshod and I am a Front-end Developer.
                I&apos;m keen on creating websites and web applications.
                Currently, I live among the code and also on the internet,
                spending my time creating. I started to be interested in the IT
                sphere in 2023. I finished my studies at the{" "}
                <Link
                  href="https://motion.kg/kg"
                  className="font-bold text-[#ffc107] underline"
                >
                  MOTION WEB IT ACADEMY
                </Link>{" "}
                in 2024. Currently, I&apos;m focused on improving my skills in
                this sphere. One of my main goals is to create interactive
                websites and applications. My expertise lies in JavaScript
                frameworks and libraries. I have extensive experience with
                JavaScript frameworks and libraries such as:
              </p>
            </div>
            <button
              className={twMerge(
                "flex items-center gap-x-4 px-10 py-4 rounded-full font-bold ",
                theme === "light"
                  ? "bg-neutral-200 text-black border border-black hover:bg-black hover:text-[#ffc107] transition-all"
                  : " bg-[#ffc107]/10 border border-[#ffc107] text-[#ffc107]  hover:bg-[#ffc107] hover:text-black transition-all"
              )}
            >
              <IoIosPhonePortrait size={30} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
