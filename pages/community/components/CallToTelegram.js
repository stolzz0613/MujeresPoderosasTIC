import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import callToTelegram from '../../../styles/callToTelegram.module.scss'

export default function CallToTelegram() {
    const [screenWidth, setscreenWidth] = useState();

    useEffect(() => {
        setscreenWidth(screen?.width);
    }, []);

    return (
        <div className={callToTelegram.container}>
            <div style={{ overflow: "hidden" }}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#E9E0FF', width: '157%', height: 250, transform: 'rotate(180deg) scaleX(-1)' }}
                >
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
            </div>
            <div className={callToTelegram.content}>
                <h1>!Haz parte de nuestra comunidad en Telegram!</h1>
                <a href='https://t.me/joinchat/ga0oWIwc6kQ2OTFh'>Quiero unirme</a>
            </div>
            <div style={{ overflow: screenWidth < 450 ? 'hidden' : 'visible'}}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    id='svgBottom'
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        fill: '#E9E0FF',
                        width: '157%',
                        height: 250,
                        transform: 'scaleX(-1)',
                        marginLeft: screenWidth > 450 ? '-700px' : '-200px'
                    }}
                >
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
            </div>
        </div>
    )
}
