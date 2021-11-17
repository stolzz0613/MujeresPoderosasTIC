import { useEffect, useState } from 'react'
import {useAppContext} from '../context/globalState'

import dailyQuote from '../styles/dailyQuote.module.scss';

function DailyQuote() {
    const store = useAppContext()
    const stored_quotes = store.quotes[0]
    const [quote, setquote] = useState({})

    useEffect(() => {
        if (stored_quotes) {
            setquote(stored_quotes[Math.floor(Math.random() *  Object.keys(stored_quotes).length)])
        }
    }, [stored_quotes])

    return(
        <div className={dailyQuote.container}>
            {stored_quotes
                && <>
                    <p> {quote.frase} </p>
                    <span>{quote.autor}</span>
                </>
            }
        </div>
    )
}

export default DailyQuote