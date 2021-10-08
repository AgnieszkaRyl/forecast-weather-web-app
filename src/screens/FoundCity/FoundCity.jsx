import React, {useEffect, useState} from 'react';
import * as styles from './FoundCity.module.scss'
import {Link, useParams} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Loading from "../Loading/Loading";

const buildQuery= query => {
    const path = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid=c372af09d6ed7cb1e42609edc177199e'
    return path
}

const getImagePath = imageId =>{
    const path =  "https://openweathermap.org/img/wn/"+imageId+"@2x.png"
    return path
}

export default function FoundCity(){
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(()=>{
        const path =buildQuery(id);
        fetch(path)
            .then((res)=>res.json())
            .then((data)=>{setCurrentWeather( data);
            });
    }, [setCurrentWeather]);

    const { id } = useParams();

    if (!currentWeather){
        return <Loading/>
    }

    if(!currentWeather.main){
        return <NotFound/>
    }


    return(
        <div className={styles.background}>
            <div className={styles.tile}>
                <div className={styles.row}>
                    {/*<div className={styles.photoContainer}>*/}
                    {/*    tutaj coś jest*/}
                    {/*</div>*/}
                    <div className={styles.text}>
                        <div className={styles.row}>
                            <h1>City: {id}</h1>
                            <img src={getImagePath(currentWeather.weather[0].icon)} width={150} height={150}/>
                        </div>
                        <p>Temperature: {currentWeather.main.temp} Farenheit</p>
                        <p>Wind-chill factor: {currentWeather.main.feels_like} Farenheit</p>
                        <p>Description: {currentWeather.weather[0].description}</p>
                        <p>Pressure: {currentWeather.main.pressure}hPa</p>
                        <p>humidity: {currentWeather.main.humidity}%</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <Link to='/'>
                        <button className={styles.button}>Come back</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}