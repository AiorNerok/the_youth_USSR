import { FC } from "react";
import { nanoid } from "nanoid";

import { quests } from "data/quests";
import { CardUI } from "components/ui/CardUI";

interface WrapperQuestionsProps {
  isCompleted: boolean;
  classes?: string;
}

export const WrapperQuestions: FC<WrapperQuestionsProps> = ({
  isCompleted,
  classes=''
}) => {
  let data = quests.filter((i) => i.isCompleted === isCompleted);

  return (
    <div className={`inline-flex flex-row px-3 space-x-2 rounded-xl p-3 ${classes}`}>
      {data.map((i) => {
        return <CardUI key={nanoid()} {...i} />;
      })}
    </div>
  );
};
