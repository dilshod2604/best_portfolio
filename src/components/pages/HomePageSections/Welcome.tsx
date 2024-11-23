import MyImage from "@/components/ui/MyImage";
import React from "react";
import { twMerge } from "tailwind-merge";
import { BsDownload } from "react-icons/bs";

const Welcome = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full flex flex-col items-center pt-[50px] gap-y-[40px]">
          <span className="flex items-center gap-x-2 px-4 py-4 rounded-full border border-[#ffc107] text-3xl bg-[#ffc107]/10">
            👋
            <span className="text-2xl font-bold text-[#ffc107] flex items-center gap-x-2 max-sm:flex-col">
              <span
                className={twMerge(
                  "text-2xl font-semibold",
                  "text-[var(--text-color)]"
                )}
              >
                Hello! I am
              </span>
              Dilshod Adilbekov
            </span>
          </span>
          <div className="flex flex-col gap-y-6">
            <span
              className={twMerge(
                "flex items-center justify-center gap-x-2 font-bold text-5xl max-lg:flex-col",
                "text-[var(--text-color)]"
              )}
            >
              Expert
              <span className="text-5xl font-bold text-[#ffc107] text-center">
                Front-End development Including
              </span>
            </span>
            <span>
              <p className="text-center text-2xl">
                I'm an{" "}
                <span className="font-bold">
                  Expert frontend developer {"  "}{" "}
                </span>
                with{" "}
                <span className="font-black text-[#ffc107]">1.5+ Years</span> of
                expertise in ReactJS and NextJS. I create responsive,
                user-centric web applications.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-x-4 max-sm:flex-col max-sm:gap-y-4">
            <button className="flex items-center gap-x-4 px-[40px] py-4  text-2xl text-[#ffc107] font-bold border border-[#ffc107] rounded-full bg-[#ffc107]/10 hover:bg-[#ffc107] hover:text-black transition-all ">
              <BsDownload size={30} />
              Download CV
            </button>
            <button className="flex items-center justify-between px-[40px] py-4  text-2xl text-black font-bold border border-[#ffc107]  rounded-full bg-[#ffc107] hover:bg-[#ffc107]/10 hover:text-[#ffc107] transition-all ">
              Hire Me
            </button>
          </div>

          <MyImage />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
