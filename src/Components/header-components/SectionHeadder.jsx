export default function SectionHeader({ title, description, style }) {

    return (
        <header className={style}>
            <h2>{title}</h2>
            <p>{description}</p>
        </header>
    )
}