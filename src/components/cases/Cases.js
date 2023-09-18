import React from 'react'
import india from './india.png'
import styles from './Cases.module.css'

function Cases() {
  return (
    <section className={"text-center "+styles.sec}>
        <div className={"container"}>
            
            <div className="row shadow-lg">
                <div className="col-lg-3">
                    <h3 className={styles.h3}>Total Cases</h3>
                    <h1 className={styles.h1_1}>492,667</h1>
                    <p className={styles.p}>+2,584</p>
                </div>
                <div className="col-lg-3">
                    <h3 className={styles.h3}>Active Cases</h3>
                    <h1 className={styles.h1_2}>492,667</h1>
                    <p className={styles.p}>18% from total cases</p>
                </div>
                <div className="col-lg-3">
                    <h3 className={styles.h3}>Recovered</h3>
                    <h1 className={styles.h1_3}>492,667</h1>
                    <p className={styles.p}>55% from total cases</p>
                </div>
                <div className="col-lg-3">
                    <h3 className={styles.h3}>Deaths</h3>
                    <h1 className={styles.h1_4}>492,667</h1>
                    <p className={styles.p}>20% from total Cases</p>
                </div>
                <p className={styles.ind}> <img className={styles.indimg} src={india} alt="" /> India | Last update: April 04, 2020</p>
            </div>
        </div>
    </section>
  )
}

export default Cases