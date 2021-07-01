import React from 'react'
import '../App.css'

export default function Header() {
    return (
        <header className="container p-3 heading">
            <div className="site-title">
                <a href="/">  <h1>DecMark</h1></a>


                <ul className="list">
                    <li>
                        <a href="/docs">Docs</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                </ul>
            </div>
            <div className="signin-btn">
                <a href="/signin">Buyer ?</a>
            </div>
        </header>
    )
}
