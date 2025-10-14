import Title from "@/components/Title";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="space-y-30">
      <Title />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Resume />
      <Contact />
    </main>
  );
}
