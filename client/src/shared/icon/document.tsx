import { FC } from "react";
import { IconProps } from "types";

export const DocumentIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#5177FF",
  rectfill = "#BAE6FF",
}) => {
  if (isHover) [pathfill, rectfill] = [rectfill, pathfill];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="26" height="26" rx="4" fill={rectfill} />
      <path
        d="M18 22L15.25 19L16.41 17.84L18 19.43L21.59 15.84L22.75 17.25M13.8 22H6C4.89 22 4 21.11 4 20V6C4 4.89 4.89 4 6 4H20C21.11 4 22 4.89 22 6V13.8C21.39 13.45 20.72 13.2 20 13.08V6H6V20H13.08C13.2 20.72 13.45 21.39 13.8 22ZM13 18H8V16H13M15.68 14H8V12H18V13.08C17.15 13.22 16.37 13.54 15.68 14ZM18 10H8V8H18"
        fill={pathfill}
      />
    </svg>
  );
};
