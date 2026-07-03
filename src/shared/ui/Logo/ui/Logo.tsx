import { Link } from "react-router-dom";
import "../style.scss"

export function Logo() {
    return (
        <div className="logo">
            <Link className="logo__logoLink" to={"/"}>
                <span className="logo__logoText logo__logoText--l">AURORA PARK</span>
                <p className="logo__logoText logo__logoText--m">загородный клуб</p>
            </Link>
        </div>
    )
}