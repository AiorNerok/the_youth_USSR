import { FC } from "react";

export interface TooltipUIProps {
  text: string;
  position: {
    left: number;
    classes: string;
  };
}

export const TooltipUI: FC<TooltipUIProps> = ({ text, position }) => {
  return (
    <div
      className={`absolute w-full max-w-[150px] px-[15px] py-[5px] rounded-xl bg-uiColor-yellow text-1 leading-[135%] transition-all duration-200`}
      style={{
        left: position.left,
      }}
    >
      {text}
    </div>
  );
};
