import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container mx-auto py-24">
        <div className="flex flex-col items-center">
          <Image
            src="/images/anj-logo.PNG"
            alt="Tacloban ANJ Logo"
            width={70}
            height={70}
          />
          <ul className={style.navItems}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="#">Training Center</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
          <ul className={style.navItems}>
            <li>
              <a
                href="https://www.facebook.com/TaclobanAnJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="#FFFFFF"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:anjtacloban@yahoo.com">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="https://img.icons8.com/ios-glyphs/40/FFFFFF/email.png"
                  alt="email"
                />
              </a>
            </li>
          </ul>
          <div className="mt-7 text-center">
            <p className="text-white mb-3">
              Address: 151 Rizal Avenue, Tacloban City, Leyte, 6500
            </p>
            <p className="text-white">
              Contact Number: 0917 <span></span> 323 <span></span> 3139{" "}
              <span></span>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
