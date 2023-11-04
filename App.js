import { useState, useEffect, useRef } from "react";
import Typist from 'react-typist-component';
import { motion, AnimatePresence, backIn } from "framer-motion"
import Navbar from './Navbar';
import Testimonials from "./Testimonials";

import './App.css';
import Hollywood from './Hollywood.png';
import Check from './check.png';
import positionImg from './position.png';
import amplifyImg from './amplify.png';
import monetizeImg from './monetize.png';

function App() {
	const doings = [
		{
			name: "Prepare",
			description: "We strategically align and prepare our client's profiles to best represent their brand's visions and goals.",
			image: positionImg
		}, {
			name: "Position",
			description: "We help our clients leverage their unique experiences, expertise and personality, to turn them into recognized industry thought-leaders.",
			image: amplifyImg
		}, {
			name: "Convert",
			description: "We help amplify and convert our client's community and new-found reputation into meaningful connections, partnership, opportunities and ROI.",
			image: monetizeImg
		}
	]

	const services = [
		{
		  title: "Profile Audit & Optimization",
		  description: "Position your profile most effectively to best represent your brand's values and goals.",
		},
		{
		  title: "Positioning Strategy",
		  description: "Pinpoint the fundamental elements and standing that form the foundation of your personal brand.",
		},
		{
		  title: "Ghostwriting & Copywriting",
		  description: "Craft insightful content that grabs attention, persuades, and wins over your target audience.",
		},
		{
		  title: "Outreach & Outbound done-for-you",
		  description: "Connect and start meaningful and converting conversations with your target audience.",
		},
	  ];

	const [scrollPosition, setScrollPosition] = useState(0);
	const imageRef = useRef(null);

	useEffect(() => {
		setInterval(() => {
			const position = window.scrollY;
			setScrollPosition(position);
		}, 100);

		// window.addEventListener("scroll", handleScroll);

		const maxScaleFactor = 1.25;
		const minOpacity = 0;
		const maxOpacity = 0.5;

		const scaleFactor = 0.9 + (scrollPosition / window.innerHeight) * 0.2;
		let opacity;

		if (scaleFactor > maxScaleFactor) {
			opacity = Math.max(maxOpacity - ((scaleFactor - maxScaleFactor) / 0.2) * 1.5, minOpacity);
		} else {
			opacity = 1;
		}

		const translateY = -30 + ((scrollPosition / 20) + (Math.log10(scrollPosition) * 10)); // Adjust this value for the desired translation effect

		imageRef.current.style.opacity = `${opacity}`;
		imageRef.current.style.transition = "all 0.3s ease-in-out";
		// imageRef.current.style.transform = `scale(${Math.min(scaleFactor, maxScaleFactor)}))`;

		imageRef.current.style.transform = `scale(${Math.min(scaleFactor, maxScaleFactor)}) translateY(${translateY}px)`;

		// return () => {
		// 	window.removeEventListener("scroll", handleScroll);
		// };
	}, [scrollPosition]);

	return (
		<div className="App overflow-clip">
			<Navbar />

			<AnimatePresence>
				<section id="home" className="flex flex-col mx-10 my-5 md:py-52 h-[80vh] md:h-fit content-center items-center justify-center z-0">
					<motion.div
						className="flex flex-col gap-y-5 md:w-fit self-center content-center items-center justify-center"
						initial={{ opacity: 0, translateY: -100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
					>
						<h1 className="md:text-7xl text-5xl text-blue-700 my-5">
							Results Driven
						</h1>

						<div className="text-3xl flex my-5">
							<Typist typingDelay={40} loop={true} cursor={' | '}>
								Ghostwriting
								<Typist.Delay ms={2000} />
								<Typist.Backspace count={12} typingDelay={20} />
								Branding
								<Typist.Delay ms={2000} />
								<Typist.Backspace count={8} typingDelay={20} />
								Strategy Agency
								<Typist.Delay ms={2000} />
								<Typist.Backspace count={15} typingDelay={20} />
							</Typist>
						</div>

						<motion.button className="text-xl text-white bg-blue-500 p-3 rounded-lg w-fit self-center hover:bg-blue-600 duration-300"
							whileHover={{ scale: 1.1 }}
							onHoverStart={e => { }}
							onHoverEnd={e => { }}
						>
							Schedule Chat
						</motion.button>
					</motion.div>
				</section>

				<div ref={imageRef} className="image-container">
					<img src={Hollywood} alt="billboard" className='w-screen z-0 sticky' />
				</div>

				<section id='process' className="flex flex-col my-5 md:mt-48 mb-24 h-fit md:h-fit content-center items-center justify-center p-20 bg-sky-800">

					<motion.div
						initial={{ opacity: -1, translateY: -100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ delay: 0.3, duration: 0.3, ease: "backOut" }}
						className=" mt-42"
					>
						<p className="text-lg md:text-2xl text-white">
							You are here because you're a funder or executive and you're interested in
						</p>
						<ol className="flex flex-col gap-5 text-md md:text-xl text-white my-10">
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Lorem
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Ipsum
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Dolor
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Sit
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Amet
							</li>
						</ol>
					</motion.div>

				</section>

				<section className="flex flex-col px-10 my-5 md:my-32 md:h-fit items-center">
					<h1 className="md:text-5xl text-3xl text-blue-700 my-10">
						WHAT WE DO?
					</h1>

					{doings.map((doing, index) => (
						<motion.div
							initial={{ opacity: 0, translateY: -100, translateX: index % 2 === 0 ? -100 : 100 }}
							whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
							className={`group flex flex-col self-end md:m-10 justify-evenly items-center duration-300 ease-in-out ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								}`}
							key={"doing" + index}
						>
							<div className="flex justify-center">
								<img
									src={doing.image}
									alt="position"
									className={`md:w-1/2 w-5/12 md:opacity-0 group-hover:opacity-100 delay-200 duration-500 transition-all ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'
										}`}
								/>
							</div>
							<div className="flex flex-col shadow-inner p-5 gap-y-3 rounded-lg md:w-2/5 m-3">
								<h1 className="bg-blue-500 rounded-full md:text-5xl text-3xl w-fit h-fit px-6 py-3 shadow-lg text-white">{index + 1}</h1>
								<h2 className="md:text-3xl text-xl">{doing.name}</h2>
								<p className="md:text-xl text-md">{doing.description}</p>
							</div>
						</motion.div>
					))}
				</section>

				<section
					className="flex flex-col px-10 my-5 md:my-32 md:h-fit items-center bg-sky-800"
				>
					<h1 className="md:text-6xl text-4xl text-white my-10">
						Services
					</h1>

					<div className="flex md:flex-row flex-col p-10 m-10 ">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, translateY: -100 }}
								whileInView={{ opacity: 1, translateY: 0 }}
								transition={{ duration: 0.5, ease: "backOut" }}
								className="flex-col p-10 m-10 bg-white rounded-xl md:w-1/5 shadow-lg md:hover:scale-110 duration-150 ease-in"
							>
								<h1 className="md:text-3xl text-xl text-sky-500 ">{service.title}</h1>
								<p className="md:text-xl text-md text-black mt-5 ">{service.description}</p>
							</motion.div>
						))}

					</div>
				</section>

				<section id="testimonial" className="flex flex-col my-5 md:my-32 md:h-fit items-center">
					<h1 className="md:text-5xl text-3xl text-blue-700 my-10">
						Testimonials
					</h1>
					<Testimonials />

				</section>
			</AnimatePresence>
		</div>




	);
}

export default App;
