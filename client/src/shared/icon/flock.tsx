import { FC } from "react";
import { IconProps } from "types";

export const FlockIcon: FC<IconProps> = ({
  pathfill = "#FFC3C3",
  rectfill = "#FF8CA9",
  isHover,
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
        d="M9.34991 3.99991C10.5299 3.82991 11.7799 5.11991 12.1399 6.89991C12.4999 8.66991 11.8499 10.2499 10.6699 10.4299C9.49991 10.6099 8.23991 9.31991 7.86991 7.53991C7.49991 5.76991 8.16991 4.18991 9.34991 3.99991ZM16.4999 3.99991C17.6899 4.18991 18.3499 5.76991 17.9999 7.53991C17.6199 9.31991 16.3699 10.6099 15.1899 10.4299C13.9999 10.2499 13.3499 8.66991 13.7199 6.89991C14.0799 5.11991 15.3299 3.82991 16.4999 3.99991ZM3.99991 8.59991C5.13991 8.10991 6.68991 8.99991 7.49991 10.5499C8.25991 12.1299 7.99991 13.7899 6.86991 14.2799C5.73991 14.7699 4.19991 13.8899 3.40991 12.3199C2.61991 10.7499 2.89991 9.07991 3.99991 8.59991ZM21.9999 8.59991C23.0999 9.07991 23.3799 10.7499 22.5899 12.3199C21.7999 13.8899 20.2599 14.7699 19.1299 14.2799C17.9999 13.7899 17.7399 12.1299 18.4999 10.5499C19.3099 8.99991 20.8599 8.10991 21.9999 8.59991ZM20.3299 19.3799C20.3699 20.3199 19.6499 21.3599 18.7899 21.7499C16.9999 22.5699 14.8799 20.8699 12.8899 20.8699C10.8999 20.8699 8.75991 22.6399 6.99991 21.7499C5.99991 21.2599 5.30991 19.9599 5.43991 18.8799C5.61991 17.3899 7.40991 16.5899 8.46991 15.4999C9.87991 14.0899 10.8799 11.4399 12.8899 11.4399C14.8899 11.4399 15.9499 14.0499 17.2999 15.4999C18.4099 16.7199 20.2599 17.7499 20.3299 19.3799Z"
        fill={pathfill}
      />
    </svg>
  );
};