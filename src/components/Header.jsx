import '../stylings/header/header.css';
import image from '../images/llogo.jpeg';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();

    const hidenavlinks = location.pathname === "/projects";

    const [openlinks, setlinks] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setlinks(false);
    };

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
                        <button className='btn' onClick={() => setlinks(false)}>X</button>
                    </div>
                    <button onClick={() => scrollToSection("home")}>Home</button>
                    <button onClick={() => scrollToSection("aboutme")}>About</button>
                    <button onClick={() => scrollToSection("skills")}>Skills</button>
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                    <button onClick={() => scrollToSection("contactMe")}>Contact</button>
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



