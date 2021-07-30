import React from "react";
import Image from "next/image";
import style from "./Navbar.module.scss";
import Link from "next/link";
import Button from "../../elements/Button/Button";

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/images/anj-logo.PNG"
          alt="Tacloban ANJ Logo"
          width={70}
          height={70}
        />
        <div>
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
            <li>
              <Button href="#" variant="outline">
                Register / Log in
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
