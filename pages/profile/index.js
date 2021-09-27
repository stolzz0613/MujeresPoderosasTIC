import React from 'react'
import profile from '../../styles/profile.module.scss'
import {useAppContext} from '../../context/globalState'

import Swal from 'sweetalert2'
import axios from 'axios'

function index()  {
    const store = useAppContext()

    const handleEdit = async () => {
        const { value: name } = await Swal.fire({
            title: 'Ingresa tu nuevo nombre',
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes ingresar un nombre!'
                }
            }
        })
        if (name) {
            axios.put(
                'https://nameless-brushlands-25377.herokuapp.com/api/usuarios/' + store.userLogged.email,
                {name}
            ).then( res => {
                const newInfo = {
                    email: res.data.valor.email,
                    name: res.data.valor.name,
                    image: res.data.valor.image,
                    logged: true
                }

                Swal.fire(
                    'Good job!',
                    'Cambiaste tu nombre',
                    'success'
                )

                localStorage.setItem('userLogged_MP', JSON.stringify(newInfo))
                store.setUserLogged(newInfo)
            }).catch( res => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Intenta de nuevo',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
                console.log(res)
            })
        }
    }

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
                            <i onClick={handleEdit} class="bi bi-pen-fill" style={{alignSelf: 'flex-end', color: '#C13B77'}}></i>
                        </div>
                        <div className={profile.data}>
                            <div style={{display: 'flex'}}>
                                <i class="bi bi-card-list" style={{marginRight: '20px'}}></i>
                                <p>Identificación: <span>{store.userLogged.cc}</span></p>
                            </div>
                        </div>
                        <div className={profile.data}>
                            <div style={{display: 'flex'}}>
                                <i class="bi bi-mailbox" style={{marginRight: '20px'}}></i>
                                <p>Correo electronico: <span>{store.userLogged.email}</span></p>
                            </div>
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