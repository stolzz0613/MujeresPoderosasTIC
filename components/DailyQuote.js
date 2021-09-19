import { useEffect, useState } from 'react'
import dailyQuote from '../styles/dailyQuote.module.scss';

function DailyQuote() {

    const [quote, setquote] = useState({})

    const quotes = [
        {
            text: '"Usted no puede esperar construir un mundo mejor sin mejorar a las personas.Cada uno de nosotros debe trabajar para su propia mejora."',
            author: '-Marie Curie'
        },
        {
            text: '"Para liberarse, la mujer debe sentirse libre, no para rivalizar con los hombres, sino libres en sus capacidades y personalidad."',
            author: '-Indira Ghandi'
        },
        {
            text: '"La vida es corta: sonríele a quien llora, ignora a quien te critica, y sé feliz con quien te importa."',
            author: '-Marilyn Monroe'
        },
        {
            text: '"No podemos dejar que las percepciones limitadas de los demás terminen definiéndonos"',
            author: '-Virginia Satir'
        },
        {
            text: '"No vemos las cosas como son realmente, sino que más bien las vemos como somos nosotros"',
            author: '-Anaïs Nin'
        },
        {
            text: '"Son nuestras decisiones las que muestras quiénes somos realmente, más que nuestras habilidades"',
            author: '-J. K. Rowling'
        }
    ]

    useEffect(() => {
        let index = Math.floor(Math.random() *  quotes.length);
        setquote(quotes[index])
    }, [])

    return(
        <div className={dailyQuote.container}>
            <p>
                {quote.text}
            </p>
            <span>{quote.author}</span>
        </div>
    )
}

export default DailyQuote