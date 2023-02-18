import { FC } from "react";
import { IconProps } from "types";

export const CareerPathIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#FF8CA9",
  rectfill = "#FFC3C3",
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
      <g clip-path="url(#clip0_324_1252)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 7H20.9661C22.0707 7 22.9661 7.89543 22.9661 9V9.3121C22.9661 10.4167 22.0707 11.3121 20.9661 11.3121H4.94564C2.76652 11.3121 1 13.0786 1 15.2577C1 17.4369 2.76653 19.2034 4.94565 19.2034H17.6901V17.2034H4.94565C3.8711 17.2034 3 16.3323 3 15.2577C3 14.1832 3.87109 13.3121 4.94564 13.3121H20.9661C23.1752 13.3121 24.9661 11.5212 24.9661 9.3121V9C24.9661 6.79086 23.1752 5 20.9661 5H2V7ZM20.305 14.5423L20.7533 15.8872C20.9959 15.8063 21.2554 15.7626 21.5252 15.7626C21.795 15.7626 22.0546 15.8063 22.2972 15.8872L22.7455 14.5423L23.4774 16.7381C23.7841 17.1462 23.9659 17.6535 23.9659 18.2032C23.9659 19.5512 22.8732 20.6439 21.5252 20.6439C20.1773 20.6439 19.0845 19.5512 19.0845 18.2032C19.0845 17.6535 19.2663 17.1462 19.573 16.7382L20.305 14.5423Z"
          fill={pathfill}
        />
      </g>
      <defs>
        <clipPath id="clip0_324_1252">
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
