import LinkedinLogo from "./linkedin.png"
import logo from './logo.png';

const scrollToElementDesktop = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error("Element not found!");
    }
}

const Footer = () => {

    return (
        <footer className="flex px-5 text-white text-sm justify-between flex-wrap w-90 sm:bg-transparent bg-neutral-900 ">
            <div className="flex sm:flex-row flex-col flex-wrap justify-between w-full border-b-2 border-white pb-5 sm:pb-0 gap-2 px-3">
                <a className="LOGOLink" href="/">
					<img src={logo} alt="logo" className=" w-20 h-20" />
				</a>

                <div className="flex flex-wrap gap-2 sm:content-center sm:flex-row flex-col ">
                    <div className="hover:text-sky-500 cursor-pointer" onClick={() => scrollToElementDesktop("home")}>HOME</div>
					<div className="hover:text-sky-500 cursor-pointer" onClick={() => scrollToElementDesktop("process")} >PROCESS</div>
					{/* <div className="hover:text-sky-500 cursor-pointer" onClick={() => scrollToElementDesktop("what-we-do")} >WHAT WE DO?</div> */}
					<div className="hover:text-sky-500 cursor-pointer" onClick={() => scrollToElementDesktop("services")} >SERVICES</div>
					<div className="hover:text-sky-500 cursor-pointer" onClick={() => scrollToElementDesktop("testimonial")} >WHAT PEOPLE ARE SAYING?</div>
                </div>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center">
                    <img src={LinkedinLogo} alt="linkedin" className="w-5 h-5"/>
                </a>
            </div>

            <div className="flex flex-wrap my-5 justify-center w-full">
                <p>Copyrights &copy; Muse. 2023</p>                
            </div>


        </footer>
    );
}

export default Footer;