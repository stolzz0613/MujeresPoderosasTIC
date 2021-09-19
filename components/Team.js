import team from '../styles/team.module.scss';
import DailyQuote from './DailyQuote';

function Team() {

    const people = [
        {
            name: 'JOHANA MAHUTH',
            job: 'Product Owner',
            img: 'https://i.imgur.com/935c8yF.jpg',
            social: {
                github: 'http://google.com',
                linkedin: ''
            }
        },
        {
            name: 'ANGELICA ARRUBLA',
            job: 'Developer Team',
            img: 'https://i.imgur.com/onZUTAx.jpg'
        },
        {
            name: 'ANDRES BUSTOS',
            job: 'Scrum Master',
            img: 'https://i.imgur.com/B4bCsyn.jpg'
        },
        {
            name: 'SANDRA CASTELBLANCO',
            job: 'Developer Team',
            img: 'https://i.imgur.com/NnXz0zb.jpg'
        },
        {
            name: 'TATIANA GARCIA',
            job: 'Developer Team',
            img: 'https://i.imgur.com/g5hXvXj.jpg'
        },
    ]

    return (
        <div className={team.container}>
            <h1>Equipo de Trabajo</h1>
            <div className={team.container_images}>
                {
                    people.map( person => (
                        <div className={team.container_image}>
                            <img src={person.img}/>
                            <div className={team.container2}>
                                <div className={team.icon}>
                                    <a href={person?.social?.github}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <i className="bi bi-github"></i>
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