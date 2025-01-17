import "./NavList.scss"
import NavItem from "../NavItem/NavItem.jsx"


export default function NavList() {
    let arr = [
        { title: "Профнастил", active: true, linkHref: "/profnastil", key: "1" },
        { title: "Металочерепица", active: false, linkHref: "/metalocherepitsa", key: "2" },
        { title: "Бронилента", active: false, linkHref: "/bronilent", key: "3" },
        { title: "Оцинкованный металлопрокат", linkHref: "/metaloprokat", active: false, key: "4" },
        { title: "Сертификация", active: false, linkHref: "/sertificat", key: "5" },
        { title: "Контакты", active: false, linkHref: "/contact", key: "6" },
    ]
    return (
        <ul className="nav__list">
            {arr.map((e) => {
                return (
                    <NavItem key={e.key} title={e.title} active={e.active} linkHref={e.linkHref} />
                )
            })}
        </ul>
    )
}