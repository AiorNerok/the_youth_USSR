import { FC } from "react";

import Dropdown from "components/shared/Dropdown";
import { Burger } from "components/ui";
import { HelpIcon, RemoveIcon, SearchIcon } from "shared/icon";
import { LogoIcon } from "shared/icon/logo";
import { Helper } from "components/shared";

export const Header: FC = () => {
  return (
    <header className="flex items-center px-[10px] h-[59px] justify-between bg-prime-white">
      <div className="grow flex items-center">
        <div className="flex-1 max-w-[288px] ml-[10px]">
          <span>
            <LogoIcon />
          </span>
        </div>
        <div className="hidden screen-toggle:block mr-4">
          <h3 className="font-gt">Привет, Гилфойл</h3>
        </div>
      </div>

      <div className="[&>*]:mr-8 last:[&>*]:mr-[10px] items-center hidden screen-toggle:flex">
        <div>
          <span>
            <Helper />
          </span>
        </div>
        <div>
          <div className="relative bg-uiColor-gray rounded-[8px] h-[38px]">
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
        <div>{/* <NotificationIcon /> */}</div>
        <Dropdown />
      </div>

      <div className="block screen-toggle:hidden">
        <Burger />
      </div>
    </header>
  );
};
