import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import {
  personalInfo,
  navigationPaths,
  services,
  quickStats,
  highlights,
} from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[260px] py-6 px-8 flex flex-col justify-evenly items-center">
          <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[19px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const StatCard = ({ item, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.7)}
    className="glass-panel rounded-xl p-5 border border-white/10"
  >
    <p className="text-electric-purple text-[26px] font-black">{item.value}</p>
    <p className="text-secondary text-[14px] mt-1">{item.label}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about}
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-3">
        {highlights.map((item) => (
          <span
            key={item}
            className="text-sm px-4 py-2 rounded-full border border-white/10 bg-black-100/70 text-white-100"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((item, index) => (
          <StatCard key={item.label} item={item} index={index} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, navigationPaths.about);

export { About };
export default AboutSection;
