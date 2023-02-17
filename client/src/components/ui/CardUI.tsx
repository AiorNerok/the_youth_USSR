import { FC } from "react";


import { QuestsProps } from "data/quests";
import {FormatterDate} from 'utils/formatTimeCard'
interface CardUIProps extends QuestsProps {}

export const CardUI: FC<CardUIProps> = ({
  createdAt,
  description,
  isCompleted,
  price,
  title,
}) => {
  return (
    <div className="p-6 rounded-xl bg-uiColor-green-2">
      <div>
        <span>{title}</span>
        <span>{isCompleted}</span>
      </div>
      <div>{description}</div>
      <div className="flex justify-between">
        <span>{FormatterDate(createdAt)}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
