import { FC } from "react";
import { IconProps } from "types";
import { useNotificationStore } from "store/notification";

export const HelpIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#5177FF",
  rectfill = "#fff",
}) => {
  if (isHover) {
    [pathfill, rectfill] = [rectfill, pathfill];
  }

  const toggle = useNotificationStore((state: any) => state.toggle);

  return (
    <span onClick={toggle} className="cursor-pointer">
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="26" height="26" rx="4" fill={rectfill} />
        <path
          d="M5 3.5C4.46957 3.5 3.96086 3.71071 3.58579 4.08579C3.21071 4.46086 3 4.96957 3 5.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H9V22.5C9 22.7652 9.10536 23.0196 9.29289 23.2071C9.48043 23.3946 9.73478 23.5 10 23.5H10.5C10.75 23.5 11 23.4 11.2 23.21L14.9 19.5H21C21.5304 19.5 22.0391 19.2893 22.4142 18.9142C22.7893 18.5391 23 18.0304 23 17.5V5.5C23 4.96957 22.7893 4.46086 22.4142 4.08579C22.0391 3.71071 21.5304 3.5 21 3.5H5ZM5 5.5H21V17.5H14.08L11 20.58V17.5H5V5.5ZM13.19 7C12.3 7 11.59 7.18 11.05 7.54C10.5 7.9 10.22 8.5 10.27 9.19H12.24C12.24 8.91 12.34 8.7 12.5 8.56C12.7 8.42 12.92 8.35 13.19 8.35C13.5 8.35 13.77 8.43 13.95 8.61C14.13 8.78 14.22 9 14.22 9.3C14.22 9.58 14.14 9.83 14 10.04C13.83 10.26 13.62 10.44 13.36 10.58C12.84 10.9 12.5 11.18 12.29 11.42C12.1 11.66 12 12 12 12.5H14C14 12.22 14.05 12 14.14 11.82C14.23 11.65 14.4 11.5 14.66 11.35C15.12 11.14 15.5 10.86 15.79 10.5C16.08 10.13 16.23 9.74 16.23 9.3C16.23 8.6 15.96 8.04 15.42 7.62C14.88 7.21 14.13 7 13.19 7ZM12 13.5V15.5H14V13.5H12Z"
          fill={pathfill}
        />
      </svg>
    </span>
  );
};
