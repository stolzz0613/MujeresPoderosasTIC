import React from 'react';

import community from '../../styles/community.module.scss';
import RadialBar from './components/charts/RadialGraph';
import RadarGraph from './components/charts/RadarGraph';
import WomenList from './components/WomenList';
import CallToTelegram from './components/CallToTelegram';

export default function index() {

    return (
        <div>
            <div className={community.containerImg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <h1 className={community.title}>Comunidad</h1>
            <div className={community.containerGraphs}>
                <RadialBar />
                <RadarGraph />
            </div>
            <h1 className={community.title}>
                Mujer Inspiradora
            </h1>
            <WomenList />
            <div style={{marginBottom:'60px'}}>
                <CallToTelegram />
            </div>
        </div>
    )
}
