import whoWeAre from '../styles/whoWeAre.module.scss'

function WhoWeAre() {
    return (
        <div className={whoWeAre.container}>
            <h1>¿Quiénes Somos?</h1>
            <div className={whoWeAre.container_text}>
                <div className={whoWeAre.secondary_title}>
                    <h2>Una Comunidad Social Colombiana que impacta la vida de las mujeres</h2>
                </div>
                <div className={whoWeAre.text}>
                    <p className={whoWeAre.text_title}>
                        Este es un proyecto para mujeres que quieran ampliar las oportunidades de desarrollo empresarial, personal y laboral. Para mujeres sin cualificación en programación y sus diferentes escenarios de aplicación, a fin de que puedan mejorar sus condiciones de vida​.
                    </p>
                    <p>
                    Ser la web de referencia para mujeres mayores de 30 años que se inician en la programación facilitando el acceso a recursos, herramientas e información en los diferentes segmentos de este sector. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre