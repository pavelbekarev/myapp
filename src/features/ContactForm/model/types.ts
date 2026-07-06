export interface ContactField {
  id: string;
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
  onDateChange: (date: Date | undefined) => void;
  selectedDate: Date | undefined;
  phoneRef: React.Ref<HTMLInputElement>;
}
