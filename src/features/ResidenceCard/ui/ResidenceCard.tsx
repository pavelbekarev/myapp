import type { Residence } from "#entities/Residence";
import BaseCard from "#shared/ui/BaseCard";
import ImageWithFallback from "#shared/ui/ImageWithFallback";
import defaultImg from "#assets/default-fallback-image.png"
import { Link } from "react-router-dom";
import arrow from "#assets/darkArrow.svg"
import "../style.scss"

export function ResidenceCard({ data }: { data: Residence }) {
    const cardImg = data.img || defaultImg

    return (
        <BaseCard classNames={['residenceCard']}>
            <ImageWithFallback
                src={cardImg}
                alt="Проживание"
                fallbackSrc={cardImg}
                className={['residenceCard__img']}
            />
            <div className="residenceCard__info">
                <h3 className="residenceCard__title">{ data.title }</h3>
                <p className="residenceCard__descr">{ data.description }</p>
                {
                    data.price && 
                    <p className="residenceCard__price">от { data.price }₽ / ночь</p>
                }
                {
                    data.img &&
                    <Link to={'/residence'} className="residenceCard__button">
                        <span className="residenceCard__button-text">Перейти</span>
                        <img loading="lazy" className="residenceCard__button-img" src={arrow} alt="Стрелка вправо" />
                    </Link>
                }
            </div>
        </BaseCard>
    )
}