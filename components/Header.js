import header from '../styles/header.module.scss';
import Link from 'next/link'

function Header() {
    return (
        <div className={header.container}>
            <Link href='/'>
                <div className={header.nameContainer}>
                    <img className={header.logo} src='https://i.imgur.com/BE3YfRF.png' />
                    <h1>Mujeres Poderosas</h1>
                </div>
            </Link>
            <Link href='/login'>
                <a>Ingreso Admin</a>
            </Link>         
        </div>
    )
}

export default Header;

