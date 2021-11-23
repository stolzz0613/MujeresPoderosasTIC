import React from 'react'
import womenCard from '../../../styles/womenCard.module.scss'

export default function WomenCard({data}) {

    return (
        <div className={womenCard.container}>
            <img src={data?.img}/>
            <span className={womenCard.name}>{data?.name}</span>
            <span className={womenCard.job}>{data?.job}</span>
        </div>
    )
}
