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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
