import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative w-full">
      <div className="hidden items-center justify-between gap-10 rounded-2xl border-[1px] border-[#571464] bg-[#3c193f]  px-14 py-5 backdrop-blur-md xl:flex">
        <a
          className="flex items-center gap-4 text-gray transition-all duration-300 hover:grayscale-0 grayscale-0 activeLink"
          href=""
        >
          {/* <img
            alt=""
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            style="color:transparent"
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrass.7f379efc.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrass.7f379efc.png&amp;w=48&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrass.7f379efc.png&amp;w=48&amp;q=75"
          /> */}
          Strona główna
        </a>
        <a
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href=""
        >
          {/* <img
            alt=""
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            style="color:transparent"
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiamond.6f8d87bc.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiamond.6f8d87bc.png&amp;w=48&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiamond.6f8d87bc.png&amp;w=48&amp;q=75"
          /> */}
          Ranking wiadomości
        </a>
        <a
          target="_blank"
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href="https://mapa.spacefun.pl"
        >
          Ranking emotkersów
        </a>
        <a
          target="_blank"
          className="flex items-center gap-4 text-gray grayscale transition-all duration-300 hover:grayscale-0"
          href="https://discord.gg/spacefun"
        >
          Najczęściej używane emotki
        </a>
      </div>
      <div className="right-0 top-full from-bg/50 absolute z-10 hidden flex-col gap-2 rounded-md border-2 border-white/5 bg-gradient-to-br from-[10%] to-bg p-8 xl:!hidden">
        <a className="whitespace-nowrap" href="">
          Strona główna
        </a>
        <a className="whitespace-nowrap" href="">
          Sklep
        </a>
        <a className="whitespace-nowrap" href="">
          Regulamin
        </a>
        <a className="whitespace-nowrap" href="https://mapa.spacefun.pl">
          Mapa świata
        </a>
        <a className="whitespace-nowrap" href="https://discord.gg/spacefun">
          Discord
        </a>
      </div>
      <button className="xl:hidden">
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          color="#ffffff99"
          style="color:#ffffff99"
          height="36"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg> */}
      </button>
    </nav>
  );
};
