import AttractImg from './attractive.png';
import InvestorImg from './investors.png';
import LeaderImg from './leader.png';
import CAS from "./CAS.png";

const Imagination = () => {
    return(
        <div className='flex flex-col w-full px-20'>
						<div className='flex flex-col lg:flex-row px-5 w-full content-center items-center'>
							<div className='flex flex-col justify-center items-center lg:items-start p-5 lg:w-1/3 lg:h-72 w-[70vw] bg-stone-200 hover:bg-stone-100 hover:scale-[103%] ease-in duration-300 rounded-2xl shadow-lg shadow-black mx-2 my-2'>
								<img src={AttractImg} alt="attract" className='lg:w-16 lg:h-16 w-32 h-32' />
								<h2 className='text-2xl font-black text-blue-500 '> Attracting instead of chasing </h2>
								<p className='text-lg my-2 text-black'>You only chase when things are running from you</p>
							</div>

							<div className='flex lg:flex-row flex-col-reverse p-5 lg:w-2/3 lg:h-72 w-[70vw] bg-stone-200 hover:bg-stone-100 hover:scale-[103%] ease-in duration-300  rounded-2xl shadow-lg shadow-black mx-2 my-2 items-center'>
								<div className='flex flex-col justify-center'>
									<h2 className='text-2xl font-black text-blue-500 '>Be a thought leader and trusted figure in your industry</h2>
									<p className='text-lg my-2 text-black'>82% of customers are more likely to convert if the brand's seniors are active on social media.</p>
								</div>
								<img src={LeaderImg} alt="attract" className='mx-10 lg:w-42 lg:h-42 w-36 h-36' />
							</div>
						</div>

						<div className='flex flex-col lg:flex-row px-5 w-full content-center items-center'>

							<div className='flex lg:flex-row flex-col-reverse justify-between p-5 lg:w-2/3 lg:h-72 w-[70vw] bg-stone-200 hover:bg-stone-100 hover:scale-[103%] ease-in duration-300  rounded-2xl shadow-lg shadow-black mx-2 my-2 items-center'>
								<div className='flex flex-col justify-center '>
									<h2 className='text-2xl font-black text-blue-500 '>Reducing your Customer Acquisition Costs (CAC)</h2>
									<p className='text-lg my-2 text-black'>To as low as $0. </p>
									<h2 className='text-2xl font-black text-blue-500 '>How?</h2>
									<p className='text-lg my-2 text-black'>Though captivating, engaging, converting words</p>
								</div>
								<img src={CAS} alt="attract" className='lg:w-42 lg:h-42 w-48 h-48' />

							</div>

							<div className='flex flex-col justify-center items-center lg:items-start p-5 lg:w-1/3 lg:h-72 w-[70vw] bg-stone-200 hover:bg-stone-100 hover:scale-[103%] ease-in duration-300  rounded-2xl shadow-lg shadow-black mx-2 my-2'>
								<img src={InvestorImg} alt="investor" className='lg:w-16 lg:h-16 w-32 h-32' />
								<h2 className='text-2xl font-black text-blue-500 '>Attract investors, partners, and clients.</h2>
							</div>
						</div>

					</div>
    );
};

export default Imagination;