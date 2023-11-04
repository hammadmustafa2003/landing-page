import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Hollywood from './Hollywood.png';
import hollywood_potrait from './Hollywood_potrait.png';


const Billboard = () => {

    const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 3]);

    const potrait = window.innerHeight > window.innerWidth;
    return (
        // <section className="relative h-[300vh]">
        <section className="relative h-[350vh]">
            <motion.div style={{ scale }} className="sticky top-0">
                <img src={potrait? hollywood_potrait : Hollywood} alt="billboard" className='w-screen z-0' />
            </motion.div>
        </section>
    );
};

export default Billboard;