import SiteInfo from "#widgets/SiteInfo"
import "../style.scss"

export function Header() {
    return (
        <header className="header">
            <div className="container header__content">
                <SiteInfo />
            </div>
        </header>
    )
}
