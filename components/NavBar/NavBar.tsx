import { ThemeInit } from "@/.flowbite-react/init";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Bug, Code, HomeIcon, Icon } from "lucide-react";

const NavBar = () => {
    return (
        <div className="">
            <Navbar id="NavBar" className="dark:bg-[#1A1F29]" fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <Bug className="me-2" color="#A855F7"></Bug>
                    {/* <Code className="me-2" color="#A855F7"></Code> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Brandon</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button color={"#A855F7"} className="bg-[#A855F7]">Contact</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink active href="#AboutMeSection">About Me</NavbarLink>
                    <NavbarLink active href="#ProjectsSection">Projects</NavbarLink>
                    <NavbarLink active href="#AboutMeSection">Skills</NavbarLink>
                    <NavbarLink active href="#ContactSection">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default NavBar