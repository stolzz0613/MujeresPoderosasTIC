import login from '../styles/login.module.scss'
import {useAppContext} from '../context/globalState'
import { useState } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2'

function Login({ isVisible }) {
    const store = useAppContext()
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')

    const handleLogin = () => {
        axios.post( 'https://nameless-brushlands-25377.herokuapp.com/api/auth', {
            email: user,
            password: password
        } )
            .then( res => {
                let data = res.data.user
                if ( data.logged ) {
                    store.setUserLogged({
                        email: data.email,
                        name: data.name,
                        image: data.image,
                        logged: true
                    })

                    Swal.fire(
                        'Bienvenido!',
                        'Iniciaste sesión',
                        'success'
                    )
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Usuario o Contraseña incorrecto',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            })
            .catch( res => {
                console.log(res)
            })
    }

    return (
        isVisible && <div className={login.container}>
            <p class={login.title}>Inicio de sesión</p>
            <div class='input-group'>
                <span class='input-group-append'>
                    <span class='input-group-text'>
                        <i class='bi bi-person-fill'></i>
                    </span>
                </span>
                <input onChange={e => {setuser(e.target.value)}} class='form-control border-right-0' placeholder='Usuario' />
            </div>
            <div class='input-group'>
                <span class='input-group-append'>
                    <span class='input-group-text'>
                        <i class='bi bi-lock-fill'></i>
                    </span>
                </span>
                <input onChange={e => {setpassword(e.target.value)}} class='form-control border-right-0' type='password' placeholder='Contraseña'/>
            </div>
            <button class={login.submit} onClick={handleLogin}>{store.loading ? 'Cargando...' : 'Ingresar'}</button>
        </div>
    )
}

export default Login
