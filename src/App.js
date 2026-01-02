import React from "react";
import Header from "./components/header";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/Education";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
