import { FC } from "react";

import Wolf from "assets/icons/wolf.svg";
import { citatnik } from "data/citatnik";

export const Assistant: FC = () => {


  return (
    <div className="w-[178px] flex flex-col relative mx-auto items-center bg-uiColor-green rounded-2xl py-[40px]">
      <div className="h-[30px] absolute -top-[30px]">
        <div className="mt-[6px] bg-uiColor-green rounded-full w-[60px] h-[60px] mb-[14px]">
          <img src={Wolf} alt="assistant" className="-translate-y-[5px]" />
        </div>
      </div>
      <div className="text-center text-2 text-uiColor-violet-2">
        <p className="mb-[10px]">Вуфентий</p>
        <p className="text-uiColor-black mx-5">
          {citatnik[Math.floor(Math.random() * citatnik.length)]}
          <br /> ВУФ!
        </p>
      </div>
    </div>
  );
};
