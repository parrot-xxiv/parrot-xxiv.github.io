import React, { ForwardedRef } from "react";
import data from '@/content/data.json';

function Tag({ tagName }: { tagName: string }) {
  return <span
    className="group-hover:text-slate-200 transition-all mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">
    {tagName}
  </span>
}

export default function Experience({ id, ref }: { id: string, ref: ForwardedRef<HTMLElement> }) {

  return (
    <section id={id} ref={ref} className="section w-full lg:w-[600px] py-10">
      <article>
        <h2 className="block lg:hidden sticky top-0 py-4 text-xl text-slate-200 bg-slate-900 backdrop-blur bg-opacity-40">
          Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(120px,auto)_1fr] lg:mt-10">
          {data.experience.map((exp, i) => {
            return <React.Fragment key={i}>
              <time dateTime={exp.datetime} className="m-5 italic text-sm">{exp.date}</time>
              <div className="mb-10 transition-all duration-500 p-4 rounded group hover:bg-teal-400/10 cursor-pointer">
                <h3 className="font-bold text-slate-200">
                  {exp.title}
                </h3>
                <p className="mt-3 text-justify">
                  {exp.description}
                </p>
                <div className="flex flex-wrap mt-3">
                  {exp.tags.map((t, ti) => <Tag key={ti} tagName={t} />)}
                </div>
              </div>
            </React.Fragment>
          })}
        </div>
      </article>
    </section>

  );
}