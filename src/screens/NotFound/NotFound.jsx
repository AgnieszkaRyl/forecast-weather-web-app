import React, {useState} from 'react';
import * as styles from "./NotFound.module.scss";
import {Link} from "react-router-dom";
import Broken from "./../../images/broken.png"
import GoToButton from "../../Components/GoToButton/GoToButton";


export default function NotFound(){
    return(
        <div className={styles.vertical}>
            <div className={styles.center}>
                <h1>Sorry! We don't have such city!</h1>
            </div>
            <div className={styles.center}>
                <img src={Broken}/>
            </div>
            <div className={styles.center}>
                <GoToButton linkTo="/" buttonWidth={300} title="Come back!"/>
            </div>
        </div>
    )
}