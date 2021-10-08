import React, {useState} from 'react';
import * as styles from './Home.module.scss'
import {Link} from "react-router-dom";
import WeatherIcon from "./../../images/weatherIcon.png"

export default function Home(){
    const [linkInput, setLinkInput]=useState("");

    return(
        <div>
            <div className={styles.stripe}>
                <div className={styles.row}>
                    <div className={styles.title}>
                        YOUR WEATHER
                    </div>
                    <div className={styles.container}>
                        <img src={WeatherIcon} alt="weather icon"/>
                    </div>
                </div>
            </div>

            <div >
                <div className={styles.row} style={{paddingTop:"40px"}}>
                    <img src= "https://openweathermap.org/img/wn/09d@2x.png" width={80} height={80} alt="icon"/>
                    <img src= "https://openweathermap.org/img/wn/04d@2x.png" width={80} height={80} alt="icon"/>
                    <img src= "https://openweathermap.org/img/wn/03d@2x.png" width={80} height={80} alt="icon"/>
                    <img src= "https://openweathermap.org/img/wn/02d@2x.png" width={80} height={80} alt="icon"/>
                    <img src= "https://openweathermap.org/img/wn/01d@2x.png" width={80} height={80} alt="icon"/>
                </div>
                <div className={styles.description}>
                    Type a city to find out what the weather is like
                </div>
                <div className={styles.row} style={{marginTop: "60px"}}>
                    <input placeholder="City"
                           className={styles.placeholder}
                           value={linkInput}
                           onInput={e => setLinkInput(e.target.value)}/>
                    <Link to={'/found/'+linkInput}>
                        <button className={styles.button}>Browse</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}