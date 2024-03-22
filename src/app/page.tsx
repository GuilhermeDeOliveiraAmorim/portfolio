import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}
