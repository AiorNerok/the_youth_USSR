import { Header } from "components";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div className="container text-3xl font-bold mx-auto font-gt">
      <Header />
    </div>
  );
};
