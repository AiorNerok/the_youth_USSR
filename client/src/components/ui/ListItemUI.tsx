import React from "react";

export interface ListItemProps {
  text: string;
  icon?: JSX.Element | string;
  iconHover?: JSX.Element | string;
}

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
