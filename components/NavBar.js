import navBar from '../styles/navBar.module.scss';
import whoWeAre from '../styles/whoWeAre.module.scss';
import highlights from '../styles/highlights.module.scss';


const NavBar = () => {

    const handleScroll = (name) => {
        window.scrollTo(0, document.querySelector('.' + name).offsetTop);
    }
    return (
        <div className={navBar.container}>
            <div className={navBar.topBar}>
                <a href='#' onClick={() => handleScroll(whoWeAre.container)}>¿Quiénes somos?</a>
                <a href='#' onClick={() => handleScroll(highlights.container)}>Destacados</a>
                <a href='#' onClick={() => handleScroll(team.container)}>Equipo de trabajo</a>
                <a href='#' onClick={() => handleScroll(whoWeAre.container)}>Informate</a>
            </div>
        </div>

    )
}

export default NavBar;

