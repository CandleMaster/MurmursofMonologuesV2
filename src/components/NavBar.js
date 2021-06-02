import React from 'react';
import "../css/global.scss"

export default function NavBar() {
    return (
        <nav className="nav-bar">   
            <ul className="expand">LATEST</ul>
            <ul className="expand">POEMS</ul>
            <ul className="expand"> ESSAY SERIES
                <li>SHITTS & GIGGLES</li>
                <li>SHANGHAI SHENANEGANS</li>
                <li>BOOK REVIEW</li>
            </ul>
        </nav>
    )
}
