import { Link } from "react-router-dom"
import "./NavItem.scss"

export default function NavItem({ active, title, linkHref }) {
    return (
        <li className="nav__item">
            <Link to={linkHref} className={active ? "nav__link nav__link__active" : "nav__link"}>
                {title}
            </Link>
        </li >
    )
}
// 