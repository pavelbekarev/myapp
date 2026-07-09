import BaseCard from "#shared/ui/BaseCard"
import ImageWithFallback from "#shared/ui/ImageWithFallback";
import defaultImg from "#assets/default-fallback-image.png"
import arrow from "#assets/arrow.svg"
import "../style.scss"
import type { Project } from "#entities/Project";
import { Link } from "react-router-dom";

export function ProjectCard({ data }: { data: Project }) {
    const cardImg = data.img ?? defaultImg;

    return (
        <>
            <BaseCard classNames={['projectCard']}>
                <ImageWithFallback
                    src={cardImg}
                    alt="Карточка проекта"
                    fallbackSrc={cardImg}
                    className={['projectCard__img']}
                />
                <div className="projectCard__info">
                    <h3 className="projectCard__title">{ data.title }</h3>
                    <p className="projectCard__descr">{ data.description }</p>
                </div>

                {
                    data.img &&
                    <Link to={'/residence'} className="projectCard__button">
                        <span className="projectCard__button-text">Перейти</span>
                        <img loading="lazy" className="projectCard__button-img" src={arrow} alt="Стрелка вправо" />
                    </Link>
                }
                
            </BaseCard>
        </>
    )
}