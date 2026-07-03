import type { ContactFormPayload } from "./types";

export function validation(formData: ContactFormPayload) {
  console.debug(formData);
  const validateArray = Object.values(formData).filter((item) => item === "");
  console.debug(validateArray.length);

  return validateArray.length === 0;
}
