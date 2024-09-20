import css from './result.module.scss'
interface ResultProps {

    title: string,
    description: string,
    font: string;
}

export default function Result({ title, description , font }: ResultProps) {
    return (
        <div className={css.card} style={{ fontFamily: font }}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.description}>{description}</p>
        </div>
    );
}