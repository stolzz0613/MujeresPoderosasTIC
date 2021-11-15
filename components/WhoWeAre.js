import whoWeAre from '../styles/whoWeAre.module.scss'

function WhoWeAre() {
    return (
        <div className={whoWeAre.generalContainer}>
            <div className={whoWeAre.containerImg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className={whoWeAre.containerWho}>
                <h1>¿Quiénes Somos?</h1>
                <div className={whoWeAre.container_text}>
                    
                    <div className={whoWeAre.text}>
                        <p className={whoWeAre.text_title}>
                            Mujeres poderosas somos hacedoras de cambios sociales, culturales, económicos y aportamos al desarrollo de latinoamerica con ciencia y tecnología.
                        </p>
                        <p>
                            Es un honor para nosotras ser parte de este movimiento que promueve la diversidad, inclusión y equidad en la Economía Digital. Aportamos nuestro tiempo, talento y posibilidades para hacer que este sea un mundo mejor.
                        </p>
                    </div>
                    <div className={whoWeAre.secondary_title}>
                        <h2>Una Comunidad Social Colombiana que impacta la vida de las mujeres</h2>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9E0FF" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <i class="bi bi-suit-heart-fill"></i>
        </div>
    )
}

export default WhoWeAre