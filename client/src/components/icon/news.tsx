import { FC } from "react";
import { IconProps } from "types";

export const NewsIcon: FC<IconProps> = ({
  pathfill = "#5177FF",
  rectfill = "#BAE6FF",
}) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="26" rx="4" fill={rectfill} />
    <path
      d="M21 6V20H5V6H21ZM21 4H5C3.89 4 3 4.89 3 6V20C3 21.11 3.89 22 5 22H21C22.11 22 23 21.11 23 20V6C23 4.89 22.11 4 21 4ZM19 16H7V18H19V16ZM11 8H7V14H11V8ZM13 10H19V8H13V10ZM19 12H13V14H19V12Z"
      fill={pathfill}
    />
  </svg>
);
