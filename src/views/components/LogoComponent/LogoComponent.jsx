import './LogoComponent.scss'
import LogoSrc from '/Logo.svg?url'
import { Link } from 'react-router-dom'

export default function LogoComponent() {

    return (
        <div className="logo">
            <Link to="/" className="logo__link">
                <img src={LogoSrc} alt="Логотип" className='logo__img' />
            </Link>

        </div>

    )
}