import { FC } from "react";
import { IconProps } from "types";

export const LogoutIcon: FC<IconProps> = ({
  isHover,
  pathfill = "#BCAEFF",
  rectfill = "#EFE9FF",
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
        d="M20 4H6C4.89 4 4 4.89 4 6V10H6V6H20V20H6V16H4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM11.08 16.58L12.5 18L17.5 13L12.5 8L11.08 9.41L13.67 12H4V14H13.67L11.08 16.58Z"
        fill={pathfill}
      />
    </svg>
  );
};
