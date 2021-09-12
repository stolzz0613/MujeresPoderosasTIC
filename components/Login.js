import Link from 'next/link'
import { useState } from 'react';
import { useAppContext } from '../context/globalState';
import login from '../actions/login';

function Login() {

    const { userLogged } = useAppContext();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword]  = useState('');
    const { setUserLogged, setLoading } = useAppContext();

    function handleLogin() {
        login( email, password )
            .then( res => {
                setLoading(false)
                if (res.data.user.logged) {
                    localStorage.setItem('logged', true)
                    setUserLogged({
                        name: res.data.user.name,
                        email: res.data.user.email
                    })
                    setEmail('')
                    setPassword('')
                    alert('Bienvenido')
                } else {
                    alert ('Contraseña incorrecta')
                }
            })
            .catch( err => {
                alert ('Contraseña incorrecta')
            })
    }

    if ( !userLogged ) {
        return (
            <>
                <input
                    onChange = { e => setEmail(e.target.value) }
                />
                <input
                    onChange = { e => setPassword(e.target.value) }
                />
                <button onClick={ () => handleLogin() }>LOGIN...</button>
            </>
        )
    } else {
        return (
            <>
                <h1>BIENVENIDO { userLogged.name }</h1>
                <Link href='./'>
                    <a>IR AL HOME</a>
                </Link>
            </>
        )
    }
}

export default Login
