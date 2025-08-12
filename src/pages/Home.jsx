// src/pages/PortfolioHome.jsx
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";
import Courses from "../components/Home/Courses";

export default function Home() {
  return (
    <div className="space-y-24">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
