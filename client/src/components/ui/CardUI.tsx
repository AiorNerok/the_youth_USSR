import { FC } from "react";
import { QuestsProps } from "data/quests";
import { FormatterDate } from "utils/formatTimeCard";
import { ArrowIcon, CalendarIcon, CoinIcon, CompletIcon } from "shared/icon";

interface CardUIProps extends QuestsProps {}

export const CardUI: FC<CardUIProps> = ({
  createdAt,
  description,
  isCompleted,
  price,
  title,
}) => {
  return (
    <div className="p-6 rounded-xl bg-uiColor-green-2 w-[330px] space-y-2">
      <div className="flex justify-between font-light text-3">
        <span>{title}</span>
        <span className="cursor-pointer">
          {isCompleted ? <CompletIcon /> : <ArrowIcon />}
        </span>
      </div>
      <div className="font-light text-2">{description}</div>
      <div className="flex justify-between items-center text-1 font-light">
        <span className="inline-flex space-x-2">
          <CalendarIcon />
          {FormatterDate(createdAt)}
        </span>
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
