import '../stylings/projectpage/projectpage.css';
import { motion } from "framer-motion";
import { fadeInUp } from "../framermotion/Framer.jsx";
import React, { useEffect } from 'react';
import Icons from '../components/Icons.jsx';

function Projectspage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-site">
            <h2 className="global-text">Projects</h2>
            <div className="My-projects">
                <motion.div {...fadeInUp} className="project weather-app">
                    <h3>WeatherApp</h3>
                    <p>Built a Weather App using React, allowing users to search for cities and view real-time weather data. Implemented a search history feature so users can quickly revisit previous searches. The interface features colorful headings, smooth transitions, and a visually appealing layout, making the app engaging and user-friendly.
                    </p>
                    <Icons  type="weather"/>
                    <a href="https://weather-app-iota-blush-65.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="site-btn">visit site <i className="bi bi-door-open"></i></button></a>
                </motion.div>
                <motion.div {...fadeInUp} className="project calculator ">
                    <h3>Calculator</h3>
                    <p>Built a responsive calculator using React that performs all standard arithmetic operations. The interface is clean and intuitive, allowing users to interact effortlessly. Added smooth animations for button clicks to enhance the user experience. The layout is well-structured and visually appealing, demonstrating attention to design and functionality..</p>
                    <Icons  type="calculator"/>
                    <a href="https://lalithyaliki.github.io/Calculator/" target="_blank" rel="noopener noreferrer"><button className="site-btn">visit site <i className="bi bi-door-open"></i></button></a>
                </motion.div>
                <motion.div {...fadeInUp} className="project portfolio">
                    <h3>Portfolio</h3>
                    <p>Built a Personal Portfolio using JavaScript to showcase my skills, projects, and professional details. Features smooth transitions, interactive elements, and a clean layout for an engaging user experience. Demonstrates attention to detail, modern UI practices, and the ability to create visually appealing and functional web applications. This project reflects my capability to build visually appealing and functional web applications from scratch.</p>
                    <Icons  type="portfolio"/>
                    <a href="https://lalithyaliki.github.io/new-portfolio/" target='_blank' rel="noopener noreferrer"><button className="site-btn">visit site <i className="bi bi-door-open"></i></button></a>
                </motion.div>
                <motion.div {...fadeInUp} className="project todo">
                    <h3>Todo-List</h3>
                    <p>Developed a To-Do Application using React, allowing users to add, edit, and delete tasks efficiently. The app features a clean and intuitive UI, with smooth transitions and responsive design for a seamless experience across devices. Implemented features like task completion tracking and organized task lists to enhance usability. </p>
                     <Icons  type="todolist"/>
                    <a href="https://todo-list-one-iota-20.vercel.app/"  target='_blank' rel="noopener noreferrer" ><button className="site-btn">visit site <i className="bi bi-door-open"></i></button></a>
                </motion.div>
            </div>
        </div >
    )
}

export default Projectspage;
