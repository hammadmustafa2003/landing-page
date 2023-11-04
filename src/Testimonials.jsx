import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import ratingStars from "./5_star.png";


const Testimonials = () => {
	return (
		<div>
			<HorizontalScrollCarousel />
		</div>
	);
}

export default Testimonials;


const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

	const isMobile = useMediaQuery('(max-width: 768px)');

	//   const x = useTransform(scrollYProgress, [0, 1], transformValues);
	if (isMobile) {
		return (
			<section >
				<motion.div className="flex flex-col gap-4 m-10">
					{cards.map((card) => {
						return <CardMobile card={card} key={"testimonial" + card.id} />;
					})}
				</motion.div>
			</section>

		);
	}

	else {
		return (
			<section ref={targetRef} className="relative h-[200vh]">
				<div className="sticky top-0 flex h-screen items-center overflow-hidden">
					<motion.div style={{ x }} className="flex gap-4">
						{cards.map((card) => {
							return <CardDesktop card={card} key={"testimonial" + card.id} />;
						})}
					</motion.div>
				</div>
			</section>
		);
	}
};

const CardDesktop = ({ card }) => {
	return (
		<div
			key={"testimonial card" + card.id}
			className="group relative h-[450px] w-[450px] overflow-hidden bg-black shadow-xl rounded-xl"
		>
			<div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
				<p className="p-8 text-2xl font-black text-white">
					{"\"" + card.quote + "\""}
				</p>
				<div className="text-white text-xl">
					{" ~" + card.name}
				</div>

			</div>
			<div className="absolute mx-auto -bottom-24 p-28">
				<img src={ratingStars} alt="5_star" className="object-cover w-full" />
			</div>
		</div>
	);
};

const CardMobile = ({ card }) => {
	return (
		<div
			key={"testimonial card" + card.id}
			className=" bg-black shadow-xl rounded-xl p-10 relative"
		>
			<div className="flex flex-col justify-center items-center">
				<p className="text-md text-white">
					{"\"" + card.quote + "\""}
				</p>
				<div className="text-white text-md mt-10">
					<>{" ~" + card.name}</>
					<div className="mx-auto px-5 py-2">
						<img src={ratingStars} alt="5_star" className="w-full h-full" />
					</div>
				</div>

			</div>

		</div>
	);
};


const cards = [
	{
		quote: "Very good problem to have - every slot I opened for students this weekend was booked out",
		name: "Himanshu, Founder / mentor",
		id: 1,
	},
	{
		quote: "Legit take notes from your content. I don't say that about a lot of people",
		name: " Adam, Writer",
		id: 2,
	},
	{
		quote: "My co-founder is sold on this whole LinkedIn thing after he saw the results from my recent post. It caught fire",
		name: "Christian, Founder",
		id: 3,
	},
	{
		quote: "You really made me step out of my zone with that post, but I also haven't seen results come in like that either",
		name: " Dan, Founder",
		id: 4,
	},

	{
		quote: "I was reading your post about what to do when not having what to write about. Really good stuff. So I will try posting using the framework and questions you posted about. Thanks for the plug",
		name: "Dean, Founder",
		id: 5
	},
];