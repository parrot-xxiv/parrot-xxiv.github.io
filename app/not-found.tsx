'use client';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import data from "@/content/data.json"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <BackgroundCanvas />
      <div className="text-center p-8 rounded-lg backdrop-blur-sm bg-slate-900/30 border border-slate-700/50 max-w-md z-10">
        <h1 className="text-7xl font-bold mb-2 text-white">404</h1>
        <div className="h-0.5 w-20 bg-cyan-500 mx-auto mb-6" />
        <h2 className="text-2xl font-semibold mb-4 text-slate-200">Lost in Space</h2>
        <p className="mb-6 text-slate-300">{data.notfoundmsg}</p>
        <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-cyan-400 hover:bg-cyan-500 transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}