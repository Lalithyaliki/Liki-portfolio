import { useEffect, useState } from 'react';
import '../stylings/backtotopbtn/backtotopbtn.css';


function BackToTopBtn() {

    const [visible, setvisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 100) {
                setvisible(true);
            }
            else {
                setvisible(false);
            }
        }
        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll);

    }, []);

    return (
        <>
            {visible && (<div className="scroll-btn">
                <button className='scroll' onClick={() => scrollTop()}><i className="bi bi-arrow-up"></i></button>
            </div>)}

        </>
    )
}

export default BackToTopBtn;