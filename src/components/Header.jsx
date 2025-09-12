import '../stylings/header/header.css';
import image from '../images/llogo.jpeg';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    const hidenavlinks = location.pathname === "/projects";

    const [openlinks, setlinks] = useState(false);
    const [theme, settheme] = useState(() => {
        return sessionStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        sessionStorage.setItem("theme", theme);
    }, [theme]);

    const toggletheme = () => {
        settheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <div className='navigation'>

            <a href="/" className='head global-text'>
                <img src={image} alt='Llogo'></img>
                Likitha
            </a>

            {!hidenavlinks && (
                <div className={openlinks ? "nav-links active" : "nav-links"}>
                    <div className='nav-links-close-btn'>
                        <button className='btn' onClick={() => setlinks(false)}>X</button></div>
                    <a href='#home' onClick={() => setlinks(false)}>home</a>
                    <a href='#aboutme' onClick={() => setlinks(false)}>about</a>
                    <a href='#skills' onClick={() => setlinks(false)}>skills</a>
                    <a href='#projects' onClick={() => setlinks(false)}>projects</a>
                    <a href='#contactMe' onClick={() => setlinks(false)}>contact me</a>
                </div>
            )}

            <div className='toggle'>
                {theme === "dark" ? (<i className="bi bi-moon-stars"
                    onClick={toggletheme}
                ></i>) : (<i className='bi bi-sun' onClick={toggletheme}> </i>)}

                {!hidenavlinks && (
                    <i className="bi bi-list" onClick={() => setlinks((prev) => !prev)} ></i>
                )}
            </div>

        </div>
    )
}

export default Header;



