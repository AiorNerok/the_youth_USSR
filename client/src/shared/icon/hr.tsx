import { FC } from "react";
import { IconProps } from "types";

export const HRIcon: FC<IconProps> = ({
  pathfill = "#EAF945",
  rectfill = "#FCFFE7",
  isHover = false,
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
        d="M21 7C21.58 7 22.05 7.2 22.42 7.59C22.8 8 23 8.45 23 9V20C23 20.55 22.8 21 22.42 21.41C22.05 21.8 21.58 22 21 22H5C4.42 22 3.95 21.8 3.58 21.41C3.2 21 3 20.55 3 20V9C3 8.45 3.2 8 3.58 7.59C3.95 7.2 4.42 7 5 7H9V5C9 4.42 9.2 3.95 9.58 3.58C9.95 3.2 10.42 3 11 3H15C15.58 3 16.05 3.2 16.42 3.58C16.8 3.95 17 4.42 17 5V7H21ZM5 9V20H21V9H5ZM15 7V5H11V7H15ZM13 10C13.5967 10 14.169 10.2371 14.591 10.659C15.0129 11.081 15.25 11.6533 15.25 12.25C15.25 13.5 14.24 14.5 13 14.5C12.4033 14.5 11.831 14.2629 11.409 13.841C10.9871 13.419 10.75 12.8467 10.75 12.25C10.75 11 11.76 10 13 10ZM17.5 19H8.5V17.88C8.5 16.63 10.5 15.63 13 15.63C15.5 15.63 17.5 16.63 17.5 17.88V19Z"
        fill={pathfill}
      />
    </svg>
  );
};
