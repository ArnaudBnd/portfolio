"use client";

import { useEffect, useRef } from "react";
import useScrollActive from "@/hooks/useScrollActive";
import { useSectionStore } from "@/store/section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export default function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".title-animation"),
            {
              y: "200%",
            },
            {
              y: 0,
            },
          );

          gsap.fromTo(
            q(".end-title"),
            { scale: 0 },
            { scale: 1, ease: "back.inOut" },
          );
        },
      },
    });
  }, []);

  const contactSectionOnView = useScrollActive(sectionRef);

  const { setSection } = useSectionStore();

  useEffect(() => {
    contactSectionOnView && setSection("#contact");
  }, [contactSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="h-full bg-gray-100 dark:bg-[#161D1F] py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-20 items-center ">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation dark:text-white text-lg text-center">
              Vous voulez avoir plus de détails sur mes expériences ?
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="title-animation text-5xl navlink text-accentColor">
              Contactez-moi!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/arnaudbnd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacte moi sur linkedin"
              className="rounded-full flex items-center gap-2 border py-2 px-6 text-base"
            >
              <div className="text-sm dark:text-white">Linkedin</div>
            </Link>
            <Link
              href="https://www.malt.fr/profile/arnaudbenede"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacte moi sur malt"
              className="rounded-full flex items-center gap-2 border py-2 px-6 text-base"
            >
              <div className="text-sm dark:text-white">Malt</div>
            </Link>
            <Link
              href="https://me.collective.work/arnaud-benede"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacte moi sur malt"
              className="rounded-full flex items-center gap-2 border py-2 px-6 text-base"
            >
              <div className="text-sm dark:text-white">Collective.work</div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-accentColor text-lg font-semibold">
              Arnaud BENEDE
            </div>
            <div className="dark:text-white text-sm">
              Développeur Full-Stack JS/TS
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center dark:text-gray-400">
              Développeur et tennisman depuis un certain temps, je suis aussi à
              l'aise avec une raquette de tennis qu'avec un clavier, toujours à
              la recherche du coup parfait sans faute. 🎾
            </div>
          </div>
          <div className="end-title dark:text-white text-md">
            Impatient de pouvoir discuter avec vous ❤️
          </div>
        </div>
      </div>
    </section>
  );
}
