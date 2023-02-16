import { Header } from "components/screens";
import { FC } from "react";
import { LayoutProps } from "./interface";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-[40px] hidden screen:block bg-transparent" />
      <div className="max-w-[1440px] w-full mx-auto screen:rounded-t-xl bg-uiColor-white">
        <Header />
      </div>
      <div className="h-[40px] hidden screen:block bg-transparent" />
    </>
  );
};
