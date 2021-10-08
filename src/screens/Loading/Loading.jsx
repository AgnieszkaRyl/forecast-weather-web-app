import React from 'react';
import LoadingImg from "./../../images/loading.png"
import * as styles from "./Loading.module.scss"


export default function Loading(){
    return(
        <div>
            <h1 className={styles.title}>Loading, please wait</h1>
            <div className={styles.centring}>
                <img src={LoadingImg} />
            </div>
        </div>
    )
}