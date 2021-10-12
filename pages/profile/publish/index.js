import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import publish from '../../../styles/publish_form.module.scss'
import Swal from 'sweetalert2'
import axios from 'axios'

function index() {
    const router = useRouter()
    const params = router.query
    const [title, settitle] = useState('');
    const [ownNews, setownNews] = useState([]);
    const [id, setid] = useState('');
    const [dataForm, setdataForm] = useState({
        titulo: '',
        linkNoticia: '',
        linkImagen: '',
        categoria: '',
        estado: ''
    })

    useEffect(() => {
        params?.type &&
            settitle(params.type === 'create' ? 'Crear publicación' : 'Editar o eliminar publicación')
    }, [params])

    useEffect(() => {
        getOwnNews()
    }, [])

    useEffect(() => {
        let selected = ownNews.filter( e => e._id === id)[0]
        selected && setdataForm({
            titulo: selected.titulo,
            linkNoticia: selected.linkNoticia,
            linkImagen: selected.linkImagen,
            categoria: selected.categoria,
            estado: selected.estado
        })
    }, [id])

    const sendForm = () => {
        if (
            dataForm.titulo === '' ||
            dataForm.linkNoticia === '' ||
            dataForm.linkImagen === '' ||
            dataForm.categoria === '' ||
            dataForm.estado === ''
        ) {
            Swal.fire(
                'Error',
                'Te falta completar uno o varios campos',
                'error'
            )
        } else {
            axios.post( 'https://nameless-brushlands-25377.herokuapp.com/api/publicaciones', dataForm)
                .then( e => {
                    Swal.fire(
                        'Well!',
                        'La publicacion fue creada',
                        'success'
                    )
                })
                .catch( e => {
                    Swal.fire(
                        'Upss!',
                        'Hubo un error, intenta de nuevo',
                        'error'
                    )
                })
        }
    }

    const handleDelete = () => {
        id.length === 0
            ? Swal.fire(
                'Upss!',
                'Debes seleccionar una publicacion para eliminar',
                'error'
            )
            : axios.delete( 'https://nameless-brushlands-25377.herokuapp.com/api/publicaciones/' + id)
            .then(() => {
                getOwnNews()
                setdataForm({
                    titulo: '',
                    linkNoticia: '',
                    linkImagen: '',
                    categoria: '',
                    estado: ''
                })
                setid('')
            })
            .then(() => {
                Swal.fire(
                    'Well!',
                    'La publicacion fue eliminada',
                    'success'
                )
            })
            .catch(() => {
                Swal.fire(
                    'Upss!',
                    'Hubo un error, intenta de nuevo',
                    'error'
                )
            })
    }

    const handleEdit = () => {
        if (
            dataForm.titulo === '' ||
            dataForm.linkNoticia === '' ||
            dataForm.linkImagen === '' ||
            dataForm.categoria === '' ||
            dataForm.estado === '' ||
            id === ''
        ) {
            Swal.fire(
                'Error',
                'Te falta completar uno o varios campos',
                'error'
            )
        } else {
            axios.put('https://nameless-brushlands-25377.herokuapp.com/api/publicaciones/' + id, dataForm)
                .then(() => {
                    getOwnNews()
                })
                .then(() => {
                    Swal.fire(
                        'Well!',
                        'La publicacion fue Editada',
                        'success'
                    )
                })
                .catch(() => {
                    Swal.fire(
                        'Upss!',
                        'Hubo un error, intenta de nuevo',
                        'error'
                    )
                })
        }
    }

    const getOwnNews = () => {
        axios.get('https://nameless-brushlands-25377.herokuapp.com/api/publicaciones')
            .then((r) => {console.log(r.data); setownNews(r.data)})
    }

    return (
        <div className={publish.container}>
            <h1>{title}</h1>
            <div className={publish.form}>

                <label>Titulo</label>
                <input value={dataForm.titulo} onChange={(e) => setdataForm({...dataForm, titulo: e.target.value})}/>

                <label>Categoria</label>
                <select value={dataForm.categoria} onChange={(e) => setdataForm({...dataForm, categoria: e.target.value})}>
                    <option selected>Selecciona una categoria</option>
                    <option value="noticia">Noticias del sector</option>
                    <option value="web">Web recomendadas</option>
                    <option value="cyb">Convocatorias y becas</option>
                </select>
                {
                    params?.type === 'edit' &&
                        <><label>Publicación</label>
                            <select value={id} onChange={e => setid(e.target.value)}>
                                <option selected>Selecciona una publicacion</option>
                                {
                                    ownNews.map( e =>
                                        <option value={e._id}>
                                            {e.titulo}
                                        </option>
                                    )
                                }
                            </select>
                        </>
                }

                <label>Link</label>
                <input value={dataForm.linkNoticia} onChange={(e) => setdataForm({...dataForm, linkNoticia: e.target.value})}/>

                <label>Imagen</label>
                <input value={dataForm.linkImagen} onChange={(e) => setdataForm({...dataForm, linkImagen: e.target.value})}/>

                <label>Estado</label>
                <select value={dataForm.estado} onChange={(e) => setdataForm({...dataForm, estado: e.target.value})}>
                    <option selected>Selecciona un estado</option>
                    <option value="guardada">Guardada</option>
                    <option value="publicada">Publicada</option>
                </select>
            </div>
            <div className={publish.button}>
                {
                    params?.type === 'edit'
                        ? <>
                            <button className={publish.button_delete} onClick={handleDelete}>Eliminar</button>
                            <button className={publish.button_edit} onClick={handleEdit}>Editar</button>
                        </>
                        : <button className={publish.button_submit} onClick={sendForm}>Publicar</button>
                }
            </div>
        </div>
    )
}

export default index