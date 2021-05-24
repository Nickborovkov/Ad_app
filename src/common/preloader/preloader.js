import React from 'react'
import classes from './preloader.module.css'

let Preloader = () => {
    return (
        <div>
            <p className = {classes.preloader}>Loading...</p>
        </div>
    )
}

export default Preloader