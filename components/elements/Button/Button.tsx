import React from "react";
import Link from "next/link";
import style from "./Button.module.scss";

interface ButtonProps {
  href: string;
  variant: string;
  children: string;
  color: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.href}>
      <a
        className={`${style.btn} ${
          props.variant === "outline"
            ? `${style.btnRedOutline} text-${props.color} border-${props.color} hover:bg-${props.color}`
            : style.btnRedOutline
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
