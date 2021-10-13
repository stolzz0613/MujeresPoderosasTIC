import login from '../styles/login.module.scss'

function Login({ isVisible }) {
    return (
        isVisible && <div className={login.container}>
            <p class={login.title}>Inicio de sesión</p>
            <div class='input-group'>
                <span class='input-group-append'>
                    <span class='input-group-text'>
                        <i class='bi bi-person-fill'></i>
                    </span>
                </span>
                <input class='form-control border-right-0' placeholder='Usuario' />
            </div>
            <div class='input-group'>
                <span class='input-group-append'>
                    <span class='input-group-text'>
                        <i class='bi bi-lock-fill'></i>
                    </span>
                </span>
                <input class='form-control border-right-0' type='password' placeholder='Contraseña'/>
            </div>
            <button class={login.submit}>Ingresar</button>
        </div>
    )
}

export default Login

