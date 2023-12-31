// import { useState, useEffect, useRef } from "react";
import Typist from 'react-typist-component';
import { motion, AnimatePresence } from "framer-motion"
import Navbar from './Navbar';
import Imagination from './Imagination';
import Testimonials from "./Testimonials";
import Billboard from './Billboard';
import Footer from './Footer';

import './App.css';
import Check from './check.png';
import positionImg from './position.png';
import amplifyImg from './amplify.png';
import monetizeImg from './monetize.png';
import pencil from './pencil.png';

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
						<h1 className="md:text-7xl text-5xl my-5">
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
						>
							<a href='https://calendly.com/joshcons/30min' target="_blank" rel="noreferrer">Schedule Chat</a>
						</motion.button>
					</motion.div>
				</section>

				<Billboard />

				<section id='process' className="flex flex-col md:mt-[44vh] mb-24 mt-60 h-fit md:h-fit content-center items-center justify-center p-20">

					<motion.div
						initial={{ opacity: -1, translateY: -100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ delay: 0.3, duration: 0.3, ease: "backOut" }}
						className=" mt-20"
					>
						<p className="text-lg md:text-2xl text-white">
							You are here because you're a funder or executive and you're interested in
						</p>
						<ol className="flex flex-col gap-5 text-md md:text-xl text-white my-10">
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Becoming an authority figure in your niche
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Building an online presence / brand for visibility
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Grow organically on social media
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Increase deal flow
							</li>
							<li className="flex">
								<img src={Check} alt="checkBox" className=" md:w-8 md:h-8 w-5 h-5 mr-3" />
								Cultivate community
							</li>
						</ol>
					</motion.div>

				</section>

				<section id="what-we-do" className="flex flex-col px-10 my-5 md:my-32 md:h-fit items-center">
					<h1 className="md:text-5xl text-3xl my-10">
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
									className={`md:w-1/2 sm:w-7/12 w-5/6 md:opacity-0 group-hover:opacity-100 delay-200 duration-500 transition-all ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'
										}`}
								/>
							</div>
							<div className="flex flex-col shadow-lg shadow-black bg-stone-200 text-black p-5 gap-y-3 rounded-lg md:w-2/5 m-3">
								<h2 className="bg-blue-500 rounded-full md:text-5xl text-3xl w-fit h-fit px-6 py-3 shadow-lg text-white">{index + 1}</h2>
								<h3 className="md:text-3xl text-xl">{doing.name}</h3>
								<p className="md:text-xl text-md">{doing.description}</p>
							</div>
						</motion.div>
					))}
				</section>

				<section id="services"
					className="flex flex-col px-10 my-5 md:my-32 md:h-fit items-center"
				>
					<h1 className="md:text-6xl text-4xl my-10">
						Services
					</h1>

					<div className="flex md:flex-row flex-col md:p-10 sm:px-16 m-10 justify-center">
						{services.map((service, index) => (
							<div className="flex-col p-5 m-5 lg:p-7 lg:m-7 bg-white rounded-xl md:w-[175px] lg:w-[225px] shadow-xl shadow-black md:hover:scale-110 duration-150 ease-in">
								<h2 className="lg:text-2xl md:text-xl text-lg text-sky-500 ">{service.title}</h2>
								<p className="lg:text-lg md:text-md text-sm text-black mt-5 ">{service.description}</p>
							</div>
						))}

					</div>
				</section>

				<section id="imagine" className="flex flex-col m-5 md:my-32 md:h-fit items-center ">
					<h1 className="md:text-5xl text-3xl my-10 text-left">
						Just imagine...
					</h1>
					<Imagination />

				</section>

				<section id="testimonial" className="flex flex-col m-5 md:my-32 md:h-fit items-center">
					<h1 className="md:text-5xl text-3xl my-10 text-center">
						WHAT PEOPLE ARE SAYING?
					</h1>
					<Testimonials />

				</section>

				<section id="muse_banner" className="flex flex-col mx-10 my-2 md:pt-0 pb-24 md:h-fit content-center items-center justify-center z-0">
					<motion.div
						className="flex flex-col gap-y-5 md:w-fit self-center content-center items-center justify-center relative"
						initial={{ opacity: 0, translateY: -100 }}
						whileInView={{ opacity: 1, translateY: 0 }}
					>

						<div className='flex md:flex-row flex-col justify-center items-center md:mx-20 md:px-10 mx-3 px-3'>

							<h1 className="md:text-5xl text-3xl my-10 z-10 md:w-2/5">
								Ready to become your industry's go-to
								<span className='text-blue-500'> thought leader?</span>
							</h1>
							<div className='flex flex-col border-black border-[1px] p-10 gap-y-5 rounded-lg md:w-2/5 m-3 shadow-lg shadow-black bg-stone-200'>
								<h2 className="md:text-3xl text-xl text-center font-bold text-black">
									Try our Muse tool
								</h2>
								<motion.button className="text-xl text-white bg-blue-500 p-3 rounded-lg w-fit self-center hover:bg-blue-600 duration-300 z-10"
									whileHover={{ scale: 1.1 }}
								>
									<a href='https://linkedin-post-generator-eight.vercel.app/' target="_blank" rel="noreferrer">Muse</a>
								</motion.button>

								<motion.button className="text-xl text-white bg-blue-500 p-3 rounded-lg w-fit self-center hover:bg-blue-600 duration-300 z-10"
									whileHover={{ scale: 1.1 }}
								>
									<a href='https://calendly.com/joshcons/30min' target="_blank" rel="noreferrer">Schedule Chat</a>
								</motion.button>

								<img src={pencil} alt="muse pencil" className='flex self-end md:w-2/3 md:-translate-x-16 z-0' />
							</div>
						</div>


					</motion.div>
				</section>
			</AnimatePresence>

			<Footer />
		</div>


	);
}

export default App;
