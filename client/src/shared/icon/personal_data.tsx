import { FC } from "react";
import { IconProps } from "types";

export const PersonalDataIcon: FC<IconProps> = ({isHover=false, pathfill="#FF8CA9", rectfill="#FFC3C3"}) => {
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
        d="M5 6H8L10 4H16L18 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V20C23 20.5304 22.7893 21.0391 22.4142 21.4142C22.0391 21.7893 21.5304 22 21 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6ZM17 18V17C17 15.67 14.33 15 13 15C11.67 15 9 15.67 9 17V18H17ZM13 10C12.4696 10 11.9609 10.2107 11.5858 10.5858C11.2107 10.9609 11 11.4696 11 12C11 12.5304 11.2107 13.0391 11.5858 13.4142C11.9609 13.7893 12.4696 14 13 14C13.5304 14 14.0391 13.7893 14.4142 13.4142C14.7893 13.0391 15 12.5304 15 12C15 11.4696 14.7893 10.9609 14.4142 10.5858C14.0391 10.2107 13.5304 10 13 10Z"
        fill={pathfill}
      />
    </svg>
  );
};
