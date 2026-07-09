import type { ContactFormPayload } from "./types";
import * as Yup from "yup";

export function validation(formData: ContactFormPayload) {
  const validateArray = Object.values(formData).filter((item) => item === "");

  return validateArray.length === 0;
}

export const ContactFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(5, "Название должно быть длиннее 5 символов")
    .required("Поле необходимо заполнить"),
  phone: Yup.string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона",
    )
    .required("Поле необходимо заполнить"),
  date: Yup.date().required("Выберите дату заезда"),
  comment: Yup.string().required("Введите Ваши пожелания"),
});
