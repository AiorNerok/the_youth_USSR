import { FC } from "react";
import { IconProps } from "types";

export const RemoveIcon: FC<IconProps> = ({pathfill="#D2D0D7"}) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.5L6 6.5M10 6.5L6 10.5"
      stroke={pathfill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99967 15.1668C11.6816 15.1668 14.6663 12.1821 14.6663 8.50016C14.6663 4.81826 11.6816 1.8335 7.99967 1.8335C4.31778 1.8335 1.33301 4.81826 1.33301 8.50016C1.33301 12.1821 4.31778 15.1668 7.99967 15.1668Z"
      stroke={pathfill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
