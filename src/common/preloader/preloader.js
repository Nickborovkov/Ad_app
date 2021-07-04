import React from "react";
import styles from './preloader.module.css'
import { BsGear } from 'react-icons/bs';

let Preloader = () => {
    return <div className={styles.preloaderHolder}>
        <p className={styles.preloader}><BsGear /></p>
    </div>
}

export default Preloader