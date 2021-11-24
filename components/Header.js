import { useState } from 'react'
import {useAppContext} from '../context/globalState'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
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
                    <i id={header.icon_login}className="bi bi-person-circle" onClick={openLogin}></i>
                    <Login isVisible={isVisible}/>
                </>
                : <Dropdown as={ButtonGroup}>
                    <style type="text/css">
                        {`
                            .btn-main {
                                background-color: #C13B77;
                                color: white;
                                font-size: 10px;
                                padding:3px 10px 3px 10px;
                                border-radius: 0px;
                            }
                        `}
                    </style>
                    <Button variant='main'>{store.userLogged.name}</Button>

                    <Dropdown.Toggle variant='main' id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item >
                            <Link href='/profile'>
                                <a id={header.title_login}>Ver perfil</a>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <a onClick={handleLogout} id={header.title_login}>Cerrar sesión</a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
        </div>
    )
}

export default Header;

