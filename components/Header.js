import { useState } from 'react'
import {useAppContext} from '../context/globalState'
import header from '../styles/header.module.scss'
import Link from 'next/link'
import Login from './Login'

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
            logged: false
        })
        console.log(store)
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
                    <a id={header.title_login} onClick={openLogin} >Ingreso Admin</a>
                    <Login isVisible={isVisible}/>
                  </>
                : <>
                    <a onClick={handleLogout} id={header.title_login}>Cerrar sesión</a>
                    <Link href='/profile'>
                        <a id={header.title_login}>Ver perfil</a>
                    </Link>
                  </>
            }
        </div>
    )
}

export default Header;

