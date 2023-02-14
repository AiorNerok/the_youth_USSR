import { FC, useState } from "react";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`space-y-[5px] flex flex-col items-center justify-center relative cursor-pointer [&>*]:bg-prime-violet-2 [&>*]:block  [&>*]:w-[20px] [&>*]:h-[2px] [&>*]:rounded-full [&>*]:transition-all [&>*]:duration-300`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        style={{
          margin: isOpen ? "initial" : "0",
        }}
        className={`${
          isOpen ? "rotate-[30deg] m-0" : ""
        } absolute origin-top-left`}
      />
      <span
        style={{
          margin: isOpen ? "initial" : "0",
        }}
        className={`${isOpen ? "rotate-[-30deg] m-0" : ""} origin-top-right`}
      />

















      <span className={`${isOpen ? "opacity-0" : ""}`}></span>
      <span className={`${isOpen ? "opacity-0" : ""}`}></span>
    </div>
  );
};
