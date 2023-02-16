import { Aside, Assistant, Chat, Header } from "components";
import { FC } from "react";
import { HomePageProps } from "types";

export const Home: FC<HomePageProps> = () => {
  return (
    <div className="container relative min-h-screen max-w-[1440px] text-3xl font-bold mx-auto font-gt flex flex-col">
      <div className="h-[40px] hidden screen-prime:block bg-transparent" />
      <Header />
      <div className="flex flex-1 bg-prime-white screen-prime:rounded-b-xl">
        <div className="w-1/3 min-w-[255px] max-w-[300px] flex flex-col">
          <Aside />
          <div className="grow flex items-center justify-center">
            <Assistant />
          </div>
        </div>
        <div className="flex-1 bg-prime-gray-3"></div>
      </div>
      <div className="absolute bottom-[55px] right-[30px]">
        <Chat />
      </div>
      <div className="h-[40px] hidden screen-prime:block bg-transparent" />
    </div>
  );
};
