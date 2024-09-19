import logo from "../assets/logo.svg"

function Footer() {

    return (

        //Footer start
        <footer className="fixed bottom-0 w-full">
            <div className="mx-auto w-full px-5 py-8">
                <div className="md:flex md:justify-between">
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

                    { /* menu item start */}
                    <div>
                        <ul className="font-medium flex gap-10 text-dark-text justify-center mt-5">
                            <li className="mb-4">
                                <a href="/" className="hover:shadow-sm duration-500 text-sm hover:text-base">Deals</a>
                            </li>
                            <li>
                                <a href="/" className="hover:shadow-sm duration-500 text-sm hover:text-base">Discover</a>
                            </li>
                        </ul>
                    </div>
                    { /* menu item end */}
                </div>

                <hr className="my-6 border-t-[0.5px] border-gray-300 mx-auto" />
                <div className="sm:flex items-center justify-center w-full">
                    <span className="text-sm font-thin text-dark-text text-center">© 2024 <a href="/" className=" hover:underline">Plane Space</a>. All Rights Reserved.
                    </span>
                </div>

            </div>
        </footer>
        //Footer end
    );
}

export default Footer;
