import { FC } from "react";
import { nanoid } from "nanoid";

import {
  MailFolderIncomIcon,
  MailFolderOutIcon,
  PlusIcon,
  BascketIcon,
} from "shared/icon";

export const Message: FC = () => {
  let data = {
    head: ["", "От кого", "Тема письма", "Дата", "Удалить"],
    data: [
      {
        from: "Кит Енот Волкович",
        theme: "Инструкция по работе с принтером",
        date: "14.02.2023",
        color: 'pink'
      },
      {
        from: "Кит Енот Волкович",
        theme: "Инструкция по работе с принтером",
        date: "14.02.2023",
        color: 'violet'
      },
      {
        from: "Кит Енот Волкович",
        theme: "Инструкция по работе с принтером",
        date: "14.02.2023",
        color: 'violet'
      },
      {
        from: "Кит Енот Волкович",
        theme: "Инструкция по работе с принтером",
        date: "14.02.2023",
        color: 'pink'
      },
    ],
  };
  return (
    <div className="p-5 space-y-10">
      <div className="flex items-center space-x-6">
        <MailFolderIncomIcon /> <MailFolderOutIcon /> <PlusIcon />
      </div>
      <div className="max-w-[792px]">
        <div className="flex justify-between px-[17.5px] mb-[15px]">
          {data.head.map((i) => (
            <div key={nanoid()} className="flex-1 first:max-w-[100px] ">
              {i}
            </div>
          ))}
        </div>
        <div className="space-y-[10px]">
          {data.data.map(({color,date,from,theme}) => (
            <div key={nanoid()} className={`flex justify-between items-center bg-uiColor-${color}-1 px-[17.5px] py-[20px] rounded-2xl`}>
              <div className="flex-1 max-w-[100px]">
                <span className={`block w-[13px] h-[13px] rounded-full bg-uiColor-${color}`}></span>
              </div>
              <div className="flex-1 font-regular text-3">{from}</div>
              <div className="flex-1 font-light text-3">{theme}</div>
              <div className="flex-1 font-light text-3">{date}</div>
              <div className="flex-1">
                <BascketIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
