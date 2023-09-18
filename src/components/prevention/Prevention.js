import React from 'react'
import styles from './Prevention.module.css'
import line from './Line 5.png'
import amico from './amico.png'
import amico1 from './amico1.png'
import amico2 from './amico2.png'
function Prevention() {
    return (
        <section id='prevention' className={styles.sec}>
            <div className={'container'}>
                <div className={"d-flex flex-column"}>
                    <div className={"text-center " + styles.content}>
                        <h1 className={styles.h1}>Prevention</h1>
                        <img className={styles.line} src={line} alt="" />
                        <p className={styles.p}>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Floow advice provided by your local health authority.</p>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-4 col-md-4 col-sm-12"}>
                            <div class={"card shadow-lg "+styles.cards}>
                                <img className={"card-img-top " +styles.card_image} src={amico} alt="..." />
                                <div class="card-body">
                                    <h5 class={"card-title text-center "+styles.h5}>Wear a mask</h5>
                                    <p class={"card-text "+styles.card_p}>Masks can help prevent the spread of the virus from the person wearing the mask to others.</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12"}>
                            <div class={"card shadow-lg "+styles.cards}>
                                <img className={"card-img-top " +styles.card_image} src={amico1} alt="..." />
                                <div class="card-body">
                                    <h5 class={"card-title text-center "+styles.h51}>Wash your hands often</h5>
                                    <p class={"card-text "+styles.card_p}>Clean your hands with soop and water, or alcohol-based hand sanitizer.</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-12"}>
                            <div class={"card shadow-lg "+styles.cards}>
                                <img className={"card-img-top " +styles.card_image} src={amico2} alt="..." />
                                <div class="card-body">
                                    <h5 class={"card-title text-center "+styles.h52}>Physical distancing</h5>
                                    <p class={"card-text "+styles.card_p}>Maintain a safe distance especially from anyone who is coughinf or sneezing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prevention