import { FC } from "react";

import { useNotificationStore } from "store/useNotificationStore";
import { HelpIcon } from "shared/icon";

export const Helper: FC = () => {
  const toggle = useNotificationStore((state) => state.toggle);

  return (
    <span onClick={toggle} className="cursor-pointer">
      <HelpIcon />
    </span>
  );
};
