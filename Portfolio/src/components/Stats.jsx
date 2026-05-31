import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { stats } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

const CountUp = ({ value }) => {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : String(value);

  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(target * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const display = Number.isInteger(target) ? Math.round(n) : n.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => (
  <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.paddingX} max-w-7xl mx-auto relative z-20 mt-20 mb-6`}
  >
    <div className="bg-tertiary rounded-2xl shadow-card grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          variants={fadeIn("up", "spring", i * 0.15, 0.75)}
          className="flex flex-col items-center text-center"
        >
          <h3 className="text-[#915EFF] font-black text-[36px] sm:text-[44px] leading-none">
            <CountUp value={s.value} />
          </h3>
          <p className="text-secondary text-[14px] sm:text-[16px] mt-2">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Stats;
