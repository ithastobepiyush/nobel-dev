import Image from 'next/image'

const Hero = () => {
    return (
        <section className="bg-green-300 min-h-[90vh] pt-32 pb-20 px-8 md:px-16 flex items-center rounded-b-[40px] ">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

                {/* left side content */}
                <div className="flex flex-col space-y-8 ">

                    <h1 className="text-5xl md:text-7xl font-medium text-[#2F4F22] leading-[1.1] tracking-tight ">
                        Marketing Services Crafted for Human and AI Recognition
                        {/* Financial Clarity You Can Trust */}
                    </h1>
                    <p className='text-lg md:text-xl text-[#2F4F22]/80 max-w-sm leading-relaxed '>
                        Trusted financial guidance for every stage of life and business since 1987
                    </p>

                    <div>
                        <button className="bg-[#5EB9FC] text-white px-10 py-4 rounded-full text-l font-bold hover:scale-130 transition-transform duration-300 cursor-pointer ">
                            Connect with our experts
                        </button>
                    </div>
                </div>

                {/* right side content */}
                <div className="relative flex justify-center items-center ">
                    {/* globe asset */}
                    <div className="relative w-full aspect-square max-w-125">
                        {/* next image of globe */}
                        <div className='w-full h-full  transition-all duration-700  hover:scale-120 inset-0 z-10'>
                            <Image
                                className='relative z-10 w-full h-auto drop-shadow-2xl '
                                src="/globe-placeholder.png"
                                alt="Globe placeholder"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero