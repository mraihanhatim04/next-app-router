export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 mt-32 text-2xl font-semibold leading-none md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-red-500 to-sky-500">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          At <span className="underline decoration-sky-500">LandKreateGg</span>{" "}
          we focus on markets where{" "}
          <span className="underline decoration-teal-500">technology</span>,
          innovation and capital can unlock long-term value and drive your
          <span className="underline decoration-red-500">company's growth</span>
        </p>
        <div className="flex flex-col gap-4  sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
