"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ onMenuClick }) {
  const [showMainHeader, setShowMainHeader] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowMainHeader(currentY < scrollY || currentY < 50);
      setScrollY(currentY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Treat <768px as mobile
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize(); // run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollY]);

  return (
    <>
      <div
        id="headicons"
        className="position-fixed top-0 start-0 end-0 z-3 transition-transform"
        style={{
          transform: showMainHeader ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
          width: isMobile ? "100%" : "75%", // ✅ Responsive width
          margin: "0 auto",
        }}
      >
        <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-white">
          <Link href="/">
            <Image
              src="/images/PinkMirror-Favicon.png"
              alt="PinkMirror Logo"
              width={60}
              height={60}
              style={{ margin: "11px 0" }}
            />
          </Link>
          <span>Welcome</span>
          <div
            className="p-1 mx-2 d-flex align-items-center justify-content-center"
            style={{
              marginTop: "10px",
              backgroundColor: "rgb(247, 148, 29)",
              boxShadow: "0 0 10px rgba(0,0,0,0.15)",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              borderRadius: "15px",
            }}
            onClick={onMenuClick}
          >
            <RxHamburgerMenu color="#fff" />
          </div>
        </div>
      </div>

      {/* Secondary Sticky Header */}
      {!showMainHeader && (
        <div
          className="position-fixed top-0 start-0 end-0 z-2 text-yellow px-4 py-2"
          style={{
            width: "100%",
            transition: "opacity 0.3s ease",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <RxHamburgerMenu size={24} color="black" onClick={onMenuClick} />
          </div>
        </div>
      )}
    </>
  );
}
