import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import ContributionGraph from "@/components/ContributionGraph";
import SkillsGithub from "@/components/SkillsGithub";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-3xl px-4 sm:px-6 py-6 sm:py-8 mx-auto flex flex-col gap-6">
        <Intro />
        <ContributionGraph />
        <SkillsGithub />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

