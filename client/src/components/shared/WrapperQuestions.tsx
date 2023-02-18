import { FC } from "react";
import { nanoid } from "nanoid";

import { quests } from "data/quests";
import { CardUI } from "components/ui/CardUI";

export const WrapperQuestions: FC = () => {
  let data = quests.filter((i) => i.isCompleted === false);
  return (
    <div className="inline-flex flex-row px-3 space-x-2 bg-uiColor-violet rounded-xl p-3">
      {data.map((i) => {
        return <CardUI key={nanoid()} {...i} />;
      })}
    </div>
  );
};
