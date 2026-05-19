"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false)

    // scroll detection logic
    useEffect(() => {
        const handleScroll = () => {
            // trigger shrink effect after scrolling 50px
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // determine if navbar should be in its compact state
    const isCompact = pathname !== "/" || isScrolled;

    return (
        // outer wrapper / always fisex, handles the spacing from the top of the screen 
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out flex justify-center ${isCompact ? "py-4 px-4" : "px-8 py-8 md:px-16"} `}>

            {/* inner wrapper : morphs from a wide layout to a floating alssmorphism pill */}
            <div className={`mx-auto flex justify-between items-center w-full transition-all duration-500 ease-in-out ${
                isCompact
                ? "max-w-4xl bg-white/70 backdrop-blur-md shadow-sm border border-gray-200/50 rounded-full px-6 py-3  "
                : "max-w-7xl bg-transparent px-0 py-0 rounded-none border-transparent"
                }  
            `}>

                {/* navbar display */}
                
                {/* logo area */}
                <div className="text-2xl font-semibold tracking-tight text-[#2F4F22] ">
                    <Link href={"/"}>
                        OAISis.
                    </Link>
                </div>

                {/* navigation and cta */}
                <div className="flex items-center gap-12 ">

                    {/* cta button */}
                    <Link
                        href={"about"}
                        className="bg-purple-400 text-white px-8 py-3 rounded-full text-base font-bold shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer "
                    >
                        About us
                    </Link>                    

                    {/* links */}
                    <div className="hidden sm:flex items-center gap-10 text-sm font-medium text-gray-500 ">
                        <Link
                            className="hover:text-black transition-colors "
                            href={"services"}
                        >
                            Services
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )

}

export default Navbar;





