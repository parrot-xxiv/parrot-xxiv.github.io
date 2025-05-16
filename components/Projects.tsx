'use client';
import { ForwardedRef, Fragment, useState } from 'react';
import OptimizedImage from './OptimizedImage'; // Assuming this component is correctly set up
import Link from 'next/link';
import data from '@/content/data.json'; // Ensure this path is correct and data.projects exists
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

// Define a type for your project data for better type safety
interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

// Assuming your data.json has a structure like: { "projects": Project[] }
const allProjects: Project[] = data.projects;

export default function Projects({ id, ref }: { id: string; ref: ForwardedRef<HTMLElement> }) {
  const [isOpen, setIsOpen] = useState(false);

  // Initially display 4 projects
  const initialProjects = allProjects.slice(0, 4);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id={id} ref={ref} className="section w-full lg:w-[600px] py-10 min-h-screen">
      <h2 className="block lg:hidden sticky top-0 py-4 text-xl font-semibold text-slate-200 bg-slate-900/70 backdrop-blur-sm z-10">
        Projects
      </h2>
      {/* Display initial projects here */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10" id="projects-grid">
        {initialProjects.map((project, idx) => (
          <div
            key={idx || project.title} // Use a unique ID if available, otherwise title
            className="project-item group relative flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-md transition-all duration-300 ease-in-out hover:bg-slate-800/50"
          >
            <div className="w-full sm:w-1/3 shrink-0">
              <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.title}`}>
                <OptimizedImage
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={200} // Adjusted for a smaller initial display
                  height={120}
                  className="rounded border-2 border-slate-700/50 group-hover:border-slate-600 transition-all duration-300 ease-in-out w-full h-auto aspect-[16/10] object-cover"
                />
              </Link>
            </div>
            <div className="w-full sm:w-2/3">
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mb-2 group">
                <h3 className="font-semibold text-lg text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 ml-1 text-slate-400 group-hover:text-teal-300"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <p className="text-sm text-justify text-slate-400 leading-relaxed">
                {project.description}
              </p>
              {project.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-0.5 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button to open modal */}
      {allProjects.length > 4 && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={openModal}
            className="px-6 py-3 text-slate-100 cursor-pointer rounded-lg text-sm hover:bg-teal-500/20 transition-colors duration-300 focus:outline-none"
          >
            View All Projects ({allProjects.length})
          </button>
        </div>
      )}

      {/* Modal Dialog for All Projects */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* Overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
          </TransitionChild>

          {/* Modal Content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all"> {/* Increased max-w for 3 cols */}
                  <DialogTitle
                    as="h3"
                    className="text-xl font-bold leading-6 text-slate-100 flex justify-between items-center mb-6" /* Added mb-6 */
                  >
                    All Projects
                    <button
                      type="button"
                      className="rounded-md p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                      onClick={closeModal}
                      aria-label="Close modal"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </DialogTitle>
                  {/* Grid for projects in modal */}
                  <div className="max-h-[70vh] overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 scrollbar-custom">
                    {allProjects.map((project, i) => (
                      <div
                        key={i || project.title}
                        className="project-card-modal group bg-slate-800/50 hover:bg-slate-700/70 p-4 rounded-lg flex flex-col gap-3 transition-all duration-200 ease-in-out" // Changed class name and structure
                      >
                        <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.title}`} className="block">
                          <OptimizedImage
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            width={300} // Adjust as needed for card layout
                            height={180} // Maintain aspect ratio
                            className="rounded border border-slate-700 group-hover:border-slate-600 transition-colors w-full h-auto aspect-[16/10] object-cover"
                          />
                        </Link>
                        <div>
                          <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mb-1 group/link">
                            <h4 className="font-semibold text-md text-slate-100 group-hover/link:text-teal-300 transition-colors">
                              {project.title}
                            </h4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-in-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ml-1 text-slate-400 group-hover/link:text-teal-300"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3"> {/* line-clamp to manage text length */}
                            {project.description}
                          </p>
                          {project.tags && project.tags.length > 0 && (
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-block px-2 py-0.5 text-[10px] font-medium text-teal-300 bg-teal-400/10 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}


