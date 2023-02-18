import React, { FC, useEffect, useRef, useState } from "react";
import { ListItemUI } from "../ui/ListItemUI";
import { useLocation } from "react-router-dom";
import {
  CompanyIcon,
  EventsIcon,
  ExcursionIcon,
  FlockIcon,
  HRIcon,
  NewsIcon,
  ServiceIcon,
  TeamIcon,
} from "shared/icon";
import { Tooltip } from "components/shared/Tooltip";

const arrUser = [
  {
    id: 1,
    text: "Влейся в стаю!",
    icon: <FlockIcon />,
    iconHover: <FlockIcon isHover />,
    classes: "",
    tooltip: {
      text: "Выполняй задания и получай награду",
      position: "top",
    },
  },
  {
    id: 2,
    text: "О компании",
    icon: <CompanyIcon />,
    iconHover: <CompanyIcon isHover />,
    tooltip: {
      text: "Изучай историю и достижения компании",
      position: "top",
    },
  },
  {
    id: 3,
    text: "Cервисы росмолодежи",
    icon: <ServiceIcon />,
    iconHover: <ServiceIcon isHover />,
    tooltip: {
      text: "Познакомься с сервисами ",
      position: "top",
    },
  },
  {
    id: 4,
    text: "HR-служба",
    icon: <HRIcon />,
    iconHover: <HRIcon isHover />,
    tooltip: {
      text: "По вопросам карьеры и не только тебе поможет HR",
      position: "top",
    },
  },
  {
    id: 5,
    text: "Экскурсия",
    icon: <ExcursionIcon />,
    iconHover: <ExcursionIcon isHover />,
    tooltip: {
      text: "Заблудился? Взгляни на карту",
      position: "top",
    },
  },
  {
    id: 6,
    text: "Команда",
    icon: <TeamIcon />,
    iconHover: <TeamIcon isHover />,
    tooltip: {
      text: "Узнай стаю! Контакты и должности здесь",
      position: "top",
    },
  },
  {
    id: 7,
    text: "Мероприятия",
    icon: <EventsIcon />,
    iconHover: <EventsIcon isHover />,
    tooltip: {
      text: "Все интерактивы компании. Сохраняй к себе, чтобы не пропустить",
      position: "top",
    },
  },
  {
    id: 8,
    text: "Новости",
    icon: <NewsIcon />,
    iconHover: <NewsIcon isHover />,
    tooltip: {
      text: "Что-то новенькое! Зайди и узнай",
      position: "top",
    },
  },
];

export const Aside: FC = () => {
  let location = useLocation();

  let search = location.search.split("=")[1];

  const [arr, setArr] = useState<any>(arrUser);

  useEffect(() => {
    if (search === "hr") {
      let arrHR = [
        { id: 1, text: "Личные данные" },
        { id: 2, text: "Сообщения" },
        { id: 3, text: "Личные документы" },
        { id: 4, text: "Маршрут внедрения" },
        { id: 5, text: "Новый сотрудник" },
        { id: 6, text: "Сотрудники" },
        { id: 7, text: "Баланс" },
        { id: 8, text: "Карьерный путь" },
        { id: 9, text: "Наставник" },
      ];
      setArr(arrHR);
    } else {
      setArr(arrUser);
    }
  }, []);

  return (
    <aside>
      <ul className="flex flex-col mx-[10px] text-prime-violet-2 text-3 font-regular">
        {arr.map(({ id, text, icon, iconHover, tooltip }: any) => (
          <AsideItems
            key={id}
            text={text}
            icon={icon}
            iconHover={iconHover}
            tooltip={tooltip}
          />
        ))}
      </ul>
    </aside>
  );
};

interface TooltipPositionProps {
  left: number;
  top?: number;
  classes?: string;
}

const AsideItems: FC<any> = ({ text, icon, iconHover, tooltip }) => {
  const [IconEl, setIconEl] = useState<boolean>(icon);
  function toggleIcon(e: React.MouseEvent) {
    if (e.type === "mouseenter") setIconEl(true);
    if (e.type === "mouseleave") setIconEl(false);
  }

  const refEl = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<object | {}>({});

  useEffect(() => {
    if (refEl.current) {
      let { width, height } = refEl.current.getBoundingClientRect();
      let left = width + 56;
      let top;
      let classes;

      if (tooltip) {
        if (tooltip.position === "top") {
          top = -height;
          classes = "rounded-bl-none";
        } else if (tooltip.position === "bottom") {
          top = height;
          classes = "rounded-tl-none";
        }
        let pos: TooltipPositionProps = { left, top, classes };
        setPosition(pos);
      }
    }
  }, [tooltip]);

  return (
    <li
      className="relative h-[46px] cursor-pointer hover:bg-uiColor-violet-1 transition-all duration-200 p-[10px] rounded-[10px] hover:-translate-y-[1px] select-none"
      onMouseEnter={toggleIcon}
      onMouseLeave={toggleIcon}
    >
      <div className="relative flex items-center">
        <ListItemUI text={text} icon={IconEl ? iconHover : icon} ref={refEl} />
        {tooltip && <Tooltip {...tooltip} position={position} />}
      </div>
    </li>
  );
};
