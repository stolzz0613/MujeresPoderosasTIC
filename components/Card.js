import React from 'react'
import news from '../styles/news.module.scss'

function Card({data}) {
    return (
        <div className={news.card} >
            <img className={news.img} src={data.image || data.linkImagen} class="card-img-top" alt="..." />
            <span className={news.tag}>{data.categoria || 'noticia'}</span>
            <div className={news.card_body}>
                <a target='_blank' href={data.link || data.linkNoticia} class="card-text">{data.title || data.titulo}</a>
                <p class="card-text">{data.date}</p>
            </div>
        </div>
    )
}

export default Card