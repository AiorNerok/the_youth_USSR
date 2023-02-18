import React, { FC, useEffect, useRef, useState } from "react";
import { ListItemUI } from "../ui/ListItemUI";
import { Link, useLocation } from "react-router-dom";
import {
  BalanceIcon,
  CareerPathIcon,
  CompanyIcon,
  DocumentIcon,
  EventsIcon,
  ExcursionIcon,
  FlockIcon,
  HRIcon,
  MentorIcon,
  MessageIcon,
  NewsIcon,
  PathEnterIcon,
  PersonalDataIcon,
  ServiceIcon,
  TeamIcon,
} from "shared/icon";
import { Tooltip } from "components/shared/Tooltip";

const arrUser = [
  {
    id: 1,
    href: "/",
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
    href: "/company",
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
    href: "/services",
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
    href: "",
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
    href: "",
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
    href: "/team",
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
    href: "",
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
    href: "/news",
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
        {
          icon: <PersonalDataIcon />,
          href: "#",
          id: 1,
          text: "Личные данные",
        },
        {
          icon: <MessageIcon />,
          href: "#",
          id: 2,
          text: "Сообщения",
        },
        {
          icon: <DocumentIcon />,
          href: "#",
          id: 3,
          text: "Личные документы",
        },
        {
          icon: <PathEnterIcon />,
          href: "#",
          id: 4,
          text: "Маршрут внедрения",
        },
        {
          icon: <PathEnterIcon />,
          href: "#",
          id: 5,
          text: "Новый сотрудник",
        },
        {
          icon: <PathEnterIcon />,
          href: "#",
          id: 6,
          text: "Сотрудники",
        },
        {
          icon: <BalanceIcon />,
          href: "#",
          id: 7,
          text: "Баланс",
        },
        {
          icon: <CareerPathIcon />,
          href: "#",
          id: 8,
          text: "Карьерный путь",
        },
        {
          icon: <MentorIcon />,
          href: "#",
          id: 9,
          text: "Наставник",
        },
      ];
      setArr(arrHR);
    } else {
      setArr(arrUser);
    }
  }, [search]);

  return (
    <aside>
      <ul className="flex flex-col mx-[10px] text-prime-violet-2 text-3 font-regular">
        {arr.map(({ id, text, icon, iconHover, tooltip, href }: any) => (
          <AsideItems
            key={id}
            text={text}
            icon={icon}
            iconHover={iconHover}
            tooltip={tooltip}
            href={href}
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

const AsideItems: FC<any> = ({ text, icon, iconHover, tooltip, href }) => {
  const [IconEl, setIconEl] = useState(icon);
  function toggleIcon(e: React.MouseEvent) {
    if (e.type === "mouseenter") setIconEl(true);
    if (e.type === "mouseleave") setIconEl(false);
  }

  const refEl = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<object | {}>({});

  useEffect(() => {
    if (refEl.current) {
      let { width } = refEl.current.getBoundingClientRect();
      let left = width + 66;

      if (tooltip) {
        let pos: TooltipPositionProps = { left };
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
      <Link to={href} className="relative flex items-center">
        <ListItemUI
          text={text}
          icon={IconEl && iconHover ? iconHover : icon}
          ref={refEl}
        />
      </Link>
      {tooltip && <Tooltip {...tooltip} position={position} />}
    </li>
  );
};
