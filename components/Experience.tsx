export default function Experience() {
  return (
    <section id="experiences" className="section w-full lg:w-[600px] py-10">
      <article>
        <h2
          className="block lg:hidden sticky top-0 py-4 text-xl text-slate-200 bg-slate-900 backdrop-blur bg-opacity-40">
          Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(120px,auto)_1fr] lg:mt-10">
          {/* Row 1 */}
          <time dateTime="2023/2024" className="m-5 italic text-sm">2023 - PRESENT</time>
          <a href="#" className="mb-10 transition-all duration-500 p-4 rounded hover:bg-teal-400/10">
            <h3 className="font-bold text-slate-200">
              Technology Engineer | Trends & Technologies, Inc.
            </h3>
            <p className="mt-3 text-justify">
              In this role, I focused on integrating various products
              and systems to work together efficiently. I ensured smooth
              data flow between platforms and resolved any technical
              challenges that came up. If a new product needed to be
              plugged into the system, I was the one making it happen
              without a hitch.
            </p>
            <div className="flex flex-wrap mt-3">
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Docker
              </span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Kubernetes
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Cloud
                Computing
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Shell
                Scripting
              </span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Automation
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Linux
              </span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Deployment
              </span>
            </div>
          </a>

          {/* Row 2 */}
          <time dateTime="2022/2023" className="m-5 italic text-sm">2022 - 2023</time>
          <a href="#" className="mb-10 transition-all duration-500 p-4 rounded hover:bg-teal-400/10">
            <h3 className="font-bold text-slate-200">
              Developer | Trends & Technologies, Inc.
            </h3>
            <p className="mt-3 text-justify">
              Because I don't just stop at the front-end, I also worked
              on the backend. I handled and maintained internal tools,
              ensuring everything ran like clockwork behind the scenes.
              Whether it was fixing bugs or optimizing performance, I
              made sure nothing slipped through the cracks.
            </p>
            <div className="flex flex-wrap mt-3">
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">React
              </span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Express.js</span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">TypeScript</span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Microservices
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Git
              </span>
            </div>
          </a>

          {/* Row 3 */}
          <time dateTime="2021/2022" className="m-5 italic text-sm">2021 - 2022</time>
          <a href="#" className="mb-10 transition-all duration-500 p-4 rounded hover:bg-teal-400/10">
            <h3 className="font-bold text-slate-200">
              Front-end Developer | Trends & Technologies, Inc.
            </h3>
            <p className="mt-3 text-justify">
              I spent my time building WordPress websites from the
              ground up—custom themes, plugins, the whole shebang. I
              worked with ACF (Advanced Custom Fields) and advanced
              templating to make sure everything looked sharp and worked
              smoothly. Plus, I made sure those websites were
              SEO-friendly, optimizing them so they not only looked good
              but also performed well on search engines. If WordPress
              was a canvas, I was the one painting on it—making sure
              people could find it too.
            </p>
            <div className="flex flex-wrap mt-3">
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">WordPress</span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">PHP</span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">HTML +
                CSS
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">JQuery
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">CMS
              </span>
              <span className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">SEO
              </span>
            </div>
          </a>

          {/* Row 4 */}
          <time dateTime="2017/2020" className="m-5 italic text-sm">2017 - 2020</time>
          <a href="#" className="mb-10 transition-all duration-500 p-4 rounded hover:bg-teal-400/10">
            <h3 className="font-bold text-slate-200">
              Service Engineer | Diagnostika Pilipinas, Inc.
            </h3>
            <p className="mt-3 text-justify">
              My first job wasn't in programming—I was all over the
              country, repairing medical devices. I worked on the front
              lines, making sure essential equipment was up and running
              smoothly. It wasn't glamorous, but it taught me how to
              troubleshoot on the fly and always stay calm under
              pressure. I figured out how to make things work, even when
              they didn't want to.
            </p>
            <div className="flex flex-wrap mt-3">
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Networking</span>
              <span
                className="mt-2 mr-2 bg-teal-400/10 px-3 py-1 rounded-full text-xs text-teal-300 leading-5">Hardware</span>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}