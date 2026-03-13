"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Bug } from "lucide-react";

const NavBar = () => {
    return (
        <div className="">
            <Navbar id="NavBar" className="dark:bg-[#1A1F29] z-10" fluid rounded>
                <NavbarBrand>
                    <Bug className="me-2" color="#A855F7"></Bug>
                    {/* <Code className="me-2" color="#A855F7"></Code> */}
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Brandon</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    {/* <Button color={"#A855F7"} href="#ContactSection" className="bg-[#A855F7]">Contact</Button> */}
                    <NavbarToggle className="dark:bg-[#A855F7]" />
                </div>
                <NavbarCollapse className="">
                    <NavbarLink className="hover:underline hover:bg-[#A855F7] md:text-lg" active href="#AboutMeSection">About Me</NavbarLink>
                    <NavbarLink className="hover:underline hover:bg-[#A855F7] md:text-lg" active href="#ProjectsSection">Projects</NavbarLink>
                    <NavbarLink className="hover:underline hover:bg-[#A855F7] md:text-lg" active href="#SkillsSection">Skills</NavbarLink>
                    <NavbarLink className="hover:underline hover:bg-[#A855F7] md:text-lg" active href="#ContactSection">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default NavBar