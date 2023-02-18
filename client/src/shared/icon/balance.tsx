import { FC } from "react";
import { IconProps } from "types";

export const BalanceIcon: FC<IconProps> = ({
  isHover = false,
  pathfill = "#FFFA83",
  rectfill = "#fff",
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 13C3 7.5 7.47 3 13 3C18.5 3 23 7.5 23 13C23 18.5 18.5 23 13 23C7.5 23 3 18.5 3 13ZM7.78869 19.0711C9.18837 20.2736 11.009 21 13 21C15.049 21 16.9175 20.2306 18.3325 18.9649L16.5627 12.5937L13.5051 16.4522L12.808 17.332L12.0143 16.5383L10.0053 14.5293L7.78869 19.0711ZM6.35252 17.4539C5.49826 16.181 5 14.649 5 13C5 8.58 8.58 5 13 5C17.42 5 21 8.58 21 13C21 14.4901 20.5931 15.8847 19.8843 17.0789L17.9635 10.164L17.4373 8.26962L16.2162 9.81058L12.6348 14.3303L10.4285 12.124L9.43744 11.133L8.82271 12.3925L6.35252 17.4539Z"
        fill={pathfill}
      />
    </svg>
  );
};
