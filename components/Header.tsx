import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex lg:justify-end w-full lg:w-1/2">
      <div className="lg:fixed lg:h-screen">
        <div className="flex flex-col h-full lg:justify-between p-10 lg:pr-40 lg:p-20">
          <div>
            <h1 className="text-5xl text-slate-200 font-bold mb-5">
              Eldren Par
            </h1>
            <h2 className="text-slate-200 text-xl">Web Developer</h2>
            <p className="mt-5">I'm crafting web solutions—minus the chaos.</p>
            <nav className="hidden lg:block">
              <ul className="justify-center p-4">
                <li className="flex group">
                  <span data-target="about"
                    className="bg-white relative top-3 h-[1px] w-4 group-hover:w-10 transition-all"></span>
                  <Link href="#about" className="ml-4 group-hover:text-white">
                    About
                  </Link>
                </li>
                <li className="flex group">
                  <span data-target="experiences"
                    className="bg-white relative top-3 h-[1px] w-4 group-hover:w-10 transition-all"></span>
                  <Link href="#experiences" className="ml-4 group-hover:text-white">
                    Experiences
                  </Link>
                </li>
                <li className="flex group">
                  <span data-target="projects"
                    className="bg-white relative top-3 h-[1px] w-4 group-hover:w-10 transition-all"></span>
                  <Link href="#projects" className="ml-4 group-hover:text-white">
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-5 mt-5">
            <a href="https://github.com/parrot-xxiv">
              <Image src="/github-142.svg" alt="Github Logo" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/eldren-par/">
              <Image src="/linkedin-fill.svg" alt="Linkedin Logo" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}