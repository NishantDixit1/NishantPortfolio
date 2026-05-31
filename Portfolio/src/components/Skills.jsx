import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillGroup = ({ index, title, items }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="bg-tertiary rounded-2xl p-6 shadow-card"
  >
    <h3 className="text-white text-[18px] font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-[13px] text-[#dfd9ff] bg-black-200 border border-[#915EFF]/30 rounded-full px-3 py-1"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      A full toolkit spanning automation platforms, AI/LLM frameworks, and
      modern full-stack development — everything needed to design, build, and
      ship reliable automated systems end-to-end.
    </motion.p>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((group, index) => (
        <SkillGroup key={group.title} index={index} {...group} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Skills, "skills");
