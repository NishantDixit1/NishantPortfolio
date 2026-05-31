import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Stats,
  Highlights,
  Skills,
  Expertise,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Stats />
        <About />
        <Highlights />
        <div className="relative z-0 bg-primary">
          <Education />
        </div>
        <Experience />
        <Expertise />
        <Tech />
        <Skills />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
