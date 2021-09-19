import navBar from '../styles/navBar.module.scss';
import Link from 'next/link';


const NavBar = () => {
    return (
        <div className={navBar.container}>
            <div className={navBar.topBar}>
                <Link href='/'>
                    <a>¿Quiénes somos?</a>
                </Link>
                <Link href='/'>
                    <a>Destacados</a>
                </Link>
                <Link href='/'>
                    <a>Equipo de trabajo</a>
                </Link>
                <Link href='/'>
                    <a>Informate</a>
                </Link>

            </div>
        </div>

    )
}

export default NavBar;

