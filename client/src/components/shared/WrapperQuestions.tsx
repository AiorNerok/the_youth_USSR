import { FC } from "react";
import { nanoid } from "nanoid";

import { quests } from "data/quests";
import { CardUI } from "components/ui/CardUI";

export const WrapperQuestions: FC = () => {
  let data = quests.filter((i) => i.isCompleted === false);
  return (
    <>
      {data.map((i) => {
        return <CardUI key={nanoid()} {...i} />;
      })}
    </>
  );
};
