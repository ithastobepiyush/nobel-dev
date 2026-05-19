import Image from 'next/image'
import { Button } from './ui/Button'

const Hero = () => {
    return (
        <section className="bg-green-300 min-h-[90vh] pt-32 pb-20 px-8 md:px-16 flex items-center rounded-b-[40px] overflow-hidden ">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

                {/* left side content */}
                <div className="flex flex-col space-y-8 min-w-0 ">

                    <h1 className="text-5xl md:text-7xl font-medium text-[#2F4F22] leading-[1.1] tracking-tighter break-words ">
                        THE BEAUTY OF IMPACTFUL SOLUTIONS
                        {/* Financial Clarity You Can Trust */}
                    </h1>
                    <p className='text-lg md:text-xl text-[#2F4F22]/80 max-w-sm leading-relaxed '>
                        What sets us apart is our ability to find elegant solutions to complex problems.
                    </p>

                    <div>
                        <Button variant="primary" size="lg">
                            Connect with our experts
                        </Button>
                    </div>
                </div>

                {/* right side content */}
                <div className="relative flex justify-center items-center ">
                    {/* globe asset */}
                    <div className="relative w-full aspect-square max-w-125">
                        {/* next image of globe */}
                        <div className='w-full h-full transition-all duration-700 hover:scale-105 inset-0 z-10'>
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