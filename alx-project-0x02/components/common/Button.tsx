import { type ButtonProps } from "@/interfaces";
import React, { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  size,
  shape,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      className={`btn font-${size} ${shape}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
