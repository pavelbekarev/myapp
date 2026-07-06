import CustomDayPicker from "#shared/ui/CustomDayPicker";
import type { ContactFieldProps } from "../model/types";

export function ContactField({field, onChange, onDateChange, phoneRef, selectedDate}: ContactFieldProps ) {
    switch (field.type) {
        case 'textarea':
            return (
                <textarea
                    className="contactForm__input"
                    onChange={onChange}
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
                    name={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                />
            )
    }
}