import "../style.scss"

import ProjectFactory from "#widgets/ProjectFactory";

export function AboutProject() {
    return (
        <section id="aboutProject" className="aboutProject">
            <div className="container">
                <div className="aboutProject__infoContent">
                    <h2 className="aboutProject__title">
                        Мы создаем место
                        для отдыха, которое
                        вдохновляет 
                        <span className="aboutProject__title--accent"> формой, тишиной и сервисом</span>
                    </h2>
                    <p className="aboutProject__description">
                        AURORA PARK — это загородный клуб нового поколения, уникальное сочетание дизайнерской архитектуры, первозданной природы и внимательного сервиса. Каждый элемент продуман до мелочей, чтобы вы могли по-настоящему восстановить силы и почувствовать гармонию.
                    </p>
                </div>

                <ProjectFactory />
            </div>
        </section>
    );
}
