import { api } from "#shared/api/axiosInstance";
import type { ContactFormPayload } from "../model/types";

export async function sendContactData(data: ContactFormPayload) {
  try {
    // TODO: раскомментировать и поменять endpoint, когда появится сервер
    // const response = await api.post("/makeAppointment", data);
    // return response;
    console.debug(data);

    return new Promise((resolve) => {
      setTimeout(() => {
        alert("Форма успешно отправлена");
      }, 700);
    });
  } catch {
    alert("Не удалось отправить форму");
    throw new Error("Не удалось отправить заявку на сервер");
  }
}
