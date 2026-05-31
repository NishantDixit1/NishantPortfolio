import { motion } from "framer-motion";

import { styles } from "../styles";
import { highlights } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const HighlightCard = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="green-pink-gradient p-[1px] rounded-[20px] shadow-card flex-1 min-w-[280px]"
  >
    <div className="bg-tertiary rounded-[20px] py-8 px-6 h-full">
      <div className="w-12 h-12 rounded-xl bg-[#915EFF]/20 flex items-center justify-center mb-5">
        <span className="text-[#915EFF] text-[22px] font-black">{index + 1}</span>
      </div>
      <h3 className="text-white text-[22px] font-bold">{title}</h3>
      <p className="mt-3 text-secondary text-[15px] leading-[26px]">
        {description}
      </p>
    </div>
  </motion.div>
);

const Highlights = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Why work with me</p>
      <h2 className={styles.sectionHeadText}>What I bring.</h2>
    </motion.div>

    <div className="mt-12 flex flex-wrap gap-7">
      {highlights.map((h, index) => (
        <HighlightCard key={h.title} index={index} {...h} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Highlights, "highlights");
