import CustomDayPicker from "#shared/ui/CustomDayPicker";
import type { ContactFieldProps } from "../model/types";

export function ContactField({ field, onChange, onDateChange, phoneRef, selectedDate, value }: ContactFieldProps ) {
    switch (field.type) {
        case 'textarea':
            return (
                <textarea
                    className="contactForm__input"
                    onChange={onChange}
                    value={value}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                />
            )

        case 'tel':
            return (
                <input
                    ref={phoneRef}
                    onChange={onChange}
                    value={value}
                    className="contactForm__input"
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    type="tel"
                />
            )

        case "date":
            return (
                <CustomDayPicker
                    handleChange={onDateChange}
                    selectedDate={selectedDate}
                />
            )

        default:
            return (
                <input
                    onChange={onChange}
                    className="contactForm__input"
                    id={field.id}
                    value={value}
                    name={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                />
            )
    }
}