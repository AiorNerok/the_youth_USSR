import { FC } from "react";
import { IconProps } from "types";

export const MentorIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#84F1DE",
  rectfill = "#E2FFFA",
}) => {
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
        d="M12 15H10C10 12.6131 10.9482 10.3239 12.636 8.63604C14.3239 6.94821 16.6131 6 19 6V8C15.13 8 12 11.13 12 15ZM19 12V10C16.24 10 14 12.24 14 15H16C16 13.34 17.34 12 19 12ZM8 5C8 3.89 7.11 3 6 3C4.89 3 4 3.89 4 5C4 6.11 4.89 7 6 7C7.11 7 8 6.11 8 5ZM12.45 5.5H10.45C10.3355 6.19925 9.9757 6.83486 9.43514 7.29296C8.89458 7.75106 8.20856 8.00171 7.5 8H4.5C3.67 8 3 8.67 3 9.5V12H9V9.74C9.92574 9.44644 10.7455 8.88871 11.3584 8.13541C11.9714 7.38211 12.3508 6.46609 12.45 5.5ZM20 18C21.11 18 22 17.11 22 16C22 14.89 21.11 14 20 14C18.89 14 18 14.89 18 16C18 17.11 18.89 18 20 18ZM21.5 19H18.5C17 19 15.79 17.92 15.55 16.5H13.55C13.75 18.5 15.14 20.15 17 20.74V23H23V20.5C23 19.67 22.33 19 21.5 19Z"
        fill={pathfill}
      />
    </svg>
  );
};
