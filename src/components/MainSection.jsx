import React, { useEffect, useState } from "react";
import '../stylings/mainSection/mainsection.css';
import image from '../images/nazriya.jpeg';
import Html from '../images/html.png';
import css from '../images/css.jpeg';
import react from '../images/react.jpeg';
import python from '../images/python.jpeg';
import java from '../images/java.jpeg';
import dsa from '../images/dsa.png';
import sql from '../images/sql.jpeg';
import mysql from '../images/mysql.jpeg';
import oracle from '../images/oracle.jpeg';
import { motion } from "framer-motion";
import { fadeInUp } from "../framermotion/Framer.jsx";
import { Link } from "react-router-dom";

function MainSection() {

    const [showloading, setloading] = useState(false);
    const [popup, setpopup] = useState(false);
    const [input, setinput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, seterror] = useState({
        name: false,
        email: false,
        message: false,
    });

    const onchange = (e) => {
        const { name, value } = e.target;

        setinput((prev) => ({ ...prev, [name]: value }));

        if (value.trim() !== "") {
            seterror((prev) => ({ ...prev, [name]: false }))
        }
    }

    const onsubmit = async (e) => {
        e.preventDefault();

        const a = ({
            name: input.name.trim() === "",
            email: input.email.trim() === "",
            message: input.message.trim() === "",
        });

        seterror(a);


        if (Object.values(a).some((err) => (err))) {
            return;
        }

        setloading(true);

        // Fetch API
        let data = await fetch("https://formspree.io/f/xdkwvpbb", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });


        setloading(false);

        if (data.ok) {

            setpopup(true);

            setTimeout(() => {
                setpopup(false);
            }, 3000);

            setinput({
                name: "",
                email: "",
                message: "",
            })

        }

    }

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    // Child animation ( heading, paragraph, icons)
    const item = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (

        <div className="mainsection">

            <div className={showloading ? "overlay show" : "overlay"}>
                <div className="sending">
                    sending <div className="dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
            </div>

            <motion.div variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }} className="home" id="home">
                <img src={image} alt="photo"></img>
                <motion.h1 className="global-text" variants={item}>Likitha</motion.h1>
                <motion.div variants={item} className="known-skills">
                    <h3>i am good at </h3>
                    <div className="languages">
                        <span>java</span>
                        <span>python</span>
                        <span>frontend</span>
                        <span>sql</span>
                        <span>java</span>
                        <span>python</span>
                        <span>frontend</span>
                        <span>sql</span>
                    </div>
                </motion.div>
                <motion.div variants={item} className="icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" />
                </motion.div>
            </motion.div>

            <motion.div {...fadeInUp} className="aboutme" id="aboutme">
                <div className="details">
                    <div className="mydetails">
                        <h2 className="heading global-text">About Me</h2>
                        <p> <span>I'</span>m Likitha, currently studying in my 4th year of B.Tech in Electronics and Communication Engineering (ECE). While my academic background is in electronics, I've developed a strong passion for software development. I'm currently working on enhancing my skills in frontend development and actively learning technologies like HTML, CSS, JavaScript, and React. In addition, I’m gaining hands-on experience in backend and programming languages including Java, SQL, and Python. I enjoy solving problems, building user-friendly applications, and continuously expanding my technical knowledge. I believe that with consistency, curiosity, and hard work, I can grow into a well-rounded software developer ready to take on real-world challenges.</p>
                    </div>
                    <div className="profile-image">
                        <img src={image} alt="my-profile"></img>
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeInUp} className="aboutme skills-section" id="skills">
                <h2 className="heading global-text">Skills</h2>
                <div id="customCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-images">
                                <img src={Html} className="side-img left" alt="Left" />
                                <img src={react} className="center-img" alt="Center" />
                                <img src={css} className="side-img right" alt="Right" />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel-images">
                                <img src={python} className="side-img left" alt="Left" />
                                <img src={java} className="center-img" alt="Center" />
                                <img src={dsa} className="side-img right" alt="Right" />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel-images">
                                <img src={mysql} className="side-img left" alt="Left" />
                                <img src={sql} className="center-img" alt="Center" />
                                <img src={oracle} className="side-img right" alt="Right" />
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </motion.div>

            <motion.div {...fadeInUp} className="aboutme projects" id="projects">
                <h2 className="heading global-text">Projects</h2>
                <p><span>W</span>elcome to my portfolio! I’m passionate about building responsive, user-friendly websites and applications that bring ideas to life. Over time, I’ve worked on multiple projects that showcase my skills in web development, design, and problem-solving. Each project reflects my focus on clean code, creative interfaces, and delivering a smooth user experience. Click the button below to explore my projects and see my work in action!</p>
                <Link to="/projects" className="btn">
                    view projects <i className="bi bi-stack"></i>
                </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="aboutme contactme" id="contactMe">
                <p className={popup ? "pop open" : "pop"}>I got you, i will come back too you!</p>
                <h2 className="heading global-text">Contact Me</h2>
                <div className="contact">
                    <form onSubmit={onsubmit} autoComplete="off" >
                        <div className="input-details">
                            <input
                                type="text"
                                id="username"
                                value={input.name}
                                onChange={onchange}
                                name="name"
                                className={error.name ? "error" : ""}
                                placeholder="" />
                            <label htmlFor="username">Name *</label>
                        </div>
                        <div className="input-details">
                            <input
                                type="email"
                                id="email"
                                value={input.email}
                                onChange={onchange}
                                name="email"
                                className={error.email ? "error" : ""}
                                placeholder="" />
                            <label htmlFor="email">Email *</label>
                        </div>
                        <div className="input-details text-area">
                            <textarea
                                id="textarea"
                                value={input.message}
                                onChange={onchange}
                                name="message"
                                className={error.message ? "error" : ""}
                                placeholder=""></textarea>
                            <label htmlFor="textarea">Enter message *</label>
                        </div>
                        <button type="submit" className="btn">
                            send  <i className="bi-arrow-right-circle"></i>
                        </button>

                    </form>
                </div>
            </motion.div>

        </div>
    )
}

export default MainSection;