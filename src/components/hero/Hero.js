import React from 'react'
import styles from './Hero.module.css'
import warning from './Group 24.png'
import vairos from './Frame 9.png'
import doctor from './amico.png'

function Hero() {
    return (
        <section className={styles.sec}>
            <div className='container'>
                <div className='row'>
                    <div className={'col-lg-6 col-md-6 col-sm-12' +styles.text}>
                        <h3 className={styles.h3}><img src={warning} alt="" />COVID-19 ALERT</h3>
                        <h1 className={styles.h1}>Together we fight <br /> COVID-19</h1>
                        <p className={styles.p}>Seque empowers you to get more done with intense focus and zero interruptions.Seque empowers you to get more done with intense focus and zero interruptions.</p>
                        <button className={'btn '+styles.button}>Let us help</button>
                        <img className={styles.vairos} src={vairos} alt="" />
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'+styles.image}>
                        <img className={styles.img} src={doctor} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero