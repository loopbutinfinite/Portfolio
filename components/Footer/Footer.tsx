import { FooterBrand, FooterLinkGroup, FooterLink, FooterDivider, FooterCopyright, Footer } from 'flowbite-react'
import { Code, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

const FooterSection = () => {
    return (
        <Footer id='ContactSection' container className='dark:bg-[#1A1F29]'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <div className='flex gap-2'>
                        <Code color='#A855F7' className='my-auto'></Code> 
                        <p className='text-3xl'>Brandon</p>
                    </div>
                    <FooterLinkGroup>
                        <FooterLink className='hover:underline hover:text-[#A855F7]' href="#">Back to top</FooterLink>
                    </FooterLinkGroup>
                </div>
                <div className='grid place-content-center'>
                    <div className='flex gap-3 mb-3'>
                        <PhoneIcon></PhoneIcon>
                        <p>(209) 922-3955</p>
                    </div>
                    <div className='flex gap-3 mb-5'>
                        <MailIcon></MailIcon>
                        <p>bestrada8800@gmail.com</p>
                    </div>
                </div>
                <FooterCopyright href="#NavBar" by="Brandon Estrada™" year={2026} />
            </div>
        </Footer>
    )
}

export default FooterSection;