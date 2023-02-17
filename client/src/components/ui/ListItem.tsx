import React, { FC } from "react";
import { ListItemProps } from "types";

export const ListItem = React.forwardRef<HTMLSpanElement, ListItemProps>(
  ({ text, icon }, ref) => {
    return (
      <>
        <span className="mr-5">{icon}</span>
        <span ref={ref}>{text}</span>
      </>
    );
  }
);
