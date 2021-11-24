import whoWeAre from '../styles/whoWeAre.module.scss'

function WhoWeAre() {
    return (
        <div id='whoweare' className={whoWeAre.generalContainer}>
            <div className={whoWeAre.containerImg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className={whoWeAre.containerWho}>
                <h1>¿Quiénes Somos?</h1>
                <div className={whoWeAre.container_text}>
                    <div className={whoWeAre.text}>
                        <p className={whoWeAre.text_title}>
                            Mujeres Poderosas Tic, inició con un grupo de estudio originado por la necesidad de entender en ritmos y lenguajes diferentes los conceptos de programación. inicialmente 4 mujeres, hoy mas de 100 con estabilidad regular en los encuentros.
                        </p>
                        <p>
                            Son mujeres con una mente curiosa de conocimiento en áreas STEAM en  ciencia y tecnología, con un alma dispuesta a ser transformada a través de una vida puesta al servicio de los demás.
                        </p>
                        <p>
                            Es un honor para nosotras ser parte de este movimiento que promueve la diversidad, inclusión y equidad en la Economía Digital. Aportamos nuestro tiempo, talento y posibilidades para hacer que este sea un mundo mejor.
                        </p>
                    </div>
                    <div className={whoWeAre.secondary_title}>
                        <h2>¡Una comunidad de mujeres de trasformar su vida!</h2>
                    </div>
                </div>
            </div>
            <div className={whoWeAre.containersvg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9E0FF" fillOpacity="1" d="M0,128L80,112C160,96,320,64,480,74.7C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
        </div>
    )
}

export default WhoWeAre