import './HeaderComponent.scss'
import LogoComponent from '../LogoComponent/LogoComponent.jsx'


export default function HeaderComponent() {

    return (
        <header className="header">
            <div className="header__body">
                <div className="header__content _container">
                    <LogoComponent/>
                </div>
            </div>
        </header>
    )
}