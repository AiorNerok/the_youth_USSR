import { useNotificationStore } from "store/useNotificationStore";
import { TooltipUI } from "components/ui";
import { TooltipUIProps } from "components/ui/TooltipUI";
import { FC } from "react";

export const Tooltip: FC<TooltipUIProps> = ({ text, position }) => {
  let isShow = useNotificationStore((state) => state.isShow);
  return <>{isShow && <TooltipUI text={text} position={position} />}</>;
};
