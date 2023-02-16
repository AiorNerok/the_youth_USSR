import { FC } from "react";

import { useNotificationStore } from "store/notification";

export interface TooltipProps {
  text: string;
  position: {
    left: number;
    top: number;
    classes: string;
  };
}

export const Tooltip: FC<TooltipProps> = ({ text, position }) => {
  const { left, top, classes } = position;

  const isShow = useNotificationStore((state: any) => state.isShow);

  return (
    <div
      className={`absolute w-full max-w-[150px] px-[15px] py-[5px] rounded-xl bg-prime-yellow text-1 leading-[135%] transition-all duration-200 ${classes}`}
      style={{
        left,
        // top,

        opacity: isShow ? 1 : 0,
      }}
    >
      {text}
    </div>
  );
};
