import { InputMask } from "@react-input/mask";
import { contactFormConfig } from "../model/config";
import { useContactForm } from "../model/useContactForm";
import "../style.scss"
import "@daypicker/react/style.css";
import { DayPicker } from "@daypicker/react";
import CustomDayPicker from "#shared/ui/CustomDayPicker";

export function ContactForm() {
    const { formData, handleChange, handleSubmit, handleDateChange } = useContactForm();

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
                        <InputMask
                            onChange={handleChange}
                            className="contactForm__input"
                            mask="+7 (___) ___-__-__"
                            replacement={{ _: /\d/ }}
                            key={index}
                            id={item.id}
                            name={item.id}
                            placeholder={item.placeholder}
                            type={item.type}
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
