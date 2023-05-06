const CTAInstagram = () => (
  <div className="flex items-center gap-2 justify-center flex-wrap p-2 md:p-10 md:justify-between mt-20 bg-[#ae0000] rounded-xl">
    <h3 className="font-bold lg:text-[2vw] md:text-[3vw] sm:text-[3vw] text-md text-white">
      ¡Quiero ver más!
    </h3>
    <button
      type="button"
      className="flex items-center h-fit p-3 bg-white rounded-xl hover:bg-black hover:text-white"
    >
      <a
        href="https://www.instagram.com/mtm_s.e/"
        rel="noreferrer"
        target="_blank"
      >
        Ir a Instagram
      </a>
    </button>
  </div>
);

export default CTAInstagram;
