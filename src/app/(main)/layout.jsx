"use client";

import { useEffect, useState } from "react";
import FooterBar from "@/app/components/footer/page";
import Header from "@/app/components/header/page";
import Sidebar from "@/app/components/sidebar/page";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Treat <768px as mobile
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // run on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Sidebar with overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1090 }}
            onClick={() => setIsSidebarOpen(false)}
          />
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header with Sidebar Toggle */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Scrollable Content */}
        <div
          className="main-layout no-scrollbar"
          style={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: "60px",
            marginTop: "110px",
            width: isMobile ? "100%" : "75%",
          }}
        >
          <main className="content">{children}</main>
        </div>
        <FooterBar />
      </div>
    </>
  );
}
