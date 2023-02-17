import { WrapperQuestions } from "components/shared/WrapperQuestions";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div>
      <WrapperQuestions />
    </div>
  );
};
