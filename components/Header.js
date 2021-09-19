import { useState } from 'react'
import header from '../styles/header.module.scss'
import Link from 'next/link'
import Login from './Login'

function Header() {

    const [isVisible, setisVisible] = useState(false)

    const openLogin = () =>{
        setisVisible(!isVisible)
    }

    return (
        <div className={header.container}>
            <Link href='/'>
                <div className={header.nameContainer}>
                    <img className={header.logo} src='https://i.imgur.com/BE3YfRF.png' />
                    <h1>Mujeres Poderosas</h1>
                </div>
            </Link>
            <a id={header.title_login} onClick={openLogin} >Ingreso Admin</a>
            <Login isVisible={isVisible}/>
        </div>
    )
}

export default Header;

