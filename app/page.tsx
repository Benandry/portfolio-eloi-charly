"use client";

import Home from "@/components/pages/Home";
import Skills from "@/components/pages/Skills";
import Experiences from "@/components/pages/Experiences";
import Education from "@/components/pages/Education";
import Projects from "@/components/pages/Project";
import Contact from "@/components/pages/Contact";

export default function Page() {
  return (
    <>
      <Home />
      <Skills />
      <Experiences />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}