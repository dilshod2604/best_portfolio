import { StaticImageData } from "next/image";
import motionLogo from "../assets/motionLogo.webp";
import motionWeb from "../assets/motion-web.jpg";
import { PiStudentBold } from "react-icons/pi";
import { IconType } from "react-icons";

interface Education {
  university: string;
  date: string;
  degree: string;
  speciality: string;
  image: StaticImageData;
  logo: StaticImageData;
  icon: IconType;
  country: string;
  aboutUniver: string;
}

export const education: Education[] = [
  {
    university: "Motion-Web It Academy",
    date: "2023-2024",
    degree: "",
    speciality: "Front-End",
    logo: motionLogo,
    image: motionWeb,
    country: "Kyrgyzstan",
    icon: PiStudentBold,
    aboutUniver:
      "Motion Web IT Academy is a Kyrgyz-language educational institution based in Bishkek, Kyrgyzstan, specializing in information technology training. Established in 2020, the academy aims to provide high-quality education in the IT sector, focusing on not only teaching coding skills but also immersing students in the broader IT environment.",
  },
];
