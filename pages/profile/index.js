import React from 'react'
import profile from '../../styles/profile.module.scss'
import {useAppContext} from '../../context/globalState'

function index()  {
    const store = useAppContext()

    return (
        <div className={profile.container}>
            { !store.userLogged.logged
                ? <h1>Acceso Restringido</h1>
                : <>
                    <div className={profile.photo}>
                        <img src={store.userLogged.image}/>
                    </div>
                    <div className={profile.title}>
                        <h1>Datos personales</h1>
                    </div>
                    <div className={profile.info}>
                        <div className={profile.data}>
                            <div style={{display: 'flex'}}>
                                <i class="bi bi-person-circle" style={{marginRight: '20px'}}></i>
                                <p>Nombre y apellido: <span>{store.userLogged.name}</span></p>
                            </div>
                            <i class="bi bi-pen-fill" style={{alignSelf: 'flex-end', color: '#C13B77'}}></i>
                        </div>
                        <div className={profile.data}>
                            <div style={{display: 'flex'}}>
                                <i class="bi bi-card-list" style={{marginRight: '20px'}}></i>
                                <p>Identificación <span>1032473848</span></p>
                            </div>
                            <i class="bi bi-pen-fill" style={{alignSelf: 'flex-end', color: '#C13B77'}}></i>
                        </div>
                        <div className={profile.data}>
                            <div style={{display: 'flex'}}>
                                <i class="bi bi-mailbox" style={{marginRight: '20px'}}></i>
                                <p>Correo electronico <span>{store.userLogged.email}</span></p>
                            </div>
                            <i class="bi bi-pen-fill" style={{alignSelf: 'flex-end', color: '#C13B77'}}></i>
                        </div>
                    </div>
                    <div className={profile.title}>
                        <h1>Administración de publicaciones</h1>
                    </div>
                    <div className={profile.buttons}>
                        <button className={profile.submit}>Crear publicación</button>
                        <button className={profile.submit}>Editar o eliminar publicación</button>
                    </div>
                  </>
            }
        </div>
    )
}

export default index