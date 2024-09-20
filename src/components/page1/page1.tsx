import css from './page1.module.scss'
import {Link} from "react-router-dom";
export default function Page1 (){
    return (
        <div className={css.info}>
            <div className={css.text_1}>
                <span className={css.text_main}>yo</span>
                <span className={css.text_back}>yo</span>
            </div>
            <div className={css.text_2}>
                <div className={css.text_2_info}>
                    <p className={css.text_2_small}>with special guests </p>
                    <p className={css.text_2_small}>schramms and customised</p>
                </div>
                <span className={css.text_main_2}>la</span>
                <span className={css.text_back_2}>la</span>
            </div>
            <div className={css.text_3}>
                <span className={css.text_main_3}>ten-</span>
                <span className={css.text_back_3}>ten-</span>
            </div>
            <div className={css.text_4}>
                <div className={css.text_4_info}>
                    <p className={css.text_4_small}>saturday / november 27 1993</p>
                    <p className={css.text_4_small}>at cdgb and  omfug</p>
                    <br/>
                    <br/>
                    <p className={css.text_4_small}>315 bowery at bleecker st / nyc</p>
                    <Link to='/search'><button className={css.button}>Search app</button></Link>
                </div>
                <span className={css.text_main_4}>go</span>
                <span className={css.text_back_4}>go</span>
            </div>

        </div>
    )
}