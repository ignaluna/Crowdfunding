import Link from 'next/link'
import style from "../page.module.css"
const links = [{
    label: "Home",
    route: "/"
},
{
    label: "About",
    route: "/about"
},
{
    label: "Posts",
    route: "/posts"
}
]


export function Navigation() {
    return (
        <header>
            <nav >
                <ul className={style.navigation}>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link className={style.option} href={route}>
                                {label}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </header>
    )
}