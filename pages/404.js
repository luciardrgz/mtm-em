const Custom404 = () => (
  <section className="h-screen w-full flex flex-col justify-center items-center bg-black">
    <h1 className="text-5xl font-extrabold text-white tracking-widest">404</h1>
    <div className="bg-[#ae0000] px-2 text-white text-md rounded rotate-[8deg] absolute">
      La página no existe!
    </div>
    <button type="button" className="mt-5">
      <a href="/" className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ae0000] group-hover:translate-y-0 group-hover:translate-x-0" />

        <span className="relative block px-8 py-3 bg-[#1a1a1a] border border-[#ae0000]">
          Volver a MTM
        </span>
      </a>
    </button>
  </section>
);

export default Custom404;
