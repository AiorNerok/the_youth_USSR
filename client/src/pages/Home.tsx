import { WrapperQuestions } from "components/shared/WrapperQuestions";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div className="space-y-[50px]">
      <div>
        <h4>Мои квесты</h4>
        <WrapperQuestions isCompleted={false} classes="bg-uiColor-violet" />
      </div>
      <div>
        <h4>Выполненые квесты</h4>
        <WrapperQuestions isCompleted={true} classes="bg-uiColor-white" />
      </div>
    </div>
  );
};
