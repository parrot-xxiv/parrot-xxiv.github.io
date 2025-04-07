'use client'
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Loading from '@/components/Loading';

// Dynamic import with no SSR for Three.js component
const DynamicBackgroundCanvas = dynamic(
  () => import('@/components/BackgroundCanvas'),
  { ssr: false, loading: () => <div className="fixed inset-0 bg-slate-900" /> }
);

const LazyProjects = dynamic(() => import('@/components/LazyProjects'), {
  loading: () => <Loading />
});

export default function Home() {
  return (
    <>
      <DynamicBackgroundCanvas />
      <div className="text-slate-400">
        <div className="flex flex-col lg:flex-row">
          <Header />
          <div className="w-full lg:w-1/2 px-10 lg:px-0 lg:pt-20">
            <main>
              <About />
              <Experience />
              <Suspense fallback={<Loading />}>
                <LazyProjects />
              </Suspense>
            </main>
            <footer></footer>
          </div>
        </div>
      </div>
    </>
  );
}