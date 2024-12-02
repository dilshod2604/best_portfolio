"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../assets/myAvatar.png";
import { twMerge } from "tailwind-merge";
import { useThemeStore } from "@/store/useThemeButton";
import react from "../../assets/react-1.svg";
import next from "../../assets/next-js.svg";
import typescript from "../../assets/typescript.svg";
import javascript from "../../assets/logo-javascript.svg";
import antd from "../../assets/ant-design.svg";
import tailwind from "../../assets/pngwing.com.png";

const MyImage = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div className="relative w-full flex items-center justify-center mt-[50px] max-lg:hidden ">
        <div className="w-[300px] h-auto relative z-30">
          <Image src={myImage} alt="myimage" width={300} height={300}  />
        </div>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full top-[10px] left-[30%] max-sm:left-[10%] ",
            theme === "light" ? "bg-white border  shadow-lg" : "bg-white"
          )}
        >
          <Image
            src={react}
            alt="react"
            width={40}
            height={40}
            className="rounded-full "
          />
          <p
            className={twMerge(
              ` font-bold max-sm:hidden ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            ReactJs
          </p>
        </span>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full top-[40%] left-[15%] max-sm:left-0 ",
            theme === "light" ? "bg-white border shadow-lg" : "bg-white"
          )}
        >
          <Image
            src={next}
            alt="next"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p
            className={twMerge(
              ` font-bold max-sm:hidden ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            NextJs
          </p>
        </span>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full bottom-[10px] left-[25%] max-sm:left-[10%]",
            theme === "light" ? "bg-white border shadow-lg" : "bg-white"
          )}
        >
          <Image
            src={antd}
            alt="ants"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p
            className={twMerge(
              ` font-bold max-sm:hidden ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            Antd Design
          </p>
        </span>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full top-[10px] right-[25%] max-sm:right-[10%]",
            theme === "light" ? "bg-white border shadow-lg " : "bg-white"
          )}
        >
          <Image
            src={typescript}
            alt="typescript"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p
            className={twMerge(
              ` font-bold  max-sm:hidden ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            TypeScript
          </p>
        </span>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full top-[40%] right-[15%]  max-sm:right-0",
            theme === "light" ? "bg-white border shadow-lg" : "bg-white"
          )}
        >
          <Image
            src={javascript}
            alt="javascript"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <p
            className={twMerge(
              ` font-bold  max-sm:hidden  ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            JavaScript
          </p>
        </span>
        <span
          className={twMerge(
            " absolute flex items-center gap-x-4 p-2 rounded-full bottom-[10px] right-[20%] max-sm:right-[10%] ",
            theme === "light" ? "bg-white border shadow-lg" : "bg-white"
          )}
        >
          <Image
            src={tailwind}
            alt="tailwind"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p
            className={twMerge(
              ` font-bold  max-sm:hidden ${
                theme === "light" ? "text-black" : "text-black"
              }`
            )}
          >
            Tailwind CSS
          </p>
        </span>
      </div>
      <div
        className={twMerge(
          "hidden flex-col max-w-[500px] relative rounded-xl overflow-hidden p-4 max-lg:flex",
          theme === "light"
            ? "bg-neutral-100"
            : "bg-[#ffc107]/10 border border-[#ffc107]"
        )}
      >
        <div className="w-[300px] h-auto relative ">
          <Image src={myImage} alt="myimage" width={300} height={300} />
        </div>
        <div
          className={twMerge(
            "absolute w-full h-full  top-0 left-0 hover:bg-transparent",
            theme === "light" ? "bg-transparent" : "bg-black/50"
          )}
        ></div>
      </div>
    </>
  );
};

export default MyImage;
