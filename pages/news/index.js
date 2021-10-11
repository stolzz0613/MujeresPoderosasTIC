import axios from 'axios'
import React, { useEffect, useState } from 'react'
import newsStyle from '../../styles/news.module.scss'
import Card from './Card'

function index() {
    const [news, setnews] = useState([])
    const [ownNews, setownNews] = useState([])

    useEffect(() => {
        axios.get('https://nameless-brushlands-25377.herokuapp.com/api/items/noticias')
            .then((r) => setnews(r.data[0].news.slice(0,10)))

        axios.get('https://nameless-brushlands-25377.herokuapp.com/api/publicaciones')
            .then((r) => setownNews(r.data))
    }, [])

    return (
        <div className={newsStyle.container}>
            <h1>Noticias</h1>
            <div className={newsStyle.container_cards}>
                {news.map((e,i) => <Card key={i} data={e}/>)}
            </div>
            <h1>Publicaciones</h1>
            <div className={newsStyle.container_cards}>
                {ownNews.map((e,i) => <Card key={i} data={e}/>)}
            </div>
        </div>
    )
}

export default index;