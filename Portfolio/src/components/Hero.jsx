import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { CALENDLY_URL } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-2xl pointer-events-auto'>
          <div className='inline-flex items-center gap-2 mb-4 bg-[#915EFF]/15 border border-[#915EFF]/40 rounded-full px-4 py-1.5'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400' />
            </span>
            <span className='text-[#dfd9ff] text-[13px] sm:text-[14px] font-medium'>
              Open for new opportunities
            </span>
          </div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nishant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI Agent & Automation Engineer. <br className='sm:block hidden' />
            I build AI agents and automations that run businesses on autopilot.
          </p>

          <div className='mt-6 flex flex-wrap gap-4'>
            <a
              href={CALENDLY_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] hover:bg-[#7c4dff] transition-colors py-3 px-7 rounded-xl text-white font-bold shadow-md shadow-primary'
            >
              Book a Free Call
            </a>
            <a
              href='#work'
              className='border border-[#915EFF] hover:bg-[#915EFF]/10 transition-colors py-3 px-7 rounded-xl text-white font-bold'
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
