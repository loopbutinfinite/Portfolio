"use client";
import { BubbleBackground } from '../animate-ui/components/backgrounds/bubble'
import { EvervaultCard } from '../AnimatedPhotoCard/AnimatedPhotoCard';
import Particles from '../animate-ui/components/backgrounds/particlesbackground';

const AboutMe = () => {
    return (
        <div className='relative w-full h-full bg-[#0B0E14]'>
            {/* <BubbleBackground id='AboutMeSection' className='min-h-screen bg-[#0B0E14]'> */}
            <div className='absolute inset-0 z-10 pointer-events-none'>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={400}
                    particleSpread={10}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                    className='w-full h-full bg-black'
                />
            </div>
            <div className='relative inset-0 z-10'>
                <div className='grid lg:grid-rows-1 lg:grid-cols-2 gap-10 z-10 md:mx-20 lg:mx-30 lg:pt-20 mb-10 lg:mb-15 items-center'>
                    <div className='flex justify-center lg:order-1 order-1'>
                        <EvervaultCard className="w-96 h-96">
                            <img
                                src="../assets/IMG_3292.jpg"
                                alt=""
                                className="rounded-full min-h-[300px] min-w-[300px] object-cover"
                            />
                        </EvervaultCard>
                    </div>
                    <div className='flex flex-col lg:order-2 order-2'>
                        <h1 className='text-6xl text-center lg:text-7xl mb-3 font-serif'>Brandon Estrada</h1>
                        <h3 className='text-center text-4xl lg:text-[56px] mb-3'>Code-First Learning</h3>
                        <p className='text-2xl mx-5 md:mx-0 text-center text-white bg-slate-800/40 p-4 rounded-2xl'>
                            I've been passionate about tech on the consumer level, which started the interest in learning more about tech on the developer side. To deepen my skills, I joined CodeStack Academy to become a software engineer. My time at CodeStack has allowed me to learn various concepts and languages such as C#, HTML/CSS, JavaScript, and Next.js framework. My goal after the academy is to join the tech industry as a developer and help improve the user experience whether it be through front-end or back-end development.
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative z-20 md:mx-20 pb-20'>
                <div className='ms-10 md:ms-0'>
                    <h3 id='SkillsSection' className='text-[64px] pb-4'>Skills</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start lg:grid-rows-1 gap-y-12 gap-x-20'>
                        <div>
                            <h5 className='text-[32px] text-white mb-4'>Libraries</h5>
                            <div className='flex gap-4 flex-wrap'>
                                <img alt='React Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[32px] text-white mb-4'>Languages</h5>
                            <div className='flex gap-4 flex-wrap'>
                                <img alt='CSharp Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                                <img alt='CSS3 Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                <img alt='HTML 5 Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[32px] text-white mb-4'>Frameworks</h5>
                            <div className='flex gap-4 flex-wrap'>
                                <img alt='Tailwind CSS Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                <img alt='BootStrap Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                <img alt='Next.JS Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[32px] text-white mb-4'>Productivity</h5>
                            <div className='flex gap-4 flex-wrap'>
                                {/* <img alt="Mapbox Logo" width={50} height={50} src="/assets/mapbox-icon.svg" /> */}
                                <img alt='Postman Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                                <img alt='VS Code Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                                <img alt='Github Logo' width={50} height={50} src="/assets/github-icon.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </BubbleBackground > */}
        </div >
    )
}

export default AboutMe