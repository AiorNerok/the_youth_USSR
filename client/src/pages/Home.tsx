import { Aside, Header } from "components";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div className="container min-h-screen text-3xl font-bold mx-auto font-gt flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="w-[280px] mr-[10px]">
          <Aside />
        </div>
        <div className="flex-1 bg-prime-gray-3">

        </div>
      </div>
    </div>
  );
};
