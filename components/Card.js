import React from 'react'
import news from '../styles/news.module.scss'

function Card({data}) {
    return (
        <div class="card" style={{width: '300px', height: '300px'}}>
            <img src={data.image || data.linkImagen} class="card-img-top" alt="..." />
            <div class="card-body">
                <a target='_blank' href={data.link || data.linkNoticia} class="card-text">{data.title || data.titulo}</a>
                <p class="card-text">{data.date}</p>
                <span className={news.tag}>{data.categoria || 'noticia'}</span>
            </div>
        </div>
    )
}

export default Card
