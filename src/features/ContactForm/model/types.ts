export interface ContactField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "textarea" | "tel" | "email" | "date";
}

export interface ContactFormPayload {
  name: string;
  phone: string;
  date: Date;
  comment: string;
}
