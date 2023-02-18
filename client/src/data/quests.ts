export interface QuestsProps {
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  isCompleted: boolean;
}

export const quests: Array<QuestsProps> = [
  {
    createdAt: new Date(),
    description: "Описание",
    isCompleted: false,
    price: 5,
    title: "Название",
  },
  {
    createdAt: new Date(),
    description: "Описание",
    isCompleted: false,
    price: 5,
    title: "Название",
  },
  {
    createdAt: new Date(),
    description: "Описание",
    isCompleted: false,
    price: 5,
    title: "Название",
  },
];
