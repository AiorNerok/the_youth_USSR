import React, { FC } from "react";
import { ListItemProps } from "types";

export const ListItem: FC<ListItemProps> = ({ text, icon, iconHover }) => {

  return (
    <li
      className="p-[10px] hover:bg-prime-violet-1 transition-all duration-300"
      onMouseEnter={() => console.log('')}
      onMouseLeave={() => console.log('')}
    >
      text
    </li>
  );
};
