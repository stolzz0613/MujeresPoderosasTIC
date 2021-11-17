import React from 'react'
import carouselCard from '../styles/carouselCard.module.scss';

export default function CarouselCard({ data }) {
    const { title, link, image } = data;
    return (
        <a className={carouselCard.link} href={link} target='_blank'>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    height: '300px',
                    borderRadius: '10px',
                }}
            >
                <div className={carouselCard.container}>
                    {title.substring(0, 70) + '...'}
                </div>
            </div>
        </a>
    )
}
