import AboutMe from "@/components/AboutMe/AboutMe";
import FooterSection from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Project1 } from "@/components/ProjectsSection/Project1/Project1";
import { Project2 } from "@/components/ProjectsSection/Project2/Project2";
import { Project3 } from "@/components/ProjectsSection/Project3/Project3";
import { Socials } from "@/components/SocialsFloatingDock/Socials";
import { Code } from "lucide-react";
import { FolderIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

//Sections we need:
//About me section
//Projects section
//Skills Section
//Contact info (phone number, email)
//Links to LinkedIn, GitHub, and Resume

export default function Home() {
  const socialLinks = [
        { title: "GitHub", icon: <GithubIcon size={24} />, href: "https://github.com/yourprofile" },
        { title: "Resume", icon: <FolderIcon size={24} />, href: "mailto:your@email.com" },
        { title: "LinkedIn", icon: <LinkedinIcon size={24} />, href: "https://linkedin.com/in/yourprofile" },
    ];
  return (
    <div className="bg-[#0B0E14]">
      <NavBar />
      <AboutMe />
      <div id="ProjectsSection" className="pb-30">
        <div className="flex mt-15">
          <h3 className="text-9xl font-serif ms-30">Projects</h3>
          <Code color="#A855F7" size={56} strokeWidth={1.5}></Code>
        </div>
        <div className="flex justify-center gap-20">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
      <Socials items={socialLinks}/>
      <FooterSection />
    </div>
  );
}
