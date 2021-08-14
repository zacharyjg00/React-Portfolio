import React from 'react';

export default function Navigation() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="/"
                    // This is a conditional (ternary) operator that checks to see if the current page is "About me"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="/portfolio"
                    // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={window.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="/contact"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="/resume"
                    // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={window.location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}