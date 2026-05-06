import Image from 'next/image'

const services = [
  {
    title: "Website Design & Development",
    desc: "Designing responsive, intuitive websites and scalable Shopify eCommerce platforms that drive engagement and conversions.",
    tags: ["Responsive Design", "Shopify", "eCommerce"],
    img: "/website-design.png"
  },
  {
    title: "Blockchain Development",
    desc: "Delivering secure blockchain solutions, smart contracts, and decentralized applications for transformative digital innovation.",
    tags: ["Smart Contracts", "dApps", "Security"],
    img: "/blockchain.png"
  },
  {
    title: "Social Media Marketing",
    desc: "Maximizing social engagement, brand visibility, and ROI across diverse digital media platforms strategically.",
    tags: ["Social Engagement", "ROI", "Brand Visibility"],
    img: "/social-media.png"
  },
  {
    title: "SEO & GEO",
    desc: "Driving targeted traffic with local and global SEO strategies for measurable business growth online.",
    tags: ["Local SEO", "Global SEO", "Targeted Traffic"],
    img: "/seo-geo.png"
  },
  {
    title: "Content Marketing",
    desc: "Engaging audiences with powerful content strategies that improve brand authority and digital presence.",
    tags: ["Content Strategy", "Brand Authority", "Digital Presence"],
    img: "/content-marketing.png"
  },
  {
    title: "Performance Marketing",
    desc: "Increasing leads and conversions through data-driven PPC, Meta ads, and LinkedIn ads built for maximum performance.",
    tags: ["PPC", "Meta Ads", "LinkedIn Ads"],
    img: "/performance-marketing.png"
  },
  {
    title: "Branding & Design",
    desc: "Creating compelling corporate branding, brand identities, and visuals that attract, resonate, and retain audiences.",
    tags: ["Corporate Branding", "Brand Identity", "Visuals"],
    img: "/branding-design.png"
  },
  {
    title: "ORM",
    desc: "Shaping positive brand visibility across digital channels through structured online reputation management.",
    tags: ["Reputation Management", "Brand Visibility", "Digital Channels"],
    img: "/orm.png"
  }
]; 

interface ServicesProps {
  speed?: number;
}

const Services = ({ speed = 40 }: ServicesProps) => {
    // Duplicate the services array for seamless infinite looping
    const marqueeItems = [...services, ...services];

    return (
        <section className="py-32 bg-white overflow-hidden">
            
            {/* intro header */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 text-center mb-24 flex flex-col items-center ">
                <span className="text-sm tracking-widest text-[#2F4F22] font-medium uppercase mb-6 ">
                    Services
                </span>
                <h2 className="text-4xl md:text-6xl font-medium mb-8 max-w-3xl leading-tight text-[#2F4F22]">
                    Let us handle the numbers, <br /> So you can handle your success.
                </h2>

                {/* section 3 button */}
                <button className="bg-yellow-300 text-black px-10 py-4 rounded-full text-sm font-bold hover:scale-150 transition-transform duration-300 cursor-pointer ">
                    Schedule a call
                </button>
            </div>


            {/* css style for marquee */}
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee linear infinite;
                    }
                `}
            </style>

            {/* marquee layout */}
            <div className="relative w-full flex group mt-10">

                {/* scrolling track */}
                <div 
                    className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: `${speed}s` }}
                >
                    {
                        marqueeItems.map((service, index) => (
                            <div 
                                key={index} 
                                className="w-90 mx-4  rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-amber-500 hover:shadow-2xl  transition-all duration-300 shadow-s bg-yellow-200 shrink-0"
                            >
                                <div>
                                    {/* image placeholder */}
                                    <div className="w-full flex items-center justify-center h-40 mb-6 rounded-2xl overflow-hidden ">
                                        <Image 
                                            src={service.img} 
                                            width={140} 
                                            height={140} 
                                            alt={service.title}
                                            className="object-contain drop-shadow-md h-full w-auto "
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 leading-tight ">{service.title}</h3>
                                    <p className="text-gray-800 text-sm mb-6 line-clamp-4 ">{service.desc}</p>
                                </div> 
                                
                                {/* tags area */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {
                                        service.tags.map(tag => (
                                            <span 
                                                key={tag}
                                                className="px-3 py-1 bg-white text-gray-800 text-[11px] font-semibold rounded-full shadow-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services