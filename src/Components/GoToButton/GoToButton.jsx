import React from 'react';
import * as styles from "./GoToButton.module.scss";
import {Link} from "react-router-dom";

export default function GoToButton({buttonWidth, title, linkTo, ...buttonProps}){
    return(
        <Link to={linkTo}>
            <button className={styles.button} style={{width:buttonWidth}} {...buttonProps}>{title}</button>
        </Link>
    )
}