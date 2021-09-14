import navBar from '../styles/navBar.module.scss';
import Link from 'next/link';


const NavBar = () => {
    return (
        <div className={navBar.container}>
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
            <Link href='/'>
                <a className={navBar.admin}>Ingreso Admin</a>
            </Link>
        </div>
    )
}

export default NavBar;
