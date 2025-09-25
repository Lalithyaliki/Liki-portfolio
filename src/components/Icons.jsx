import React, { useState } from 'react';
import '../stylings/icons/Icons.css'


function Icons({ type }) {

    const icons = {
        weather: [
            { name: "react", className: "devicon-react-original colored" },
            { name: "css", className: "devicon-css3-plain colored" },
            { name: "Vercel", className: "devicon-vercel-plain" },
             { name: "GitHub", className: "devicon-github-original" },

        ],
        calculator: [
            { name: "React", className: "devicon-react-original colored" },
            { name: "CSS", className: "devicon-css3-plain colored" },
            { name: "GitHub", className: "devicon-github-original" },
        ],
        portfolio: [
            { name: "Html", className: "devicon-html5-plain colored" },
            { name: "CSS", className: "devicon-css3-plain colored" },
            { name: "javascript", className: "devicon-javascript-plain colored" },
             { name: "GitHub", className: "devicon-github-original" },
        ],
        todolist: [
            { name: "React", className: "devicon-react-original colored" },
            { name: "CSS", className: "devicon-css3-plain colored" },
            { name: "GitHub", className: "devicon-github-original" },
            { name: "Vercel", className: "devicon-vercel-plain" },

        ],

    }
    return (
        <div className='iconsdata'>
            {icons[type].map((icon, index) => (
                <div className='icon-wrapper' key={index}>
                    <i className={icon.className}></i>
                    <span className='icon-tooltip'>{icon.name}</span>
                </div>
            ))}
        </div>

    )
}
export default Icons;