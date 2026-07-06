import { useState } from "react";
import { sendContactData } from "../api/sendContactData";
import type { ContactFormPayload } from "./types";
import { validation } from "./validation";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: "",
    phone: "",
    date: new Date(),
    comment: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validation(formData)) {
      alert("Форма не валидна");
      return;
    }

    try {
      const res = await sendContactData(formData);
      console.debug(res);
    } catch {
      throw new Error("Не удалось отправить заявку");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    console.debug(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }));
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
  };
}
