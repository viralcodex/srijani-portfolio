import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { LinkedInIcon } from "@/components/Icons";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Srijani&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Srijani Chakraborty, a Full-Stack Developer."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full h-[calc(100vh-140px)] overflow-hidden dark:text-light">
        <Layout className="py-0! h-full flex items-center">
          <div className="flex items-center justify-between w-full gap-6 lg:flex-col lg:gap-3 h-full lg:justify-center lg:overflow-y-auto">
            <div className="w-1/2 lg:w-full flex justify-center lg:shrink-0">
              <Image
                src={profilePic}
                alt="srijani"
                className="w-full h-auto w:4/5 sm:w-full max-h-[60vh] lg:max-h-[50vh] md:max-h-[40vh] sm:max-h-[80vh] object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start lg:w-full lg:text-center lg:items-center lg:shrink-0">
              <AnimatedText
                text="Turning Vision Into Reality With Code."
                className="text-left! lg:text-center! xl:text-4xl! lg:text-3xl! md:text-2xl! sm:text-xl!"
              />
              <p className="my-4 text-lg font-medium md:text-sm sm:text-xs lg:my-2 sm:my-1 lg:px-4 sm:text-center">
                As a{" "}
                <b className="text-primary font-black tracking-wide dark:text-amber-400">
                  Full-Stack Developer
                </b>
                , I am dedicated to turning ideas into innovative web applications.{" "}
                <br className="hidden lg:inline" />
                Explore my latest projects and articles, showcasing my expertise in various
                tech-stack.
              </p>
              <div className="flex items-center gap-4 mt-2 lg:self-center lg:gap-3 sm:gap-2 lg:mt-1">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light py-2.5 px-12 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:py-2 md:text-base sm:py-1.5 sm:text-xs transition-all duration-300 ease-in-out"
                  download={true}
                >
                  Resume
                </Link>
                <Link
                  href="mailto:chakrobortysrijani2001@gmail.com"
                  target="_blank"
                  className="sm:hidden flex items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:py-2 md:px-4 md:text-base sm:py-1.5 sm:px-3 sm:text-xs transition-all duration-300 ease-in-out"
                >
                  Email
                </Link>
              </div>
              <div className="hidden sm:flex flex-row justify-center items-center gap-6 mt-8 lg:mt-4 md:mt-3 sm:mt-2 lg:gap-4 sm:gap-3">
                <a
                  href="mailto:chakrobortysrijani2001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-8 lg:h-8 sm:w-7 sm:h-7 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Mail strokeWidth={2} className="w-full h-full" />
                </a>
                <a
                  href="https://github.com/Srijani-Chakroborty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-8 lg:h-8 sm:w-7 sm:h-7 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <GithubIcon className="w-full h-full" />
                </a>
                <a
                  href="https://www.linkedin.com/in/srijani-chakraborty-a0b42b1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-8 lg:h-8 sm:w-7 sm:h-7 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <LinkedInIcon className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
