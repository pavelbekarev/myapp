import { useMask } from "@react-input/mask";
import { contactFormConfig } from "../model/config";
import { useContactForm } from "../model/useContactForm";
import "../style.scss"
import "@daypicker/react/style.css";
import { ContactField } from "./ContactField";

export function ContactForm() {
    const { formData, handleChange, handleSubmit, handleDateChange, errors } = useContactForm();

    const phoneRef = useMask({
        mask: "+7 (___) ___-__-__",
        replacement: { _: /\d/ },
    });

    return (
        <form onSubmit={handleSubmit} className="contactForm">
            <div className="contactForm__inputs">
                {
                    contactFormConfig.map((item) => (
                        <div key={item.id} className="contactForm__item">
                            <ContactField
                                field={item}
                                value={
                                        item.type === "date"
                                            ? ""
                                            : String(formData[item.id] ?? "")
                                    }
                                onChange={handleChange}
                                onDateChange={handleDateChange}
                                phoneRef={phoneRef}
                                selectedDate={formData.date}
                            />
                            {errors[item.id] && <span className="contactForm__error">{errors[item.id]}</span>}
                        </div>
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
