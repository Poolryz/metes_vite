import './HeaderComponent.scss'
import LogoComponent from '../LogoComponent/LogoComponent.jsx'
import NavComponent from '../NavComponent/NavComponent.jsx'
import ContactComponent from '../ContactComponent/ContactComponent.jsx'


export default function HeaderComponent() {

    return (
        <header className="header">
            <div className="header__body">
                <div className="header__content _container">
                    <LogoComponent/>
                    <NavComponent/>
                    <ContactComponent/>
                </div>
            </div>
        </header>
    )
}