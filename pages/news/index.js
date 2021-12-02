import axios from 'axios'
import React, { useEffect, useState } from 'react'
import newsStyle from '../../styles/news.module.scss'
import Card from '../../components/Card'

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
            <div className={newsStyle.containerImg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <h1>Informate</h1>
            <div className={newsStyle.container_cards}>
                {news.map((e,i) => <Card key={i} data={e}/>)}
            </div>
            <div className={newsStyle.container_cards}>
                {ownNews.map((e,i) => <Card key={i} data={e}/>)}
            </div>
        </div>
    )
}

export default index;