import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ListItem } from "./ListItem";

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
        enterFrom="transform opacity-0 scale-100"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-100"
      >
        <Menu.Items className="absolute z-10 -top-[5px] -right-5 w-[315px] p-5 pt-[5.5px] bg-prime-white rounded-xl shadow-prime border-0">
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
            <Menu.Item>
              <ListItem text="text"/>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Duplicate
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Move
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
