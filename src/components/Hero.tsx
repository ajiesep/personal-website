import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {/* Dynamic Web Magic With Next.js */}
            Welcome to My Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-2xl lg:text-2xl"
            // words="Transforming Concepts into Seamless User Experiences"
            words="A beginner software developer with a passion for programming backend, especially in web development and mobile applications. 
            having decided to leave my previous career in the Quallity Assurance to pursue what has been a lifelong passion, technology."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ajie setiawan putra, a Next.js Developer based in
            Jakarta
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              // handleClick={() => console.log("Button clicked")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}