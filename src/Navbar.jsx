import './App.css';
import logo from './logo.png';
import { useState } from 'react';


function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		if (showMenu) {
			document.querySelector(".mobile-menu").classList.add("exit");
			setTimeout(() => {
				setShowMenu(!showMenu);
			}, 250);
			enableScrolling();

		} else {
			setShowMenu(!showMenu);
			disableScrolling();

		}
	};

	const scrollToElementMobile = (elementId) => {
		const element = document.getElementById(elementId);
		if (element) {
			toggleMenu();
			element.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error("Element not found!");
		}
	}

	const scrollToElementDesktop = (elementId) => {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error("Element not found!");
		}
	}

    return (
        <header className="flex flex-row justify-between md:px-10 px-4 py-2 border-b-[1px] border-stone-200 text-sm z-50">

				<div className="logo">
					<a className="LOGOLink" href="/">
						<img src={logo} alt="logo" className=" w-20 h-20" />
					</a>
				</div>

				{/* <nav className="flex flex-row items-center gap-x-5"> */}

					{/* desktop menu */}
					<nav className="hidden md:flex items-center gap-x-4 flex-row">
						<div className="hover:text-sky-500 cursor-pointer" onClick={() =>scrollToElementDesktop("home")}>HOME</div>
						<div className="hover:text-sky-500 cursor-pointer" onClick={() =>scrollToElementDesktop("process")} >PROCESS</div>
						<a href="#testimonial" className="hover:text-sky-500">TESTIMONIALS</a>
						<a href="#muse" className="hover:text-sky-500">MUSE</a>
					</nav>

				{/* </nav> */}

				{/* mobile menu */}
				{showMenu && (
						<nav className="md:hidden flex items-center justify-center flex-col gap-y-10 fixed top-0 right-0 w-screen h-screen backdrop-blur-lg text-xl mobile-menu">
							<button className="md:hidden fixed top-10 right-10" onClick={toggleMenu}>
								<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" className="Menu" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
									<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
								</svg>
							</button>
							<div onClick={() => scrollToElementMobile('home')}>HOME</div>
							<div onClick={() => scrollToElementMobile('process')} pointer >PROCESS</div>
							<a href="#testimonial">TESTIMONIALS</a>
							<a href="#muse">MUSE</a>
						</nav>
					)}

				<button className=" bg-blue-500 text-white hover:bg-blue-600 duration-300 ease-in-out rounded-xl md:p-3 my-4 md:text-sm text-xs p-2">
					Schedule Chat
				</button>

				<button className="md:hidden" onClick={toggleMenu}>
					<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="Menu" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
					</svg>
				</button>
			</header>
    );
}

export default Navbar;