import { FC } from "react";
import { nanoid } from "nanoid";
import { ChatIcon } from "shared/icon";
export const Team: FC = () => {
  let teamTable = {
    head: ["Имя сотрудника", "Должность", "E-mail", "Чат"],
    persons: [
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
      {
        name: "Кит Енот Волкович",
        position: "UX/UI дизайнер",
        email: "nas2kita@gmail.com",
      },
    ],
  };

  return (
    <div className="overflow-x-auto w-full max-w-[792px] mx-auto">
      <div className="px-6 py-5 rounded-xl mb-2 flex flex-row justify-between items-center">
        {teamTable.head.map((i) => (
          <div className="inline" key={nanoid()}>
            {i}
          </div>
        ))}
      </div>
      <div className="">
        {teamTable.persons.map(({ email, name, position }) => (
          <div
            key={nanoid()}
            className="odd:bg-uiColor-violet-1 even:bg-uiColor-green-1 px-6 py-5 rounded-xl mb-2 flex flex-row justify-between items-center"
          >
            <div className="rounded-l-xl">{name}</div>
            <div className="">{position}</div>
            <div className="">{email}</div>
            <div className="rounded-r-xl">
              <ChatIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// <div className="table w-full max-w-[792px] ">
//   <div className="table-header-group">
//     <div className="table-row">
//       {teamTable.head.map((i) => (
//         <div className="table-cell py-[30px]" key={nanoid()}>
//           {i}
//         </div>
//       ))}
//     </div>
//   </div>
//   <div className="table-row-group">
//     {teamTable.persons.map(({ email, name, position }) => (
//       <div
//         key={nanoid()}
//         className="table-row odd:bg-uiColor-violet-1 even:bg-uiColor-green-1 px-6 py-5 rounded-xl mb-2"
//       >
//         <div className="table-cell pl-6 py-6 rounded-l-xl">{name}</div>
//         <div className="table-cell">{position}</div>
//         <div className="table-cell">{email}</div>
//         <div className="table-cell pr-6 rounded-r-xl relative top-[30%]">
//           <ChatIcon />
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
