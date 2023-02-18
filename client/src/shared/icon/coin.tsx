import { FC } from "react";

export const CoinIcon: FC = () => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_216_1155)">
        <circle cx="65" cy="65" r="65" fill="#F6F988" />
      </g>
      <circle cx="65" cy="65" r="60" stroke="#F8FB96" strokeWidth="10" />
      <path
        d="M75.474 41.3066L99.952 71.3941L121.37 66.2946C121.37 66.2946 120.077 89.9644 111.681 101.482C103.384 112.863 95.1369 117.502 81.5935 121.37C65.2446 126.039 53.2984 125.199 38.2471 117.29C26.9024 111.329 14.7891 94.3423 14.7891 94.3423L34.6774 89.2427V56.6054L56.0956 83.1232L69.8645 79.0435L75.474 41.3066Z"
        fill="#FAF46C"
      />
      <path
        d="M12.404 92.375L34.1976 87.0353L32.8697 53.758L56.9817 81.4529L68.3738 78.6617L73.8885 36.8823L100.569 70.7735L121.372 65.6765"
        stroke="#F9E060"
        strokeWidth="5"
      />
      <circle cx="65" cy="65" r="60" stroke="#FCFFA0" strokeWidth="10" />
      <defs>
        <filter
          id="filter0_i_216_1155"
          x="0"
          y="0"
          width="132"
          height="132"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.991667 0 0 0 0 0.863676 0 0 0 0 0.191722 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_216_1155"
          />
        </filter>
      </defs>
    </svg>
  );
};
