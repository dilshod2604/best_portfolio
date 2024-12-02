"use client"
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import Preloader from "../ui/Preloader";
const LayoutSite = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <ThemeProvider>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LayoutSite;
