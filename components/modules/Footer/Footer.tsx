import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Footer.module.scss";
import { FaFacebookSquare, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer} id="footer">
      <div className="container mx-auto py-24">
        <div className="flex flex-col items-center">
          <Image
            src="/images/anj-logo.PNG"
            alt="Tacloban ANJ Logo"
            width={70}
            height={70}
          />
          <ul className={`${style.navItems} ${style.sitemap}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="#">Training Center</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
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
          <ul className={style.navItems}>
            <li>
              <a
                href="https://www.facebook.com/TaclobanAnJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare style={{ fontSize: `32px` }} />
              </a>
            </li>
            <li>
              <a href="mailto:anjtacloban@yahoo.com">
                {/* eslint-disable @next/next/no-img-element */}
                <FaEnvelope style={{ fontSize: `32px` }} />
              </a>
            </li>
          </ul>
          <div className={`${style.navItems} ${style.sitemap} mt-3`}>
            <Link href="/docs/terms-of-service">
              <a
                className="text-white hover:underline"
                style={{ fontSize: `0.75rem` }}
              >
                Terms of Service
              </a>
            </Link>
            <div className="text-white mx-3" style={{ fontSize: `0.75rem` }}>
              |
            </div>
            <Link href="/docs/privacy-policy">
              <a
                className="text-white hover:underline"
                style={{ fontSize: `0.75rem` }}
              >
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
