import { FC } from "react";
import { IconProps } from "types";

export const MessageIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#FFFA83",
  rectfill = "#fff",
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
      <path
        d="M21 3C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H7L3 23V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H21ZM5 5V18.17L6.17 17H21V5H5ZM7 8H19V10H7V8ZM7 12H16V14H7V12Z"
        fill={pathfill}
      />
    </svg>
  );
};
