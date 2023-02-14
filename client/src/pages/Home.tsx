import { Aside, Header } from "components";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div className="container min-h-screen max-w-[1440px] text-3xl font-bold mx-auto font-gt flex flex-col">
      <div className="h-[40px] hidden screen-prime:block bg-transparent" />
      <Header />
      <div className="flex flex-1 bg-prime-white screen-prime:rounded-b-xl overflow-hidden">
        <div className="w-[300px]">
          <Aside />
        </div>
        <div className="flex-1 bg-prime-gray-3"></div>
      </div>
      <div className="h-[40px] hidden screen-prime:block bg-transparent" />
    </div>
  );
};
