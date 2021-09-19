import team from '../styles/team.module.scss';

function Team() {
    return (
        <div className={team.container}>
            <h1>Equipo de Trabajo</h1>
            <div className={team.container_images}>
                <div className={team.container_image}>
                        <img src='https://i.imgur.com/935c8yF.jpg'/>
                    <div className={team.container2}>
                        <div className={team.icon}>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                        </div>
                        <div>
                            <p>JOHANNA MAHUTH</p>
                            <p>Product owner </p>
                        </div>
                    </div>
                </div>

                <div className={team.container_image}>
                        <img src='https://i.imgur.com/onZUTAx.jpg'/>
                    <div className={team.container2}>
                        <div className={team.icon}>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                        </div>
                        <div>
                            <p>ANGELICA ARRUBLA</p>
                            <p>Developer team </p>
                        </div>
                    </div>
                </div>

                <div className={team.container_image}>
                        <img src='https://i.imgur.com/B4bCsyn.jpg'/>
                    <div className={team.container2}>
                        <div className={team.icon}>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                        </div>
                        <div>
                            <p>ANDRES BUSTOS</p>
                            <p>Scrum Master</p>
                        </div>  
                    </div>
                </div>

                <div className={team.container_image}>
                        <img src='https://i.imgur.com/NnXz0zb.jpg'/>
                    <div className={team.container2}>
                        <div className={team.icon}>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                        </div>
                        <div>
                            <p>SANDRA CASTELBLANCO</p>
                            <p>Developer team</p>
                        </div>
                    </div>
                </div>

                <div className={team.container_image}>
                        <img src='https://i.imgur.com/g5hXvXj.jpg'/>
                    <div className={team.container2}>
                        <div className={team.icon}>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                        </div>
                        <div>
                            <p>TATIANA GARCÍA</p>
                            <p>Developer team</p>
                        </div>  
                    </div>
                </div>  
            </div>          
        </div>
    )
}

export default Team;