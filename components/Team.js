import team from '../styles/team.module.scss';
import DailyQuote from './DailyQuote';

function Team() {

    const people = [
        {
            name: 'JOHANA MAHUTH',
            job: 'Product Owner',
            img: 'https://i.imgur.com/935c8yF.jpg',
            social: {
                linkedin: 'https://www.linkedin.com/in/johanna-mahuth/',
                github: 'https://github.com/JMahuth'
            }
        },
        {
            name: 'ANGELICA ARRUBLA',
            job: 'Developer Team',
            img: 'https://i.imgur.com/onZUTAx.jpg',
            social: {
                linkedin: 'https://www.linkedin.com/in/angelica-arrubla-hernandez-99516a1b5/',
                github: 'https://github.com/AngeArrubla'
            }
        },
        {
            name: 'ANDRES BUSTOS',
            job: 'Scrum Master',
            img: 'https://i.imgur.com/B4bCsyn.jpg',
            social: {
                linkedin: 'https://www.facebook.com/andresbc0613',
                github: 'https://github.com/stolzz0613'
            }
        },
        {
            name: 'SANDRA CASTELBLANCO',
            job: 'Developer Team',
            img: 'https://i.imgur.com/NnXz0zb.jpg',
            social: {
                linkedin: 'https://www.linkedin.com/in/sandra-yelitza-castelblanco-celis-0195b5212/',
                github: 'https://github.com/YelitzaCC'
            }
        },
        {
            name: 'TATIANA GARCIA',
            job: 'Developer Team',
            img: 'https://i.imgur.com/g5hXvXj.jpg',
            social: {
                linkedin: 'https://www.linkedin.com/in/tatiana-garc%C3%ADa-grajales-55a509159',
                github: 'https://github.com/Tatianag2'
            }
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
                                    <a href={person.social.linkedin}>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href={person.social.github}>
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