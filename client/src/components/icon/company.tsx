import { FC } from "react";
import { IconProps } from "types";

export const CompanyIcon: FC<IconProps> = ({
  isHover,
  pathfill = "#5177FF",
  rectfill = "#BAE6FF",
}) => {
  if (isHover) {
    [pathfill, rectfill] = [rectfill, pathfill];
  }

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="26" height="26" rx="4" fill={rectfill} />
      <g clipPath="url(#clip0_151_459)">
        <path
          d="M20 4V22H14V18.5H12V22H6V4H20ZM16 8H18V6H16V8ZM12 8H14V6H12V8ZM8 8H10V6H8V8ZM16 12H18V10H16V12ZM12 12H14V10H12V12ZM8 12H10V10H8V12ZM16 16H18V14H16V16ZM12 16H14V14H12V16ZM8 16H10V14H8V16ZM16 20H18V18H16V20ZM8 20H10V18H8V20ZM22 2H4V24H22V2Z"
          fill={pathfill}
        />
      </g>
      <defs>
        <clipPath id="clip0_151_459">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(1 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
