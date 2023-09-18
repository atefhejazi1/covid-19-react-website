import React from 'react'
import styles from './Footer.module.css'
import rectangle from './Rectangle 27.png'

function Footer() {
  return (
    <div className='container'>
        <div className={styles.footer}>
            <p className={styles.p1}>© 2021, Design & Developed by Atik Gohel  </p>
            <p className={styles.p2}>↑ Back to top</p>
        </div>
        <img className={styles.img} src={rectangle} alt="" />
    </div>
  )
}

export default Footer