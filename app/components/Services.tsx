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

const Services = () => {
    return (
        <section className="py-32 px-8 md:px-16 bg-white">
            
            {/* intro header */}
            <div className="max-w-7xl mx-auto text-center mb-24 flex flex-col items-center ">
                <span className="text-l tracking-widest text-[#2F4F22] font-medium   mb-6 ">
                    Services
                </span>
                <h2 className="text-4xl md:text-6xl font-medium mb-8 max-w-3xl leading-tight text-[#2F4F22]">
                    Let us handle the numbers, <br /> So you can handle you succuess.
                </h2>
                <button className="bg-[#2F4F22] text-white px-10 py-4 rounded-full text-sm font-bold hover:scale-150 transition-transform duration-300 cursor-pointer ">
                    Schedule a call
                </button>
            </div>

            {/* grid layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8  ">
                {
                    services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-[#5EB2F4] rounded-3xl p-12 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 "
                        >
                            <div>
                                {/* image placeholder */}
                                <div className="w-full h-48 bg-gray-400 rounded-2xl mb-8 overflow-hidden ">
                                    <Image 
                                        src={service.img} 
                                        width={100} 
                                        height={100} 
                                        alt='service img'
                                        className=''
                                    />
                                </div>
                                <h3 className="text-3xl font-medium mb-4 ">{service.title}</h3>
                                <p className="text-gray-600 mb-8 max-w-sm ">{service.desc}</p>
                            </div> 
                            
                            {/* tags area */}
                            <div className="flex flex-wrap gap-3  ">
                                {
                                    service.tags.map(tag => (
                                        <span 
                                            key={tag}
                                            className="px-4 py-2 bg-white border-gray-300 rounded-full "
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
        </section>
    )
}

export default Services