import "../style.scss"

export function MainBanner() {
    return (
        <section className="mainBanner">
            <div className="container">
                <h1 className="mainBanner__title">
                    Аврора
                    <br/> 
                    <span className="mainBanner__title--accent">Парк</span>
                </h1>

                <p className="mainBanner__description">
                    Эко-курорт нового поколения,
                    где природа встречается<br/>
                    с архитектурой будущего
                </p>

                <div className="mainBanner__info">
                    <div className="mainBanner__advantages">
                        <div className="mainBanner__advantage">
                            <span className="mainBanner__advantage-title mainBanner__advantage-title--l">24</span>
                            <p className="mainBanner__advantage-title mainBanner__advantage-title--m">виллы</p>
                        </div>
                        <div className="mainBanner__advantage">
                            <span className="mainBanner__advantage-title mainBanner__advantage-title--l">40%</span>
                            <p className="mainBanner__advantage-title mainBanner__advantage-title--m">территории - приватные зоны</p>
                        </div>
                        <div className="mainBanner__advantage">
                            <span className="mainBanner__advantage-title mainBanner__advantage-title--l">SPA</span>
                            <p className="mainBanner__advantage-title mainBanner__advantage-title--m">и термы</p>
                        </div>
                    </div>
                    <div className="mainBanner__info-description">
                        <div className="mainBanner__info-icon"></div>
                        <span className="mainBanner__info-text">Экология, комфорт и технологии в гармонии с природой</span>
                    </div>
                </div>
            </div>
        </section>
    )
}