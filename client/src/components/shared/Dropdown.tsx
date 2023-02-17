import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ListItemUI } from "../ui/ListItemUI";

import { HelpIcon, LogoutIcon, FlockIcon } from "shared/icon";

const arr = [
  {
    id: 1,
    text: "Войти в личный кабинет",
    icon: <FlockIcon />,
    iconHover: <FlockIcon isHover />,
    classes: "",
  },
  {
    id: 2,
    text: "Помощь",
    icon: <HelpIcon />,
    iconHover: <HelpIcon isHover />,
    classes: "",
  },
  {
    id: 3,
    text: "Выйти",
    icon: <LogoutIcon />,
    iconHover: <LogoutIcon isHover />,
    classes: "",
  },
];

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as="div"
          className="w-12 h-12 rounded-full overflow-hidden flex justify-center"
        >
          <img
            src="https://static.wikia.nocookie.net/silicon-valley/images/2/20/Bertram_Gilfoyle.jpg"
            alt="avatar"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Menu.Items className="absolute z-10 -top-[5px] -right-5 w-[315px] p-5 pt-[5.5px] bg-uiColor-white rounded-xl shadow-prime border-0 outline-none">
          <Menu.Item as={"div"} className="flex items-center mb-[52px]">
            <span className="flex-1">Бертрам Гилфойл</span>
            <span className="flex rounded-full overflow-hidden w-12 h-12">
              <img
                src="https://static.wikia.nocookie.net/silicon-valley/images/2/20/Bertram_Gilfoyle.jpg"
                alt="avatar"
              />
            </span>
          </Menu.Item>
          <div className="px-1 py-1 ">
            {arr.map(({ id, icon, text, classes, iconHover }) => {
              return (
                <Menu.Item key={id}>
                  {({ active }) => {
                    return (
                      <button className="p-[10px] hover:bg-uiColor-violet-1 transition-all duration-300 rounded-[4px] w-full flex items-center mb-6 last:mb-0">
                        <ListItemUI
                          icon={active ? iconHover : icon}
                          text={text}
                        />
                      </button>
                    );
                  }}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
