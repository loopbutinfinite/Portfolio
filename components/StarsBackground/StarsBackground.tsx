import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { Code } from 'lucide-react';
import { Project1 } from '../ProjectsSection/Project1/Project1';
import { Project2 } from '../ProjectsSection/Project2/Project2';
import { Project3 } from '../ProjectsSection/Project3/Project3';

export const GravityStarsBackgroundDemo = () => {
  return (
    <>
    <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
    <div id="ProjectsSection" className="pb-30">
        <div className="flex mt-15">
          <h3 className="text-9xl font-serif ms-30">Projects</h3>
          <Code color="#A855F7" size={56} strokeWidth={1.5}></Code>
        </div>
        <div className="flex justify-center gap-6">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
      </>
  );
};