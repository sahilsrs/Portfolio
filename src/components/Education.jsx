import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { education, navigationPaths } from "../constants";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ item, index }) => {
  return (
    <motion.article
      variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.2, 0.75)}
      className="glass-panel border border-white/10 rounded-2xl p-6 md:p-8 hover:border-electric-purple/50 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-white text-[22px] font-bold max-w-xl">{item.degree}</h3>
        <span className="px-3 py-1 rounded-full bg-electric-purple/20 text-electric-purple text-sm font-medium">
          {item.year}
        </span>
      </div>

      <p className="mt-4 text-white-100 text-[16px] font-medium">{item.institute}</p>
      <p className="mt-2 text-secondary text-[15px]">{item.score}</p>
    </motion.article>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Strong fundamentals in computer applications with consistent academic performance and hands-on project work.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <EducationCard key={item.degree} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, navigationPaths.education);
