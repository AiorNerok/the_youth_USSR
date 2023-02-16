import { FC } from "react";
import { IconProps } from "types";

export const ServiceIcon: FC<IconProps> = ({
  pathfill = "#BCAEFF",
  rectfill = "#EFE9FF",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 21C23 22.11 22.11 23 21 23H10C8.89 23 8 22.11 8 21V10C8 8.89 8.89 8 10 8H21C22.11 8 23 8.89 23 10V21ZM21 19.1171L19.4118 15.5895L18.8172 14.2686L17.7929 15.2929L15.5 17.5858L13.2071 15.2929L12.1828 14.2686L11.5882 15.5895L10 19.1169V10H21V19.1171ZM19.6544 21L18.1828 17.7314L16.2071 19.7071L15.5 20.4142L14.7929 19.7071L12.8172 17.7314L11.3455 21H19.6544ZM6 15V17H4C2.89 17 2 16.11 2 15V4C2 2.89 2.89 2 4 2H15C16.11 2 17 2.89 17 4V6H15V4H4V15H6Z"
        fill={pathfill}
      />
    </svg>
  );
};
