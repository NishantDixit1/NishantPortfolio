import { motion } from "framer-motion";

import { styles } from "../styles";
import { expertiseAreas } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExpertiseCard = ({ index, title, subtitle, description, points, tools, achievement }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] p-7 h-full flex flex-col">
      <p className="text-[#915EFF] text-[13px] uppercase tracking-wider font-semibold">
        {subtitle}
      </p>
      <h3 className="text-white text-[24px] font-bold mt-1">{title}</h3>
      <p className="mt-3 text-secondary text-[15px] leading-[26px]">
        {description}
      </p>

      <ul className="mt-5 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-white-100 text-[14px]">
            <span className="text-[#915EFF] mt-[2px]">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-[12px] text-[#dfd9ff] bg-black-200 rounded-full px-3 py-1"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#915EFF]/20">
        <p className="text-[13px] text-secondary">
          <span className="text-[#915EFF] font-semibold">Key result: </span>
          {achievement}
        </p>
      </div>
    </div>
  </motion.div>
);

const Expertise = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I do</p>
      <h2 className={styles.sectionHeadText}>Expertise.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      From intelligent AI agents to end-to-end automation and the custom
      full-stack tooling that powers them — here's how I help businesses run on
      autopilot.
    </motion.p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
      {expertiseAreas.map((area, index) => (
        <ExpertiseCard key={area.title} index={index} {...area} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Expertise, "expertise");
