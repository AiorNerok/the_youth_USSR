import React from "react";
import { ListItemProps } from "types";

export const ListItemUI = React.forwardRef<HTMLSpanElement, ListItemProps>(
  ({ text, icon }, ref) => {
    return (
      <>
        <span className="mr-5">{icon}</span>
        <span ref={ref}>{text}</span>
      </>
    );
  }
);
