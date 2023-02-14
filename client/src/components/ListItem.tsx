import React, { FC } from "react";
import { ListItemProps } from "types";

export const ListItem: FC<ListItemProps> = ({ text, icon, iconHover }) => {
  return (
    <>
      <span className="mr-5">{icon}</span>
      <span>{text}</span>
    </>
  );
};
