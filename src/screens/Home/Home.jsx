import React, {useState} from 'react';
import * as styles from './Home.module.scss'
import {Link} from "react-router-dom";
import WeatherIcon from "./../../images/weatherIcon.png"

export default function Home(){
    const [linkInput, setLinkInput]=useState("");

    return(
        <div>
            <div className={styles.stripe}>
                <div className={styles.title}>
                    TWOJA POGODA
                </div>
            </div>
            <div>
                <div className={styles.row}>
                    <div className={styles.container}>
                        <img src={WeatherIcon}/>
                    </div>
                </div>
                <div className={styles.description}>
                    Wpisz miasto którego szukasz aby dowiedzieć się jaka jest tam pogoda
                </div>

                <div className={styles.row}>
                <input placeholder="Miasto"
                       className={styles.placeholder}
                       value={linkInput}
                       onInput={e => setLinkInput(e.target.value)}/>
                <Link to={'/found/'+linkInput}>
                    <button className={styles.button}>Szukaj</button>
                </Link>
                </div>
            </div>
        </div>
    )
}