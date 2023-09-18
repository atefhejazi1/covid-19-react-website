import React from 'react'
import styles from './Symptoms.module.css'
import doctor from './amico.png'
import line from './Line 5.png'
import vairos from './Frame 5.png'
import vairus from './Frame 10.png'


function Symptoms() {
    return (
        <section id='symptoms' className={styles.sec}>
            <div className={'container'}>
                <div className={"d-flex flex-column text-center"}>
                    <h1 className={styles.h1}>Symptoms</h1>
                    <img className={styles.line} src={line} alt="" />
                    <p className={styles.p}>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                    <img className={styles.doctor} src={doctor} alt="" />
                    <img className={styles.vairos} src={vairos} alt="" />
                    <img className={styles.vairus} src={vairus} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Symptoms