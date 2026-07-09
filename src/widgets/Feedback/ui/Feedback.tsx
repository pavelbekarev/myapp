import mail from "#assets/mail.svg"
import phone from "#assets/phone-call.svg"
import ContactForm from "#features/ContactForm"
import "../style.scss"

export function Feedback() {
    return (
        <section className="feedback">
            <div className="container feedback__content">
                <div className="feedback__contactsPart">
                    <h1 className="feedback__title">
                        Мы поможем<br/> организовать ваш идеальный отдых в <span className="feedback__title--accent">AURORA PARK</span>
                    </h1>
                    <div className="feedback__contacts">
                        <div className="feedback__contact">
                            <img src={phone} alt="Иконка телефона" aria-hidden />
                            <a href="tel: +7(495) 123-45-67" className="feedback__contact-text">
                                +7(495) 123-45-67
                            </a>
                        </div>
                        <div className="feedback__contact">
                            <img src={mail} alt="Иконка почты" aria-hidden />
                            <a href="mailto: info@aurorapark.ru" className="feedback__contact-text">
                                info@aurorapark.ru
                            </a>
                        </div>
                    </div>
                </div>
                <div className="feedback__formPart">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}