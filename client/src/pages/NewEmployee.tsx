import { FC } from "react";
import { nanoid } from "nanoid";
import { ChatIcon } from "shared/icon";
import Resume from "assets/icons/Resume.png";

export const NewEmployee: FC = () => {  
  return (
      <div className="px-5 space-y-[10px]">
          <div className="grid grid-rows-3 grid-flow-col gap-4">   
              <div className="row-span-3">
                <div className="inline-flex flex-row px-3 space-x-2 rounded-xl p-3">
                  <div className="outline-none bg-uiColor-violet-1 text-4 font-light px-[50px] py-[10px] rounded-xl">
                      Оформление сотрудника
                  </div> 
                </div>                 
                <label>
                  <b className="flex font-regular text-3">
                    ФИО
                  </b>
                  <div className="relative">
                    <input
                      className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>
                </label>
              <label>
                <b className="flex font-regular text-3">
                  Дата рождения
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="_._.____г."
                  />
                </div>
              </label> 
              <label>
                <b className="flex font-regular text-3">
                  Адрес проживания
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="Адрес"
                  />
                </div>
              </label> 
              <label>
                <b className="flex font-regular text-3">
                  Телефон
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="+7(__)__-__-__"
                  />
                </div>
              </label>
              <div className="inline-flex flex-row px-3 space-x-2 rounded-xl p-3">
                <div className="outline-none bg-uiColor-violet-1 text-4 font-light px-[50px] py-[10px] rounded-xl">
                    Данные для платформы
                </div>
              </div>
              <label>
                <b className="flex font-regular text-3">
                  Логин
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="Логин"
                  />
                </div>
              </label>  
              <label>
                <b className="flex font-regular text-3">
                  Пароль
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="Пароль"
                  />
                </div>
              </label> 
              <label>
                <b className="flex font-regular text-3">
                  Должность
                </b>
                <div className="relative">
                  <input
                    className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[10px] outline-none bg-transparent focus:border-[#339AF0]"
                    placeholder="Должность"
                  />
                </div>
              </label>                          
            </div>         
            <div className="col-span-2">
              <img src={Resume} alt='Resume'/>
                Загрузить резюме(pdf)
            </div>  
            <div>
                <button className="outline-none items-center bg-uiColor-violet-1 text-4 font-light px-[50px] py-[10px] rounded-xl">
                  Создать аккаунт
                </button>
            </div>            
          </div>            
      </div> 
  );
};
