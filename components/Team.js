import team from '../styles/team.module.scss';
import DailyQuote from './DailyQuote';
import {useAppContext} from '../context/globalState'

function Team() {
    const store = useAppContext()
    const people = store.users.data

    return (
        <div id='team' className={team.container}>
            <h1>Equipo de Trabajo</h1>
            <div className={team.container_images}>
                {
                    people && people.map( person => (
                        <div className={team.container_image}>
                            <img src={person.image}/>
                            <div className={team.container2}>
                                <div className={team.icon}>
                                    <a target='_blank' href={person.linkedin}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a target='_blank'  href={person.github}>
                                        <i className="bi bi-github"></i>
                                    </a>
                                </div>
                                <div>
                                    <p>{person.name}</p>
                                    <p>{person.job}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <DailyQuote />
        </div>
    )
}

export default Team;