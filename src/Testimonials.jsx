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

	const lt768 = useMediaQuery('(max-width: 768px)');
	const lt1024 = useMediaQuery('(max-width: 1024px)');
	const lt1280 = useMediaQuery('(max-width: 1280px)');
	const lt1366 = useMediaQuery('(max-width: 1366px)');
	let transformValues = ["21%", "-21%"];
	if (lt1366)
		transformValues = ["25%", "-25%"];
	if(lt1280)
		transformValues = ["30%", "-30%"];
	if(lt1024)
		transformValues = ["35%", "-35%"];
	const x = useTransform(scrollYProgress, [0, 1],transformValues);


	//   const x = useTransform(scrollYProgress, [0, 1], transformValues);
	if (lt768) {
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
				<div className="sticky top-0 flex h-screen items-center overflow-hidden ">
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
			className="group relative h-[450px] w-[450px] overflow-hidden bg-stone-200 shadow-lg rounded-xl shadow-black"
		>
			<div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
				<p className="p-8 text-2xl  text-black">
					{"\"" + card.quote + "\""}
				</p>
				<div className="text-xl font-black text-black">
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
			className=" bg-stone-200 rounded-xl p-10 relative shadow-md shadow-black"
		>
			<div className="flex flex-col justify-center items-center">
				<p className="text-md text-black">
					{"\"" + card.quote + "\""}
				</p>
				<div className="font-black text-black text-md mt-10 text-center">
					<>{" ~" + card.name}</>
					<div className="mx-auto px-5 py-2">
						<img src={ratingStars} alt="5_star" className="w-full h-full max-w-[200px]" />
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