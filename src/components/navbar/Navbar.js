import React from 'react'
import img from './Untitled design 1.png'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav className={"navbar navbar-expand-lg " + styles.nav}>
            <div class="container">
                <a class="navbar-brand" href="#"><img src={img} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a className={"nav-link " + styles.home} href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#what">What we do?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#prevention">Prevention</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#symptoms">Symptoms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar