import React from 'react'
import WomenCard from './WomenCard';
import womenList from '../../../styles/womenList.module.scss';

export default function WomenList() {
    const data = [
        {
            name: 'Daniela Rojas',
            job: 'Administradora de Empresas',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1otNPHl-hNwYT2b-8SDnMqC9uZ0yAERNCA&usqp=CAU'
        },
        {
            name: 'Daniela Rojas',
            job: 'Administradora de Empresas',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1otNPHl-hNwYT2b-8SDnMqC9uZ0yAERNCA&usqp=CAU'
        },
        {
            name: 'Daniela Rojas',
            job: 'Administradora de Empresas',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1otNPHl-hNwYT2b-8SDnMqC9uZ0yAERNCA&usqp=CAU'
        },
        {
            name: 'Daniela Rojas',
            job: 'Administradora de Empresas',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1otNPHl-hNwYT2b-8SDnMqC9uZ0yAERNCA&usqp=CAU'
        }
    ];
    return (
        <div className={womenList.container}>
            {
                data.map(w => <WomenCard data={w}/>)
            }
        </div>
    )
}
