import { FC } from "react";

export interface TooltipProps {
  text: string;
  position: {
    left: number;
    classes: string;
  };
}

export const Tooltip: FC<TooltipProps> = ({ text, position }) => {
  return (
    <div
      className={`absolute w-full max-w-[150px] px-[15px] py-[5px] rounded-xl bg-uiColor-yellow text-1 leading-[135%] transition-all duration-200`}
    >
      {text}
    </div>
  );
};
