import '../stylings/footer/footer.css';
import { motion } from "framer-motion";
import { fadeIn } from '../framermotion/Framer.jsx';

function Footer() {

    return (
        < motion.div {...fadeIn} className='footer'>
            <p>&copy; 2025 Likitha A. All rights reserved.
            </p>
        </motion.div>
    )
}

export default Footer;