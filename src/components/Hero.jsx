import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { navigationPaths, personalInfo, publicUrls } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] sm:h-screen h-auto mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary pointer-events-none" />

      <div
        className={`${styles.paddingX} relative z-10 pt-[96px] pb-4 sm:pb-0 sm:absolute sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5 sm:inset-0 w-full`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-3xl pr-2 sm:pr-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {personalInfo.role} <br className="sm:block hidden" />
            building scalable web products with clean architecture
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 text-white-100 text-sm border border-white/10">
              {personalInfo.location}
            </span>
            <span className="px-4 py-2 rounded-full bg-electric-purple/20 text-electric-purple text-sm border border-electric-purple/20">
              {personalInfo.availability}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={`#${navigationPaths.work}`}
              className="px-6 py-3 rounded-xl bg-electric-purple text-white font-semibold hover:opacity-90 transition-opacity w-full xs:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href={publicUrls.resume}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:border-electric-purple hover:text-electric-purple transition-colors w-full xs:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-2 sm:mt-0 h-[220px] xs:h-[280px] sm:h-full sm:absolute sm:inset-0">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-2 bottom-12 w-full hidden sm:flex justify-center items-center">
        <a href={`#${navigationPaths.about}`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
