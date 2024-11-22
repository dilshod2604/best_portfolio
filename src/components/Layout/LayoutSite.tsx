import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "@/providers/ThemeProvider";
const LayoutSite = ({ children }: { children: ReactNode }) => {
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
