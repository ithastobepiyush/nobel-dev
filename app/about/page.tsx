"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Button } from "../components/ui/Button";
import Arsenel from "../components/Arsenal";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.from(".hero-anim", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: heroRef });

  return (
    <div className="min-h-screen bg-white pb-20">


      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-purple-200 min-h-[70vh] pt-32 pb-20 px-8 md:px-16 flex items-center rounded-b-[40px] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto items-center w-full">
          <div className="flex flex-col space-y-6">

            <span className="hero-anim text-3xl tracking-widest  ">
              hello i am piyush, just a hobbyist
            </span>
            
            <h1 className="hero-anim text-4xl md:text-5xl font-medium ` leading-[1.1] tracking-tighter wrap-break-word`">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            
            <p className="hero-anim text-lg md:text-xl max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima adipisci veritatis cupiditate esse nihil.
            </p>
            <div className="hero-anim pt-8 flex gap-10  ">


               <Link href="#contact">
                 <Button variant="primary" size="lg">Lets Connect</Button>
               </Link>
               <Link href="https://github.com/iaimpiyush" target="_blank">
                 <Button variant="dark" size="lg">GitHub</Button>
               </Link>
            
            </div>


          </div>




          {/* Image section */}
          {/* <div className="hero-anim relative flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-[#2F4F22]/10 shadow-2xl transition-all duration-700 hover:scale-105">
               <Image
                 src="/developer_avatar.png" // placeholder that we will generate or just fallback
                 alt="Developer Avatar"
                 fill
                 className="object-cover"
                 onError={(e) => {
                   e.currentTarget.src = "/globe-placeholder.png"; // fallback
                 }}
               />
            </div>
          </div> */}
        </div>
      </section>




      {/* About & Philosophy */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Lorem ipsum dolor sit.
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I am an advocate for <strong>anti-design</strong>. Interfaces should be stripped down to their structural bones. While I am highly capable of building premium, smooth, and rounded experiences (like this very site), my core philosophy embraces system-level aesthetics.
              </p>
              <p>
                Every element should look like it was assembled from primitives. Visual hierarchy is achieved exclusively through scale and contrast, not shadows and gradients. I build unapologetic architectures.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Working Style</h3>
            <ul className="space-y-4">
              {[
                "Focus on structural primitives",
                "Embrace intentional asymmetry",
                "Zero-tolerance for unnecessary bloat",
                "Code as the ultimate source of truth"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Tech Stack */}
      <section className="bg-blue-200 py-24 rounded-[40px] mx-4 md:mx-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              my tech arsenal 
           </h2>
           <p className="text-gray-400">tools & frameworks i prefer to build interfaces.</p>
        </div>


        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">


            {/* main techstack */}

           {Arsenel.map((tech, i) => (

            <div 
              key={i} 
              className="flex gap-4 items-center justify-center rounded-2xl p-6 hover:-translate-y-2 hover:border-purple-400 transition-all duration-300 group"
            >

              
              <Image
                src={tech.icon}
                alt={tech.name} 
                width={60}
                height={60}
                className="mb-4 object-contain"
              />
              <h4 className="text-xl font-semibold text-black mb-1 group-hover:text-purple-400 transition-colors">{tech.name}</h4>
            </div>
           ))}
        
        
        
        </div>




      </section>

      {/* Featured Work / Contribution Activity Placeholder */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                Featured Activity
             </h2>
             <p className="text-gray-600">Recent projects and open-source contributions.</p>
           </div>
           <Link href="https://github.com" target="_blank" className="hidden md:block">
              <Button variant="ghost">View GitHub Profile</Button>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "RawBlock Framework", desc: "A brutalist CSS framework for experimental portfolios.", color: "bg-yellow-200" },
             { title: "Oaisis", desc: "A premium corporate website built with Next.js and Tailwind.", color: "bg-green-200" },
             { title: "Minimal Chatbot", desc: "A rule-based chatbot interface built with vanilla JS.", color: "bg-purple-200" }
           ].map((repo, i) => (
             <div key={i} className={`${repo.color} rounded-3xl p-8 h-64 flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-xl`}>
               <div>
                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">{repo.title}</h3>
                 <p className="text-gray-800 text-sm">{repo.desc}</p>
               </div>
               <div className="flex justify-between items-center mt-auto">
                 <span className="text-xs font-bold uppercase tracking-wider text-gray-900">Open Source</span>
                 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    ↗
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-8 md:px-16 py-12 text-center">
         <div className="bg-gray-50 rounded-[40px] p-12 md:p-20 border border-gray-100">
           <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              Let&apos;s Build Something Unapologetic.
           </h2>
           <p className="text-gray-600 mb-10 max-w-lg mx-auto">
             Whether you need a polished corporate presence or a raw brutalist application, I have the architecture to make it happen.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" size="lg">Send an Email</Button>
             <Button variant="secondary" size="lg">Book a Call</Button>
           </div>
         </div>
      </section>
    </div>
  );
}
