import type { ContactField } from "./types";

export const contactFormConfig: ContactField[] = [
  {
    id: "name",
    label: "Имя",
    placeholder: "Введите имя",
    type: "text",
  },
  {
    id: "phone",
    label: "Телефон",
    placeholder: "+7 (___) ___-__-__",
    type: "tel",
  },
  {
    id: "comment",
    label: "Комментарий",
    placeholder: "Ваш комментарий",
    type: "textarea",
  },
  {
    id: "date",
    label: "Дата",
    placeholder: "Укажите дату заезда",
    type: "date",
  },
];
