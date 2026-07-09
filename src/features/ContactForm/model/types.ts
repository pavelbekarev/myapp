export interface ContactField {
  id: keyof ContactFormPayload;
  label: string;
  placeholder: string;
  type: "text" | "textarea" | "tel" | "email" | "date";
}

export interface ContactFormPayload {
  name: string;
  phone: string;
  date: Date | undefined;
  comment: string;
}

export interface ContactFieldProps {
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  field: ContactField;
  value: string;
  onDateChange: (date: Date | undefined) => void;
  selectedDate: Date | undefined;
  phoneRef: React.Ref<HTMLInputElement>;
}

export type FormErrors = Partial<Record<keyof ContactFormPayload, string>>;
