import { Aside, Header } from "components/screens";
import { Assistant } from "components/shared/Assistant";
import { FC, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  useLayoutEffect(() => {
    // Никогда так не делай. Это плохо. Не повторяй за мной
    if (
      localStorage.getItem("user") === null &&
      window.location.pathname !== "/login"
    ) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex flex-col h-screen min-h-[860px]">
      <div className="h-[40px] hidden screen:block bg-transparent" />
      <div className="flex flex-col flex-1 max-w-[1440px] h-screen w-full mx-auto screen:rounded-xl overflow-hidden bg-uiColor-white">
        <Header />
        <div className="flex flex-1 bg-uiColor-white screen-prime:rounded-b-xl">
          <div className="w-1/3 min-w-[255px] max-w-[300px] flex flex-col">
            <Aside />
            <div className="grow flex items-center justify-center">
              <Assistant />
            </div>
          </div>
          <div className="flex-1 bg-uiColor-gray-3 max-h-[835px] overflow-hidden mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="absolute bottom-[55px] right-[30px]"></div>
      </div>
      <div className="h-[40px] hidden screen:block bg-transparent" />
    </div>
  );
};
