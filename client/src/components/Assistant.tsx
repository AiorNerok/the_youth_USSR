import { FC } from "react";

import Wolf from "assets/icons/wolf.svg";

export const Assistant: FC = () => {
  const citatnik = [
    "Лучше быть последним – первым, чем первым – последним.",
    "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.",
    "Если волк молчит то лучше его не перебивать.",
    "Делай как надо, как не надо не делай.",
    "Работа не волк, работа это ворк, а волк это ходить.",
    "Брат уйдёт от брата только если звонок на урок.",
    "Волк может отгрызть себе жопу чтобы не стать петухом. А может не отгрызть.",
    "Хочешь, будь волком. Это твоё дело. Главное надень овечью шкуру.",
    "В этой жизни ты либо волк, либо не волк.",
    "Если волк молчит, то лучше его не перебивай.",
    "Внутри нас живёт волк. Но если мы будем вести себя подло, не сомневайтесь, он вскоре умрёт.",
    "Запомните волчья ягода не из волков.",
    "Работа не волк, работа это ворк, а волк — это ходить.",
    "Волк слабее льва и тигра, но в цирке не выступает.",
    "Под маской одинокого волка зачастую скрывается трусливый баран.",
    "Я словно волк — всегда осторожный и в меру голодный.",
    "Если волк вас любит он никогда не даст вас в обиду! Он будет обижать вас сам.",
    "Волк — это не волк. Это дух волка, сын волка и волк, волк, волк, волк…",
    "Волк встаёт раньше всех, чтобы не только лишь всех раньше съесть.",
    "Волк сказал — волк укусил — волк налажал — волк супрастин…",
    "Красная шапочка вогнала волка в краску, спросив удивленно, почему у бабули такой огромный хвост…",
  ];

  return (
    <div className="w-[178px] flex flex-col relative mx-auto items-center bg-prime-green rounded-2xl py-[40px]">
      <div className="h-[30px] absolute -top-[30px]">
        <div className="mt-[6px] bg-prime-green rounded-full w-[60px] h-[60px] mb-[14px]">
          <img src={Wolf} alt="assistant" className="-translate-y-[5px]" />
        </div>
      </div>
      <div className="text-center text-2 text-prime-violet-2">
        <p className="mb-[10px]">Вуфентий</p>
        <p className="text-prime-black mx-5">
          {citatnik[Math.floor(Math.random() * citatnik.length)]}
          <br /> АУФ!
        </p>
      </div>
    </div>
  );
};
