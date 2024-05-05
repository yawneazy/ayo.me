import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" class Name="my-home">AY.OLSON</a>
        <ul>
            <li>
            <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <a href="/Work">Work</a>
            </li>
            <li>
                <a href="/Play">Play</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
        </ul>
    </nav>
}