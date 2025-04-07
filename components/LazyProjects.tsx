'use client';

import { useEffect, useState, useRef } from 'react';
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

export default function LazyProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!isMounted) {
    return <section id="projects" className="section w-full lg:w-[600px] py-10 min-h-[300px]"></section>;
  }

  return (
    <section ref={sectionRef} id="projects" className="section w-full lg:w-[600px] py-10">
      <h2 className="block lg:hidden sticky top-0 py-4 text-xl text-slate-200 bg-slate-900 backdrop-blur-sm bg-opacity-40">
        Projects
      </h2>
      <div className="block">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row mb-10">
          <div className="bg-slate-800 rounded mb-5 mr-5 w-full md:w-1/3">
            <OptimizedImage src="/images/tgi.png" alt="TGI Demo" width={600} height={400} className="w-full" />
          </div>
          <div className="w-full md:w-2/3">
            <Link href="/demo-tgi" target="_blank" className="group flex">
              <h3 className="font-bold text-slate-200">TGI Demo</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true">
                <path fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
            <p className="text-justify">
              Demo version of TGI website showcases the company's services, products, and
              values, offering visitors a professional
              and user-friendly experience to explore its solutions and expertise.
            </p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="flex flex-col md:flex-row mb-10">
          <div className="bg-slate-800 rounded mb-5 mr-5 w-full md:w-1/3">
            <OptimizedImage src="/images/600x400.webp" alt="Demo" width={600} height={400} className="w-full" />
          </div>
          <div className="w-full md:w-2/3">
            <Link href="/#" className="group flex">
              <h3 className="font-bold text-slate-200">Another Project</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true">
                <path fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
            <p className="mt-3 text-justify">
              Work in progress...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
