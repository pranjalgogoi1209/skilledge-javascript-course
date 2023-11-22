import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className='navbar'>
                <div>
                    <h1 className='logo'>PRANJAL GOGOI</h1>
                </div>
                <div className='pages'>
                    <ul>
                        <a href="/">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                    </ul>
                </div>
                <div className='register'>
                    <ul>
                        <a href="#">LogIn</a>
                        <a href="#">Register</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
