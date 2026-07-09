import { useState } from "react";
import { sendContactData } from "../api/sendContactData";
import type { ContactFormPayload, FormErrors } from "./types";
import { ContactFormValidation } from "./validation";
import * as Yup from "yup";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: "",
    phone: "",
    date: new Date(),
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ContactFormValidation.validate(formData, {
        abortEarly: false,
      });
      await sendContactData(formData);
      setFormData({
        name: "",
        phone: "",
        date: new Date(),
        comment: "",
      });

      setErrors({});
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const formErrors: FormErrors = {};

        e.inner.forEach((err) => {
          if (err.path) {
            formErrors[err.path as keyof ContactFormPayload] = err.message;
          }
        });

        setErrors(formErrors);
      } else throw new Error("Не удалось отправить заявку", { cause: e });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date)
      setFormData((prev) => ({
        ...prev,
        date: date,
      }));
  };

  return {
    formData,
    handleSubmit,
    handleChange,
    handleDateChange,
    errors,
  };
}
