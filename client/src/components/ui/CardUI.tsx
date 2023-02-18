import { FC } from "react";
import { QuestsProps } from "data/quests";
import { FormatterDate } from "utils/formatTimeCard";
import { CoinIcon } from "shared/icon";

interface CardUIProps extends QuestsProps {}

export const CardUI: FC<CardUIProps> = ({
  createdAt,
  description,
  isCompleted,
  price,
  title,
}) => {
  return (
    <div className="p-6 rounded-xl bg-uiColor-green-2 w-[330px]">
      <div>
        <span>{title}</span>
        <span>{isCompleted}</span>
      </div>
      <div>{description}</div>
      <div className="flex justify-between">
        <span>{FormatterDate(createdAt)}</span>
        <span className="flex items-center bg-uiColor-white p-[5px] rounded">
          +{price}
          <span className="p-[5px]">
            <CoinIcon />
          </span>
        </span>
      </div>
    </div>
  );
};
