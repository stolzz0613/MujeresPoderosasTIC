import navBar from '../styles/navBar.module.scss'
import whoWeAre from '../styles/whoWeAre.module.scss'
import team from '../styles/team.module.scss'
import Link from 'next/link'

import Router from 'next/router'

const NavBar = () => {

    const handleScroll = (name) => {
        if (document.querySelector('.' + name)) {
            window.scrollTo(0, document.querySelector('.' + name).offsetTop)
        } else {
            Router.push('/')
        }
    }
    return (
        <div className={navBar.container}>
            <div className={navBar.topBar}>
                <a href='#' onClick={() => handleScroll(whoWeAre.container)}>¿Quiénes somos?</a>
                <a href='#' onClick={() => handleScroll(highlights.container)}>Destacados</a>
                <a href='#' onClick={() => handleScroll(team.container)}>Equipo de trabajo</a>
                <Link href='/news'>
                    <a href='#'>Informate</a>
                </Link>
            </div>
        </div>

    )
}

export default NavBar;


