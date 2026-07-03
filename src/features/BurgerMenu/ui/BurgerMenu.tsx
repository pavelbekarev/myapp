import "../style.scss";

interface Props {
    isOpen: boolean;
    toggle: () => void;
}

export function BurgerMenu({ isOpen, toggle }: Props) {
    return (
        <button
            className={`burger ${isOpen ? "burger--active" : ""}`}
            onClick={toggle}
            aria-label="Открыть меню"
        >
            <span />
            <span />
            <span />
        </button>
    )
}