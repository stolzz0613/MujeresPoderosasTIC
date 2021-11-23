import navBar from '../styles/navBar.module.scss'
import whoWeAre from '../styles/whoWeAre.module.scss'
import team from '../styles/team.module.scss'
import carousel from '../styles/carousel.module.scss'
import Link from 'next/link'

import Router from 'next/router'
import { useState } from 'react'

const NavBar = () => {

    const handleScroll = (name) => {
        const element = document.querySelector('.' + name)
        if (element) {
            const height = element.offsetTop - 100
            window.scrollTo(0, height)
        } else {
            Router.push('/')
        }
    }

    return (
        <>
            <div className={navBar.topBar}>
                <a href='#' onClick={(e) => {e.preventDefault(); handleScroll(whoWeAre.container)}}>¿Quiénes somos?</a>
                <a href='#' onClick={(e) => {e.preventDefault(); handleScroll(carousel.container)}}>Destacados</a>
                <a href='#' onClick={(e) => {e.preventDefault(); handleScroll(team.container)}}>Equipo de trabajo</a>
                <Link href='/news'>
                    <a href='#'>Informate</a>
                </Link>
                <Link href='/community'>
                    <a href='#'>Comunidad</a>
                </Link>
            </div>
        </>

    )
}

export default NavBar;