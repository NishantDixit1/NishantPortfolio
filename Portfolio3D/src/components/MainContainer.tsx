import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // The career/experience reveal normally comes from setAllTimeline(), which
  // only runs as part of the 3D character loader, so the section never
  // animated on phones and tablets.
  //
  // That timeline is scroll-scrubbed and tuned for the desktop layout, so
  // rather than run it here, small screens get a simple observer-driven
  // reveal. The hidden state is applied by this effect, which means the
  // section stays visible if the script never runs.
  useEffect(() => {
    if (isDesktopView) return;

    const timer = setTimeout(() => {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(".career-info-box")
      );
      if (!cards.length) return;

      cards.forEach((card) => card.classList.add("reveal-init"));

      const reveal = (card: HTMLElement, index: number) => {
        card.style.transitionDelay = `${Math.min(index, 4) * 80}ms`;
        card.classList.add("reveal-in");
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const card = entry.target as HTMLElement;
            reveal(card, cards.indexOf(card));
            observer.unobserve(card);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      cards.forEach((card) => observer.observe(card));

      // If the observer never fires, show everything rather than leave the
      // section blank.
      const failsafe = setTimeout(() => {
        cards.forEach(reveal);
        observer.disconnect();
      }, 6000);

      cleanup = () => {
        clearTimeout(failsafe);
        observer.disconnect();
      };
    }, 300);

    let cleanup: (() => void) | undefined;
    return () => {
      clearTimeout(timer);
      cleanup?.();
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStackNew />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
