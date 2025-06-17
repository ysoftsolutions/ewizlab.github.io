"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaPlus, FaChartPie } from "react-icons/fa";

const FooterBar = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div id="footer-bar" className="footer-bar-6">
      <Link href="/home"></Link>
      <Link href="/home" className={isActive("/home") ? "active-nav" : ""}>
        <FaHome />
        <span>Home</span>
        <em />
      </Link>

      <Link
        href="/photo/add"
        className={`circle-nav ${isActive("/photo/add") ? "active-nav" : ""}`}
      >
        <FaPlus />
        <span>Add Photo</span>
        <em />
      </Link>

      <Link
        href="/aesthetics"
        className={isActive("/aesthetics") ? "active-nav" : ""}
      >
        <FaChartPie />
        <span>Aesthetics</span>
        <em />
      </Link>
      <Link href="/home"></Link>
    </div>
  );
};

export default FooterBar;
