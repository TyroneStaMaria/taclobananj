import React from "react";
import Link from "next/link";
import style from "./Button.module.scss";

interface ButtonProps {
  href: string;
  children: string;
  btnStyle: string;
}

const Button = (props: ButtonProps) => {
  const buttonStyles = {
    redOutline: style.btnRedOutline,
    redFill: style.btnRedFill,
    yellowOutline: style.btnYellowOutline,
    yellowFill: style.btnYellowFill,
  };

  return (
    <Link href={props.href}>
      <a className={`${style.btn} ${buttonStyles[props.btnStyle]}`}>
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
