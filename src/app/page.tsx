import Title from "@/components/Title";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="space-y-30 max-w-[1100px] mx-auto bg-gray-200 dark:bg-dark-5 px-[clamp(1em,4vw,5em)] pb-[clamp(1em,3vw,3em)] shadow-xl shadow-gray-400 dark:shadow-none">
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
