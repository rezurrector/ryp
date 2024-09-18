import Image from "next/image"
import Link from "next/link"
import { SparklesCore } from "@/components/ui/sparkles"
import { TracingBeam } from "@/components/ui/tracing-beam"
import Divider from "@/components/Divider"
import Social from "@/components/Social"
import { RxOpenInNewWindow } from "react-icons/rx"

export default function Home() {
  return (
    <TracingBeam className="px-6">
      <>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <Divider />

          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full "
              particleColor="#0ea5e9"
            />
          </div>

          <div className="h-[30rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <Image
              src="/images/circles.svg"
              alt="RYP Logo"
              className="dark:invert uppercase cursor-pointer hover:scale-110"
              width={800}
              height={220}
              priority
            />
          </div>

          <Divider />

          <div className="h-[20rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <p className="md:text-2xl text-1xl lg:text-9l font-bold text-center relative z-20 pb-10">
              Outlaw Western Rock from Albuquerque New Mexico
            </p>
            <p className="mb-5">Check out our new release L8LY!</p>
            <Social />
          </div>

          <div className="relative w-full flex flex-col items-center justify-center p-10">
            <h2 className="md:text-7xl text-3xl lg:text-9l font-bold text-centerrelative z-20 pb-10">
              Shows
            </h2>
            <Divider />

            <iframe
              className="w-full aspect-video ..."
              src="https://www.youtube.com/embed/9zvZ4nldda4?si=ePdfjzY_35dzZSK1"
            ></iframe>
          </div>

          <div className="relative w-full flex flex-col items-center justify-center p-10">
            <h2 className="md:text-7xl text-3xl lg:text-9l font-bold text-centerrelative z-20 pb-10">
              About
            </h2>
            <Divider />
            <Image
              src="/miranda-ufo.jpg"
              alt="miranda"
              height={1000}
              width={1000}
              className="rounded-lg"
            />
            <p className="md:text-sm lg:text-9l text-align: justifyrelative z-20 p-2">
              MIRANDA is Angel & Melissa . We are Modern Outlaw Western
              Alternative Rock Musicians. Singer/ harmonica player & songwriter
              Melissa and guitarist all around musician/ main songwriter/
              producer Angel. We write original songs and play some beloved
              covers as well. We would love to play for you live. Give us a call
              to book your next event for live Entertainment. Sometimes gurst
              violinist Alex. You can listen & watch more of our content on
              <Link
                target="_blank"
                href="https://open.spotify.com/artist/0tyELY8D780ONt29dfsU3l"
                className="mx-1 underline"
              >
                Spotify
                <RxOpenInNewWindow className="inline mx-1" />
              </Link>
              or{" "}
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UC8dGnZTuJEBAM-Bfsa8XVug"
                className="mx-1 underline"
              >
                Youtube
                <RxOpenInNewWindow className="inline mx-1" />
              </Link>
              . Don’t forget to give us a like, love those good comments. It’s
              greatly appreciated. Thank You !!!
            </p>
            {/* <p className="md:text-sm lg:text-9l text-align: justify text-white relative z-20 p-10 text-center">
              Working on merch store. Check back soon.
            </p> */}
          </div>

          <Divider />
        </div>
      </>
    </TracingBeam>
  )
}
