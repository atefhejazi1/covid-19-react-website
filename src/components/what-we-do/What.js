import React from 'react'
import styles from './What.module.css'
import doctor from './amico.png'
import vairos from './Frame 7.png'
import vairus from './virus.png'
import ellipse from './Ellipse 7.png'
import line from './Line 5.png'


function What() {
    return (
        <section id='what' className={styles.sec}>
            <div className='container'>
                <div className='row'>
                    <div className={'col-lg-6 col-md-6 col-sm-12'+styles.image}>
                        <img className={styles.img} src={doctor} alt="" />
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 ' +styles.text}>
                        <h1 className={styles.h1}>What we do?</h1>
                        <img className={styles.line} src={line} alt="" />
                        <p className={styles.p}>Covid 19 positive or Pneumonitis patient will be treated at home as per doctor order by GNC certified nursing staff.</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> Facilities of blood sugar</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> B.P.  Measurement</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> Spo2 Measurement</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> Ryle's tube insertion</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> Catheterisation</p>
                        <p className={styles.p2}><img className={styles.vairus} src={vairus} alt="" /> Dressing facilities are available 24*7</p>
                        <button className={'btn '+styles.button}> <img className={styles.ellipse} src={ellipse} alt="" /> Contact Us →</button>
                        <img className={styles.vairos} src={vairos} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default What