import { WrapperQuestions } from "components/shared/WrapperQuestions";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div>
      <div>
        <h4>Мои квесты</h4>
        <WrapperQuestions isCompleted={false} classes="bg-uiColor-violet" />
      </div>
      <div>
        <h4>Выполненые квесты</h4>
        <WrapperQuestions isCompleted={true} />
      </div>
    </div>
  );
};
