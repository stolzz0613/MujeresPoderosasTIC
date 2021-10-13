import { useState } from 'react'
import {useAppContext} from '../context/globalState'
import header from '../styles/header.module.scss'
import Link from 'next/link'
import Login from './Login'
import Router from 'next/router'

function Header() {
    const store = useAppContext()
    const [isVisible, setisVisible] = useState(false)

    const openLogin = () => {
        setisVisible(!isVisible)
    }

    const handleLogout = () => {
        store.setUserLogged({
            email: '',
            name: '',
            cc: '',
            logged: false
        })
        localStorage.removeItem('userLogged_MP')
        Router.push('/')

    }

    return (
        <div className={header.container}>
            <Link href='/'>
                <div className={header.nameContainer}>
                    <img className={header.logo} src='https://i.imgur.com/BE3YfRF.png' />
                    <h1>Mujeres Poderosas</h1>
                </div>
            </Link>
            { !store.userLogged.logged
                ? <>
                    <i id={header.icon_login}class="bi bi-person-circle" onClick={openLogin}></i>
                    <a id={header.title_login} onClick={openLogin} >Ingreso Admin</a>
                    <Login isVisible={isVisible}/>
                  </>
                : <>
                    <Link href='/profile'>
                        <a id={header.title_login}>{store.userLogged.name}</a>
                    </Link>
                    <a id={header.icon_logout}class="bi bi-box-arrow-right" onClick={handleLogout}></a>
                  </>
            }
        </div>
    )
}

export default Header;

