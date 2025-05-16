'use client'
// import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
// import Loading from '@/components/Loading';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { useEffect, useRef, useState } from 'react';

// Dynamic import with no SSR for Three.js component
// const DynamicBackgroundCanvas = dynamic(
//   () => import('@/components/BackgroundCanvas'),
//   { ssr: false, loading: () => <div/> }
// );

// const LazyProjects = dynamic(() => import('@/components/LazyProjects'), 
//   { ssr: false, loading: () => <Loading />
// });

  export default function Home() {

  const [activeSection, setActiveSection] = useState<string>('');

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    about: null,
    experience: null,
    projects: null,
  });

  useEffect(() => {

    const handleScroll = () => {
      let currentSection = '';

      Object.keys(sectionsRef.current).forEach((sectionId) => {
        const section = sectionsRef.current[sectionId];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // initial section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to set the ref for each section
  function setSectionRef(sectionId: string) {
    return (el: HTMLElement | null) => {
      sectionsRef.current[sectionId] = el;
    };
  }

  return (
    <>
      {/* <DynamicBackgroundCanvas /> */}
      <BackgroundCanvas />
      <div className="text-slate-400">
        <div className="flex flex-col lg:flex-row">
          <Header activeSection={activeSection} />
          <div className="w-full lg:w-1/2 px-10 lg:px-0 lg:pt-20">
            <main>
              <About id="about" ref={setSectionRef('about')} />
              <Experience id="experience" ref={setSectionRef('experience')}  />
              <Projects id="projects" ref={setSectionRef('projects')} />
            </main>
            <footer></footer>
          </div>
        </div>
      </div>
    </>
  );
}