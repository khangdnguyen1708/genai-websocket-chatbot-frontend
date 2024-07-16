import ChatDetails from './components/ChatDetails';

export default function Home() {
  return (
    <div className="min-h-full">
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-100" src="https://www.cloud-kinetics.com/wp-content/uploads/2023/07/CloudKinetics-Logo.svg" alt="Cloud Kinetics" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="https://www.cloud-kinetics.com/about-ck/" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">About</a>
                  <a href="https://www.cloud-kinetics.com/success-stories/" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Success Stories</a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section className="bg-gray-50">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Welcome to Cloud-Kinetics Vietnam GenAI Demo</h1>
                <p className="max-w-2xl mb-6 font-light text-stone-500 lg:mb-8 md:text-lg lg:text-xl">Experience cutting-edge generative AI solutions designed to transform industries, enhance decision-making, and drive efficiency. Discover the future of AI with us today.</p>
                <a href="mailto:info_vn@cloud-kinetics.com" className="inline-flex items-center justify-center px-5 py-3 text-white font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-sky-950 hover:bg-sky-800 hover:text-gray-200">
                  Contact Us
                </a>
                {/* <a href="mailto:info_vn@cloud-kinetics.com" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-emerald-400 hover:bg-emerald-500 hover:text-gray-200">
                  Contact Us
                </a> */}
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://cloudkinetics.cloud/assets/%E6%A8%A1%E6%8B%9F%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE.2c18bdbe.svg" alt="mockup" />
              </div>
            </div>
          </section>

        </div>
        <ChatDetails />
        <div className='fixed bottom-0 w-full'>
        </div>
      </main>
    </div>
  );
}
