import AboutMe from "@/components/AboutMe/AboutMe";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { LightRaysBackground } from "@/components/animate-ui/components/backgrounds/lightrays-background";
import FooterSection from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Project1 } from "@/components/ProjectsSection/Project1/Project1";
import { Project2 } from "@/components/ProjectsSection/Project2/Project2";
import { Project3 } from "@/components/ProjectsSection/Project3/Project3";
import { Socials } from "@/components/SocialsFloatingDock/Socials";
import { GravityStarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground";
import { Code } from "lucide-react";
import { FolderIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

export default function Home() {
  const socialLinks = [
    { title: "GitHub", icon: <GithubIcon size={24} />, href: "https://github.com/loopbutinfinite" },
    { title: "Resume", icon: <FolderIcon size={24} />, href: "https://docs.google.com/document/d/1cjeaB49VrEQPYVjy3cmvY61onA2ww5HiybgMxBPR12o/edit?usp=sharing" },
    { title: "LinkedIn", icon: <LinkedinIcon size={24} />, href: "https://www.linkedin.com/in/brandon-estrada-976546266/" },
  ];
  return (
    <div className="bg-[#0B0E14]">
      <NavBar />
      <AboutMe />
      <BubbleBackground className=' z-0 bg-[#0B0E14]'>
      <div id="ProjectsSection" className="pb-30 py-5 pt-20">
        <div className="flex mt-15 lg:justify-start justify-center">
          <h3 className="text-7xl lg:text-9xl font-serif lg:ms-20 z-10">Projects</h3>
          <Code className="z-10" color="#A855F7" size={56} strokeWidth={1.5}></Code>
        </div>
        <div className="grid grid-cols-1 lg:grid-rows-1 grid-rows-3 lg:grid-cols-3 justify-center gap-3">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
      </BubbleBackground >
      <Socials items={socialLinks} />
      <FooterSection />
    </div>
  );
}
