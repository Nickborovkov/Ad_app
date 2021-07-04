import React from "react";
import styles from './preloaderSmall.module.css'
import { BsGear } from 'react-icons/bs';

let PreloaderSmall = () => {
    return <div className={styles.preloaderHolder}>
        <p className={styles.preloaderSmall}><BsGear /></p>
    </div>
}

export default PreloaderSmall