import Logo from "#shared/ui/Logo";
import { Link } from "react-router-dom";
import "../style.scss"
import { useBurger } from "#features/BurgerMenu/model/useBurger";
import BurgerMenu from "#features/BurgerMenu";
import { useEffect, useRef } from "react";

export function SiteInfo() {
    const { close, isOpen, toggle } = useBurger();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                close();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [close]);

    return (
        <>
            <Logo />
            <BurgerMenu
                isOpen={isOpen}
                toggle={toggle}
            />
            <nav ref={menuRef} className={`siteInfo__nav ${
                isOpen ? "siteInfo__nav--open" : ""
            }`}>
                <ul className="siteInfo__list">
                    <li className="siteInfo__listItem">
                        <a href="#aboutProject" className="siteInfo__link">
                            О клубе
                        </a>
                    </li>
                    <li className="siteInfo__listItem">
                        <Link to={"/residence"} className="siteInfo__link">
                            Проживание
                        </Link>
                    </li>
                    <li className="siteInfo__listItem">
                        <Link to={"/"} className="siteInfo__link">
                            SPA
                        </Link>
                    </li>
                    <li className="siteInfo__listItem">
                        <a href="#projectFactory" className="siteInfo__link">
                            Инфраструктура
                        </a>
                    </li>
                    <li className="siteInfo__listItem">
                        <Link to={"https://термывода.рф/"} className="siteInfo__link">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}