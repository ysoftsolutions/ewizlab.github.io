"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Slide in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setIsVisible(false);
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300); // duration matches transition
  };

  function SidebarLink({ href, icon, label, onClick }) {
    return (
      <div className="list-group list-custom-small list-menu">
        <Link href={href} onClick={onClick} className="sidelist-menu ps-4 pe-2">
          <i className={`fa ${icon} color-highlight `} />
          <span
            style={{ color: "black", fontSize: "15px", paddingLeft: "10px" }}
          >
            {label}
          </span>
          <i className="fa fa-angle-right" />
        </Link>
      </div>
    );
  }

  return (
    <div
      className="position-fixed top-0 start-0 h-100 bg-white shadow "
      style={{
        width: "280px",
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1100,
      }}
    >
      <div
        className=" rounded-0"
        style={{
          height: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="card-bottom" style={{ paddingBottom: "20px" }}>
          <div className="row pl-4 mb-1 d-flex items-center align-middle align-items-center">
            <div className="col-4">
              <h1>
                <Image
                  src="/images/PinkMirror-Favicon.png"
                  alt="PinkMirror Logo"
                  width={70}
                  height={70}
                  style={{ margin: "11px 0" }}
                />
              </h1>
            </div>
            <div
              className="col-5"
              style={{ padding: "8px", fontWeight: "bold" }}
            >
              <p className="color-highlight" style={{ fontSize: "25px" }}>
                PinkMirror
              </p>
            </div>
            <div className="col-1 mb-10">
              <button
                className="icon-40  border-0 bg-transparent"
                style={{ marginBottom: "20px" }}
                onClick={handleClose}
              >
                <FaTimes className="color-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <SidebarLink href="/" icon="fa-home" label="Home" onClick={handleClose} />
      <SidebarLink
        href="/blog/"
        icon="fa-book"
        label="Blog"
        onClick={handleClose}
      />
      <SidebarLink
        href="/photo/add"
        icon="fa-plus-circle"
        label="Add Photo"
        onClick={handleClose}
      />
      <SidebarLink
        href="/pricing"
        icon="fa-dollar-sign"
        label="Pricing"
        onClick={handleClose}
      />
      <SidebarLink
        href="/my/aesthetics"
        icon="fa-chart-pie"
        label="Aesthetics"
        onClick={handleClose}
      />
      <SidebarLink
        href="/contact-us"
        icon="fa-comment"
        label="Contact Us"
        onClick={handleClose}
      />
      <SidebarLink
        href="/my/profile"
        icon="fa-user"
        label="Profile"
        onClick={handleClose}
      />
      <SidebarLink
        href="/blog/help/"
        icon="fa-image"
        label="Help"
        onClick={handleClose}
      />
      <SidebarLink
        href="/about"
        icon="fa-university"
        label="About Us"
        onClick={handleClose}
      />
      <SidebarLink
        href="/privacy-policy"
        icon="fa-lock"
        label="Privacy Policy"
        onClick={handleClose}
      />
      <SidebarLink
        href="/terms-and-conditions"
        icon="fa-exclamation-triangle"
        label="Terms and Conditions"
        onClick={handleClose}
      />

      {/* Footer - conditional login/logout */}
      <div
        id="footer1"
        className="footer-bar-white"
        style={{
          backgroundColor: "rgb(248, 165, 66)",
          fontSize: "large",
          height: "50px",
          cursor: "pointer",
        }}
        onClick={() => {
          // Replace with actual logout logic
          console.log("Logout clicked");
          handleClose();
        }}
      >
        <div className="row p-0 pl-2 mb-1">
          <div
            className="col-2"
            style={{ padding: "15px", marginLeft: "15px" }}
          >
            <i className="fa fa-sign-out-alt color-white" />
          </div>
          <div
            className="col-8"
            style={{ padding: "13px", width: "174px", marginLeft: "-18px" }}
          >
            <span style={{ fontSize: "15px", color: "white" }}>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
