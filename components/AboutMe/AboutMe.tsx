import { BubbleBackground } from '../animate-ui/components/backgrounds/bubble'
import { EvervaultCard } from '../AnimatedPhotoCard/AnimatedPhotoCard';


const AboutMe = () => {
    return (
        <div className=''>
            <BubbleBackground id='AboutMeSection' className='min-h-screen bg-[#0B0E14]'>
                <div className='grid grid-cols-2 gap-10 relative z-10 mx-30 mt-20 mb-15 items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-8xl mb-3 font-serif'>Brandon Estrada</h1>
                        <h3 className='text-[56px] mb-3'>Code-First Learning</h3>
                        <p className='text-2xl text-white bg-slate-800/40 p-6 rounded-2xl'>
                            I've been passionate about tech on the consumer level, which started the interest in learning more about tech on the developer side. To deepen my skills, I joined CodeStack Academy to become a software engineer. My time at CodeStack has allowed me to learn various concepts and languages such as C#, HTML/CSS, JavaScript, and Next.JS framework. My goal after the academy is to join the tech industry as a developer and help improve the user experience whether it be through front-end or back-end development.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <EvervaultCard className="w-96 h-96">
                            <img
                                src="../assets/stock-image-avatar3.jpg"
                                alt=""
                                className="rounded-full w-full h-full object-cover"
                            />
                        </EvervaultCard>
                    </div>
                </div>
                <div className='relative z-10 mx-30 pb-20'>
                    <h3 className='text-[64px] pb-4'>Skills</h3>
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-20'>
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
                                <i className="devicon-mapbox-original text-[60px]"></i>
                                <img alt='Postman Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                                <img alt='VS Code Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                                <i className="devicon-github-original text-[50px]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </BubbleBackground >
        </div >
    )
}

export default AboutMe




// import React from 'react'
// import { BubbleBackground } from '../animate-ui/components/backgrounds/bubble'
// import { EvervaultCard } from '../AnimatedPhotoCard/AnimatedPhotoCard'

// const AboutMe = () => {
//     return (
//         <div className=''>
//             <BubbleBackground className='min-h-screen bg-[#0B0E14]'>
//                 <div className='grid grid-cols-2 grid-rows-1 relative z-10 mx-30 my-30'>
//                     <div className='grid col-span-1'>
//                         <h1 className='text-8xl mb-3 font-serif'>Brandon Estrada</h1>
//                         <h3 className='text-6xl mb-3'>Code-First Learning</h3>
//                         <p className='text-3xl text-white bg-slate-500/40 p-4 rounded-2xl'>I've been passionate about tech on the consumer level, which started the interest in learning more about tech on the developer side. To deepen my skills, I joined CodeStack Academy to become a software engineer. My time at CodeStack has allowed me to learn various concepts and languages such as C#, HTML/CSS, JavaScript, and Next.JS framework. My goal after the academy is to join the tech industry as a developer and help improve the user experience whether it be through front-end or back-end development.</p>
//                         <div className='grid place-content-center mx-auto'>
//                             <EvervaultCard className="w-100 h-100">
//                                 <img src="../assets/stock-image-avatar3.jpg" alt="" />
//                                 {/* <img
//                             src="../assets/stock-image-avatar3.jpg"
//                             alt="Brandon Estrada"
//                             className="rounded-full w-full h-full object-cover border-2 border-slate-500"
//                             /> */}
//                             </EvervaultCard>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='relative z-10'>

//                     <h3 className='text-[56px]'>Skills</h3>
//                     <div className='grid grid-cols-2 grid-rows-2'>
//                         <div>
//                             <h5 className='text-[32px]'>Libraries</h5>
//                             <div>
//                                 <img alt='React Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
//                             </div>
//                         </div>
//                         <div className='grid'>
//                             <h5 className='text-[32px]'>Languages</h5>
//                             <div>
//                                 <img alt='CSharp Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
//                                 <img alt='CSS3 Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
//                                 <img alt='HTML 5 Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

//                             </div>
//                         </div>
//                         <div>
//                             <h5 className='text-[32px]'>FrameWorks</h5>
//                             <div>
//                                 <img alt='Tailwind CSS Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
//                                 <img alt='BootStrap Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
//                                 <img alt='Next.JS Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
//                             </div>
//                         </div>
//                         <div>
//                             <h5 className='text-[32px]'>Productivity</h5>
//                             <div>
//                                 <img alt='Mapbox Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mapbox/mapbox-original.svg" />
//                                 <img alt='Postman Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
//                                 <img alt='Microsoft VS Code Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
//                                 <img alt='Github Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
//                                 <img alt='Notion Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
//                                 <img alt='Azure Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
//                                 <img alt='Slack Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
//                                 <img alt='Figma Logo' width={50} height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </BubbleBackground >
//         </div >
//     )
// }

// export default AboutMe