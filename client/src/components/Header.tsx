import { FC } from "react";
import Dropdown from "./Dropdown";
import { HelpIcon, NotificationIcon, RemoveIcon, SearchIcon } from "./icon";
import { LogoIcon } from "./icon/logo";

export const Header: FC = () => {
  return (
    <header className="flex items-center px-[10px] h-[59px] justify-between">
      <div className="w-[300px]">
        <span>
          <LogoIcon />
        </span>
      </div>
      <div>
        <h3 className="font-gt hidden md:block">Привет, Гилфойл</h3>
      </div>
    <div className="flex-1"/>
      <div>
        <span>
          <HelpIcon />
        </span>
      </div>
      <div>
        <div className="relative bg-prime-gray rounded-[8px] h-[38px]">
          <span className="absolute z-0 left-[13px] top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Поиск"
            className="pl-[46px] pt-[5px] relative z-10 bg-transparent outline-none"
          />
          <span className="absolute top-1/2 z-10 -translate-y-1/2 right-[13px] cursor-pointer">
            <RemoveIcon />
          </span>
        </div>
      </div>
      <div>
        <NotificationIcon />
      </div>
      <Dropdown />
    </header>
  );
};
