import React from "react";
import Link from "next/link";
import style from "./Button.module.scss";

interface ButtonProps {
  href: string;
  variant: string;
  children: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.href}>
      <a
        className={
          props.variant === "outline"
            ? style.btnRedOutline
            : style.btnRedOutline
        }
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
