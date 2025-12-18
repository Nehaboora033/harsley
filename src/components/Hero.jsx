import React, { useState } from 'react'
import Nabar from './Nabar'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { AnimatePresence, motion } from 'motion/react'
import line from '../../public/images/circle.png'


const bikes = [
    {
        src: "/images/harley11.png",
        color: "#061534",
        title: "Harley Davidson R51",
        tagline: "Ride Bold",
        description: `A legendary ride that blends power and classic Harley style. 
                    With unmatched handling and a design that commands attention.`,

    },
    {
        src: "/images/harley222.png",
        color: "#272A28",
        title: "SPORTSTER S 2025",
        tagline: "Billiard Gray",
        description: `Custom factory touring bike with unmatched comfort and style. 
                    Built for long journeys, it’s luxury and performance combined.`,

    },
    {
        src: "/images/harley33333.png",
        color: "#440A0E",
        title: "NIGHTSTER",
        tagline: "Wiskey Fire",
        description: `A sport cruiser built for thrilling urban adventures. 
                    Its modern engineering delivers speed with precision.`,

    },
    {
        src: "/images/harley44.png",
        color: "#191A1A",
        title: "SPORTSTER S",
        tagline: "Mystic Shift",
        description: `A bold evolution of a classic, redefining performance. 
                    Aggressive styling meets advanced tech for the ultimate ride.`,

    },
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    const current = bikes[index];

    const next = () => {
        setIndex((prev) => (prev + 1) % bikes.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
    };

    return (
       
            <motion.div
                className=" relative p-5 overflow-hidden h-screen "
                animate={{
                    background: `
              radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%),
              linear-gradient(to right, ${current.color}, ${current.color})
            `,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Nabar className={'z-2'} />
                {/* bikes image */}
                <AnimatePresence mode='wait'>
                    <div key={index} className='absolute top-[22%] left-[33%] z-1 w-225 h-[550px]'>
                        <motion.img src={current.src} alt="image"
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </AnimatePresence>
                {/* line img */}
                <img src={line} alt="line" className='absolute left-[18%] bottom-[-40%] bg-no-repeat bg-cover w-fit' />
                {/* text part */}
                <motion.div className='absolute top-[20%] left-[7%]' key={index}
                    initial={{
                        y: 300,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <h3 className='text-white text-[50px] mb-4 font-extrabold'>
                        {current.title}
                    </h3>
                    <p className='text-[#ff6600] text-2xl mb-4 font-medium'>
                        {current.tagline}
                    </p>
                    <p className='text-white/80 max-w-100 d'>
                        {current.description}
                    </p>
                </motion.div>
                {/* arrows */}
                <div className=" flex gap-5">
                    <button
                        onClick={prev}
                        className="w-11 h-11 cursor-pointer rounded-full bg-white flex items-center justify-center hover:bg-[#ff6600] transition absolute bottom-[6%] left-[32%] z-3"
                    >
                        <CgChevronLeft size={22} />
                    </button>
                    <button
                        onClick={next}
                        className="w-11 h-11 rounded-full bg-white cursor-pointer flex items-center justify-center hover:bg-[#ff6600] transition absolute bottom-[4%] left-[40%] z-3"
                    >
                        <CgChevronRight size={22} />
                    </button>
                </div>
            </motion.div >
       
    )
}

export default Hero