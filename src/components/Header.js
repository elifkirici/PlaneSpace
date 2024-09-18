
import logo from "../assets/logo.svg"
import deals from "../assets/deals-icon.svg"
import discover from "../assets/discover-icon.svg"
import profile from "../assets/profile.jpg"
import hamburger from "../assets/hamburger.svg"

function Header() {
    return (

        //Header start
        <header>
            <nav className="w-full">
                <div className="flex items-center justify-between px-5 py-8">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        { /* logo start */}
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
                        { /* logo end */}

                        { /* mobile menu icon start */}
                        <button className="inline-flex items-center lg:hidden">
                            <img src={hamburger} alt="hamburger" />
                        </button>
                        { /* mobile menu icon end*/}

                    </div>

                    { /* menu item start */}
                    <div className="hidden justify-end items-center w-full lg:flex lg:w-auto">
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

                </div>
            </nav>
        </header >
        //Header end
    );
}

export default Header;
