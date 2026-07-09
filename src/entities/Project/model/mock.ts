import type { Project } from "#entities/Project";
import project1 from "#assets/project1.webp";
import project2 from "#assets/project2.webp";

export const dataArr: Project[] = [
  {
    id: 1,
    title: "Панорамные виллы",
    description: "С видом на озеро и горы, Приватность и абсолютный комфорт",
    img: project1,
  },
  {
    id: 2,
    title: "Купольные домики",
    description:
      "Уединение среди природы под звездным небом. Идеально для романтики",
    img: project2,
  },
  {
    id: 3,
    title: "Wellness-пространтсво",
    description: "SPA, термы, массажи и ритуалы восстановление для тела и души",
    img: project2,
  },
];
