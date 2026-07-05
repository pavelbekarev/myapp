import { useMask } from "@react-input/mask";
import { contactFormConfig } from "../model/config";
import { useContactForm } from "../model/useContactForm";
import "../style.scss"
import "@daypicker/react/style.css";
import CustomDayPicker from "#shared/ui/CustomDayPicker";

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
                        item.type === 'textarea' ?
                        <textarea
                            key={index}
                            className="contactForm__input"
                            onChange={handleChange}
                            id={item.id}
                            name={item.id}
                            placeholder={item.placeholder}
                        /> :
                        item.type === 'tel' ? 
                        <input
                            ref={phoneRef}
                            onChange={handleChange}
                            className="contactForm__input"
                            id={item.id}
                            name={item.id}
                            placeholder={item.placeholder}
                            type="tel"
                        />
                        :
                        item.type === 'date' ? 
                        <CustomDayPicker
                            handleChange={handleDateChange}
                            selectedDate={formData.date}
                        />
                        :
                        <input
                            onChange={handleChange}
                            className="contactForm__input"
                            key={index}
                            id={item.id}
                            name={item.id}
                            placeholder={item.placeholder}
                            type={item.type}
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
