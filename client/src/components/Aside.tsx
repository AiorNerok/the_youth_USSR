import React, { FC, useEffect, useRef, useState } from "react";
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
import { Tooltip } from "./Tooltip";

const arr = [
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
    classes: "",
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
    classes: "",
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
    classes: "",
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
    classes: "",
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
    classes: "",
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
    classes: "",
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
    classes: "",
    tooltip: {
      text: "Что-то новенькое! Зайди и узнай",
      position: "top",
    },
  },
];

export const Aside: FC = () => {
  return (
    <aside>
      <ul className="flex flex-col mx-[10px] text-prime-violet-2 text-3 font-regular">
        {arr.map(({ id, text, icon, iconHover, tooltip }) => (
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
      let { x, width, height } = refEl.current.getBoundingClientRect();
      let left = x + width - 10;
      let top;
      let classes;

      if (tooltip.position === "top") {
        top = -height;
        classes = "rounded-bl-none";
      } else if(tooltip.position === "bottom"){
        top = height;
        classes = "rounded-tl-none";
      }
      let pos: TooltipPositionProps = { left, top, classes };

      setPosition(pos);
    }
  }, [tooltip]);

  return (
    <li
      className="relative h-[46px] cursor-pointer hover:bg-prime-violet-1 transition-all duration-200 p-[10px] rounded-[10px] hover:-translate-y-[1px] select-none"
      onMouseEnter={toggleIcon}
      onMouseLeave={toggleIcon}
    >
      <div className="relative flex items-center">
        <ListItem text={text} icon={IconEl ? iconHover : icon} ref={refEl} />
        <Tooltip {...tooltip} position={position} />
      </div>
    </li>
  );
};
