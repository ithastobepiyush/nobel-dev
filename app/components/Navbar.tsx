import Link from "next/link"

const Navbar = () => {
    return(
        <nav className=" top-0 w-full z-50 bg-transparent py-8 px-8 md:px-16 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center ">

                {/* logo area */}
                <div className="text-2xl font-semibold tracking-tight text-[#2F4F22] ">
                    <Link href={"/"}>Nobel Finance</Link>
                </div>

                {/* navigation and cta */}
                <div className="flex items-center gap-12 ">
                    {/* Links */}
                    <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-gray-600 ">
                        <Link 
                            href={"#services"}
                            className="hover:text-black transition-colors  "
                        >
                            Services
                        </Link>
                    </div>

                    {/* cta button */}
                    <Link 
                        href={"#appointment"}
                        className="bg-green-500 text-white px-8 py-3 rounded-full text-l font-bold shadow-sm hover:scale-120 transition-transform duration-300 cursor-pointer "
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar