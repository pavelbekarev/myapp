import SiteInfo from "#widgets/SiteInfo";
import "../style.scss"

export function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <SiteInfo />
                <div className="copyright">
                    <p className="copyright__text">© 2026 AURORA PARK</p>
                    <p className="copyright__text">Все права защищены</p>
                </div>
            </div>
        </footer>
    )
}