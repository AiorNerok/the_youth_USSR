import { FC } from "react";
import { IconProps } from "types";

export const ExcursionIcon: FC<IconProps> = ({
  pathfill = "#84F1DE",
  rectfill = "#E2FFFA",
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
      d="M12 11H6L4 9L6 7H12V4L13 3L14 4V5H20L22 7L20 9H14V11H20L22 13L20 15H14V21C14.5304 21 15.0391 21.2107 15.4142 21.5858C15.7893 21.9609 16 22.4696 16 23H10C10 22.4696 10.2107 21.9609 10.5858 21.5858C10.9609 21.2107 11.4696 21 12 21V11Z"
      fill={pathfill}
    />
  </svg>
);
