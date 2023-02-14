import React, { FC, useState } from "react";
import { ListItem } from "./ListItem";
import {
  CompanyIcon,
  EventsIcon,
  ExcursionIcon,
  FlockIcon,
  HRIcon,
  NewsIcon,
  ServiceIcon,
  TeamIcon,
} from "./icon";

const arr = [
  {
    id: 1,
    text: "Влейся в стаю!",
    icon: <FlockIcon />,
    iconHover: <FlockIcon isHover />,
    classes: "",
  },
  {
    id: 2,
    text: "О компании",
    icon: <CompanyIcon />,
    iconHover: <CompanyIcon isHover />,
    classes: "",
  },
  {
    id: 3,
    text: "Cервисы росмолодежи",
    icon: <ServiceIcon />,
    iconHover: <ServiceIcon isHover />,
    classes: "",
  },
  {
    id: 4,
    text: "HR-служба",
    icon: <HRIcon />,
    iconHover: <HRIcon isHover />,
    classes: "",
  },
  {
    id: 5,
    text: "Экскурсия",
    icon: <ExcursionIcon />,
    iconHover: <ExcursionIcon isHover />,
    classes: "",
  },
  {
    id: 6,
    text: "Команда",
    icon: <TeamIcon />,
    iconHover: <TeamIcon isHover />,
    classes: "",
  },
  {
    id: 7,
    text: "Мероприятия",
    icon: <EventsIcon />,
    iconHover: <EventsIcon isHover />,
    classes: "",
  },
  {
    id: 8,
    text: "Новости",
    icon: <NewsIcon />,
    iconHover: <NewsIcon isHover />,
    classes: "",
  },
];

export const Aside: FC = () => {
  return (
    <aside>
      <ul className="flex flex-col mx-[10px]">
        {arr.map(({ id, text, icon, iconHover }) => (
          <AsideItems key={id} text={text} icon={icon} iconHover={iconHover} />
        ))}
      </ul>
    </aside>
  );
};

const AsideItems: FC<any> = ({ text, icon, iconHover }) => {
  const [IconEl, setIconEl] = useState<boolean>(icon);
  function toggleIcon(e: React.MouseEvent) {
    if (e.type === "mouseenter") setIconEl(true);
    if (e.type === "mouseleave") setIconEl(false);
  }

  return (
    <li
      className="flex items-center h-[46px] cursor-pointer hover:bg-prime-violet-1 transition-all duration-200 p-[10px] rounded-[10px] hover:-translate-y-[1px]"
      onMouseEnter={toggleIcon}
      onMouseLeave={toggleIcon}
    >
      <ListItem text={text} icon={IconEl ? iconHover : icon} />
    </li>
  );
};
