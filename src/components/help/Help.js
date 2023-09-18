import React from 'react'
import styles from './Help.module.css'
import ellipse from './Ellipse 7.png'
import pana from './pana.png'
import dan from './Group 54.png'
import nil from './Group 55.png'
import line from './Line 5.png'


function Help() {
    return (
        <section id='contact' className={"text-center " + styles.sec}>
            <div className={"container shadow-lg"}>
                <div className={"d-flex flex-column"}>
                    <h1 className={styles.h1}>Need Help!</h1>
                    <img className={styles.line} src={line} alt="" />
                    <p className={styles.p}>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.</p>
                    <img className={styles.pana} src={pana} alt="" />
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <img className={styles.img1} src={dan} alt="" />
                            <img className={styles.img2} src={nil} alt="" />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <input className={styles.inp} type="text" placeholder='Name' />
                            <input className={styles.inp} type="text" placeholder='Number' />
                            <input className={styles.inp} type="text" placeholder='How can i help you' />
                            <input className={styles.inp4} type="text" placeholder='How can i help you' />
                        </div>
                    </div>
                    <button className={'btn ' + styles.button}> <img className={styles.ellipse} src={ellipse} alt="" /> Click to send →</button>
                </div>
            </div>
        </section>
    )
}

export default Help