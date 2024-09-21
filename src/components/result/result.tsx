import css from './result.module.scss'
interface ResultProps {

    title: string,
    description: string,
    font: string;
    key:number
}

export default function Result({ title, description , font ,key}: ResultProps) {
    return (
        <div key= {key} className={css.card} style={{ fontFamily: font }}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.description}>{description}</p>
        </div>
    );
}