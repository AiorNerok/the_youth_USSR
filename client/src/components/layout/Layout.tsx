import { Aside, Header } from "components/screens";
import { Assistant } from "components/shared/Assistant";
import { FC } from "react";
import { LayoutProps } from "./interface";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-[40px] hidden screen:block bg-transparent" />
      <div className="max-w-[1440px] max-h-[860px] h-screen w-full mx-auto screen:rounded-xl bg-uiColor-white">
        <Header />
        <div className="flex flex-1 bg-uiColor-white screen-prime:rounded-b-xl">
          <div className="w-1/3 min-w-[255px] max-w-[300px] flex flex-col">
            <Aside />
            <div className="grow flex items-center justify-center">
              <Assistant />
            </div>
          </div>
          <div className="flex-1 bg-uiColor-gray-3">{children}</div>
        </div>
        <div className="absolute bottom-[55px] right-[30px]"></div>
      </div>
      <div className="h-[40px] hidden screen:block bg-transparent" />
    </>
  );
};
