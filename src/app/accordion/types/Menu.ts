export type Menu = {
  name: string;
  active: boolean;
  submenu: { question: string; answer: string }[];
};
