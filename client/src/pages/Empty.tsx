import { FC } from "react";

import { jason } from "data/citatnik";

export const Empty: FC = () => {
  let random_q = jason[Math.floor(Math.random() * jason.length)];

  return (
    <div className="flex flex-col items-center justify-center w-[450px] mx-auto h-full text-[24px]">
      Здесь, пока, ничего нет.
      <br />
      Но когда-нибудь здесь будет что то "Величественное". <br />
      Ведь как сказал великий философ современности.
      <q className="py-4">{random_q}</q>
      <cite>Jason Statham</cite>
    </div>
  );
};
