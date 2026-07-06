import { useMask } from "@react-input/mask";
import { contactFormConfig } from "../model/config";
import { useContactForm } from "../model/useContactForm";
import "../style.scss"
import "@daypicker/react/style.css";
import { ContactField } from "./ContactField";

export function ContactForm() {
    const { formData, handleChange, handleSubmit, handleDateChange } = useContactForm();

    const phoneRef = useMask({
        mask: "+7 (___) ___-__-__",
        replacement: { _: /\d/ },
    });

    return (
        <form onSubmit={handleSubmit} className="contactForm">
            <div className="contactForm__inputs">
                {
                    contactFormConfig.map((item, index) => (
                        <ContactField
                            key={index}
                            field={item}
                            onChange={handleChange}
                            onDateChange={handleDateChange}
                            phoneRef={phoneRef}
                            selectedDate={formData.date}
                        />
                    ))
                }
            </div>
            <div className="contactForm__sendPart">
                <div className="contactForm__agreement">
                    <input id="agreement" type="checkbox" required />
                    <span className="contactForm__agreement-text">Я согласен на обработку персональных данных</span>
                </div>
                <button className="contactForm__submit" type="submit">Отправить</button>
            </div>
        </form>
    )
}
