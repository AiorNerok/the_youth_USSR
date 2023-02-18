import { FC } from "react";
import { nanoid } from "nanoid";

import { quests } from "data/quests";
import { CardUI } from "components/ui/CardUI";

export const WrapperQuestions: FC = () => {
  let data = quests.filter((i) => i.isCompleted === false);
  return (
    <div className="flex flex-row px-3 space-x-1 bg-uiColor-violet">
      {data.map((i) => {
        return <CardUI key={nanoid()} {...i} />;
      })}
    </div>
  );
};
