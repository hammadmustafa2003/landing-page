import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Hollywood from './Hollywood.png';


const Billboard = () => {

    const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    return (
        <section className="relative h-[300vh]">
            <motion.div style={{ scale }} className="sticky top-0">
                <img src={Hollywood} alt="billboard" className='w-screen z-0' />
            </motion.div>
        </section>
    );
};

export default Billboard;