import { FC, useState } from "react";

export const Burger:FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-7 h-7 mx-1 space-y-[5px] flex flex-col justify-around items-center relative cursor-pointer [&>*]:w-full [&>*]:bg-prime-violet-2 [&>*]:block  [&>*]:h-[2px] [&>*]:rounded-full [&>*]:transition-all [&>*]:duration-300`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`${
          isOpen ? "rotate-[30deg] absolute top-[5px] left-[2.5px]" : ""
        } origin-top-left`}
      />
      <span
        className={`${
          isOpen ? "rotate-[-30deg] absolute top-0 right-[2.5px]" : ""
        } origin-top-right`}
      />

      <span className={`${isOpen ? "opacity-0" : ""} m-0`} />
    </div>
  );
};
