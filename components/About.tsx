import React, { ForwardedRef } from "react";
import data from '@/content/data.json';

export default function About({ id, ref }: { id: string, ref: ForwardedRef<HTMLElement> }) {
  return (
    <section id={id} ref={ref} className="section w-full lg:w-[600px]">
      <article>
        <div
          className="block lg:hidden sticky top-0 py-4 text-xl text-slate-200 bg-slate-900 backdrop-blur bg-opacity-40">
          About
        </div>
        {data.about.map((p, i) => {
          return <p className="mb-2 text-justify" key={i}>{p}</p>
        })}
      </article>
    </section>
  );
}