import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}
const Button: React.FC<ButtonProps> = ({ text, className, href, newTab }) => (
  <div className={className}>
    <a
      className="main-button"
      href={href}
      rel="noreferrer"
      target={newTab ? "_blank" : "_self"}
    >
      {text}
    </a>
  </div>
);

export default Button;
