import { FC } from "react";
import { IconProps } from "types";

export const EventsIcon: FC<IconProps> = ({
  pathfill = "#EAF945",
  rectfill = "#FCFFE7",
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.9635 11.7324L20 19.0637V9H6V19.7445L8.82271 13.9609L9.43744 12.7013L10.4285 13.6924L12.6348 15.8987L16.2162 11.3789L17.4373 9.83798L17.9635 11.7324ZM16.5627 14.162L18.1844 20H8.1008L10.0053 16.0977L12.0143 18.1066L12.808 18.9003L13.5051 18.0206L16.5627 14.162ZM17 2V4H9V2H7V4H6C4.9 4 4 4.9 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H20C21.11 22 22 21.11 22 20V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H19V2H17ZM9.14603 11.1467H8L8.92698 11.85L8.5746 13L9.50159 12.29L10.4286 13L10.073 11.8533L11 11.1467H9.85714L9.50159 10L9.14603 11.1467Z"
      fill={pathfill}
    />
  </svg>
);
