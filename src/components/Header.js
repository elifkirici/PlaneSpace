
import logo from "../assets/logo.svg"
import deals from "../assets/deals-icon.svg"
import discover from "../assets/discover-icon.svg"
import profile from "../assets/profile.jpg"
import hamburger from "../assets/hamburger.svg"
import { useState, useEffect } from "react";

function Header() {

    const [isClickedMobileMenu, setIsClickedMobileMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
            setIsClickedMobileMenu(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (

        //Header start
        <header>
            <nav>
                <div className="nav-content md:flex inline-flex items-center justify-between px-5 py-8 w-full md:w-auto">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        { /* logo start */}
                        {!isClickedMobileMenu && (
                            <div className="flex items-center gap-2 group">
                                <a href="/" >
                                    <div className="w-7 h-7 bg-dark-purple rounded-full relative shadow-md duration-700 group-hover:w-24 group-hover:rounded-l-lg">
                                        <img src={logo} className="mr-3 h-6 absolute top-1/2 duration-700 transform -translate-y-1/2 group-hover:translate-x-16" alt="Logo" />
                                    </div>
                                </a>
                                <h1 className="uppercase text-dark-text font-bold ">
                                    plane space
                                </h1>
                            </div>
                        )}
                        { /* logo end */}

                        { /* mobile menu icon start */}
                        {(isClickedMobileMenu || (isMobile && (
                            <button className="inline-flex items-center md:hidden" onClick={() => setIsClickedMobileMenu(true)}>
                                <img src={hamburger} alt="hamburger" />
                            </button>
                        )))}
                        { /* mobile menu icon end*/}

                    </div>

                    { /* menu item start */}
                    <div className="menu-item hidden justify-end items-center w-full md:flex lg:w-auto">
                        <ul className="flex gap-5 text-dark-text text-sm font-semibold">
                            <li className="flex items-center gap-1">
                                <img src={deals} alt="deals" />
                                <a href="/" className="hover:shadow-sm duration-500 hover:text-base" >Deals</a>
                            </li>
                            <li className="flex items-center gap-1">
                                <img src={discover} alt="discover" />
                                <a href="/" className="hover:shadow-sm duration-500 hover:text-base" >Discover</a>
                            </li>
                            <li className="flex items-center gap-1">
                                <img src={profile} alt="profile" className="w-9 h-9 object-cover rounded-full" />
                                <a href="/" >Joane Smith</a>
                            </li>
                        </ul>
                    </div>
                    { /* menu item end */}

                    { /* mobile menu item start */}
                    {isClickedMobileMenu && (
                        <div className="mobile-menu-item bg-white absolute right-0 top-0 z-50 h-screen w-1/2">
                            <div className="flex justify-between p-5">
                                <div className="flex items-center gap-2">
                                    <a href="/" >
                                        <div className="w-7 h-7 bg-dark-purple rounded-full relative shadow-md">
                                            <img src={logo} className="mr-3 h-6 absolute top-1/2 duration-700 transform -translate-y-1/2 " alt="Logo" />
                                        </div>
                                    </a>
                                    <h1 className="uppercase text-dark-text font-bold ">
                                        plane space
                                    </h1>
                                </div>
                                <button className="md:hidden" onClick={() => setIsClickedMobileMenu(false)}>
                                    <p className="font-bold text-dark-text">X</p>
                                </button>
                            </div>

                            <ul className="flex gap-8 text-dark-text text-lg font-semibold flex-col mt-5 p-5">
                                <li className="flex items-center gap-2">
                                    <img src={deals} alt="deals" />
                                    <a href="/">Deals</a>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src={discover} alt="discover" />
                                    <a href="/">Discover</a>
                                </li>
                                <li className="flex items-center gap-1">
                                    <img src={profile} alt="profile" className="w-9 h-9 object-cover rounded-full" />
                                    <a href="/" >Joane Smith</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    { /*mobile menu item end */}

                </div>
            </nav>
        </header >
        //Header end
    );
}

export default Header;
