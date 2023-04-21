const CTAInstagram = () => (
  <div className="flex items-center lg:justify-start md:justify-start justify-center flex-wrap p-10 mt-20 bg-[#ae0000] rounded-xl">
    <h3 className="font-bold lg:text-[2vw] md:text-[3vw] sm:text-[3vw] text-[6vw] text-white lg:mt-0 md:mt-0 mt-5">
      ¡Quiero ver más!
    </h3>
    <button
      type="button"
      className="flex items-center h-fit p-3 bg-white rounded-xl lg:ml-[45rem] md:ml-[45rem] hover:bg-black hover:text-white"
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
