import "../style.scss"

export function BaseCard({ children, classNames }: { children?: React.ReactNode; classNames?: string[] }) {
    return (
        <div className={`${classNames ? classNames.join(" ") : ''} baseCard`}>
            { children }
        </div>
    )
}