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
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead className="py-[30px]">
          <tr>
            {teamTable.head.map((i) => (
              <th key={nanoid()}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-uiColor-white rounded-lg">
          {teamTable.persons.map(({ email, name, position }) => (
            <tr>
              <td>{name}</td>
              <td>{position}</td>
              <td>{email}</td>
              <td>
                <ChatIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
