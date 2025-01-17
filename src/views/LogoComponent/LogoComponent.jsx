import './LogoComponent.scss'
import LogoSrc from '/Logo.svg?url'

export default function LogoComponent() {

    return (
        <>
            <img src={LogoSrc} alt="Логотип" className='logo-icon' />
        </>
    )
}