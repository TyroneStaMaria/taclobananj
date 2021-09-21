import React, { useState } from "react";
import Image from "next/image";
import style from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../../elements/Button/Button";
import axios from "axios";
import useUser from "../../../utils/useUser";
import Router from "next/router";

const Navbar = (data) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const { user, mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });
  return (
    <nav className={style.navBar}>
      <div className="container mx-auto flex items-center justify-between px-7 lg:px-0">
        <Image
          src="/images/anj-logo.PNG"
          alt="Tacloban ANJ Logo"
          width={70}
          height={70}
        />
        <div>
          <button
            onClick={toggleNav}
            className=" inline-flex p-3  rounded lg:hidden text-red ml-auto hover:text-red-light outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${showNav ? "left-0" : "-left-full"} ${
              style.navItemContainer
            }`}
          >
            <ul className={`${style.navItems}`}>
              <li onClick={toggleNav}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/about">About us</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/products">Products</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="#">Training Center</Link>
              </li>
              <li onClick={toggleNav}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li onClick={toggleNav}>
                {user?.isLoggedIn && (
                  <li onClick={toggleNav}>
                    <a
                      className="cursor-pointer"
                      onClick={async () => {
                        mutateUser(await axios.post("/api/users/logout"));
                      }}
                    >
                      Log out
                    </a>
                  </li>
                )}
                {!user?.isLoggedIn && (
                  <Button href="/login" btnStyle="redOutline">
                    Register / Log in
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
