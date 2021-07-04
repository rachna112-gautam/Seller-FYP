import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Header(props) {
    const [sellerInfo, setSellerInfo] = useState(props.sellerInfo)

    useEffect(() => {
        setSellerInfo(props.sellerInfo);
    }, [props.sellerInfo])
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
            <div className="signin-btn d-flex align-items-center">

                {sellerInfo?.isExist ? <div className="user-avatar">
                    <a href="/profile"><i class="far fa-user"></i></a>
                </div> : ""}
                <a className="ml-3 d-block" href="http://localhost:3001/">Buyer?</a>
            </div>
        </header>
    )
}
