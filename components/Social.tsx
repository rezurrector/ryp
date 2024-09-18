import React from "react";
import Link from "next/link";
import { FaSpotify, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

export default function Social() {
  return (
    <>
      <div className="relative z-[1] place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[80px] sm:after:w-[200px] before:lg:h-[360px]"></div>
      <div className="flex space-x-8 z-[2]">
        <Link
          target="_blank"
          href="https://open.spotify.com/artist/0tyELY8D780ONt29dfsU3l"
        >
          <FaSpotify size={40} />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/channel/UC8dGnZTuJEBAM-Bfsa8XVug"
        >
          <FaYoutube size={40} />
        </Link>
        <Link
          target="_blank"
          href="https://music.apple.com/us/artist/miranda/1716473693"
        >
          <SiApplemusic size={40} />
        </Link>
        <Link target="_blank" href="https://soundcloud.com/mirandarockyoupie">
          <FaSoundcloud size={40} />
        </Link>
      </div>
    </>
  );
}
