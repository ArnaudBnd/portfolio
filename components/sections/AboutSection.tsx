"use client";

import { useEffect, useRef } from "react";
import useScrollActive from "@/hooks/useScrollActive";
import Circle from "@/public/assets/about/circle.svg";
import Signs from "@/public/assets/about/signs.svg";
import Star from "@/public/assets/about/star.svg";
import Triangle from "@/public/assets/about/triangle.svg";
import ArnaudBENEDEImage from "@/public/PP.jpg";
import { useSectionStore } from "@/store/section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SplitType from "split-type";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    });

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          });

          tl.fromTo(
            q(".image-animation"),
            {
              x: 200,
            },
            {
              x: 0,
            },
          );

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            },
          );

          tl.to(q(".experience-count"), {
            innerText: 5,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          });

          tl.to(
            q(".project-count"),
            {
              innerText: 6,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3",
          );

          tl.to(
            q(".user-count"),
            {
              innerText: 5,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3",
          );
        },
      },
    });
  }, []);

  const aboutSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    aboutSectionOnView ? setSection("#about") : setSection("#home");
  }, [aboutSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        <div className="relative title text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-white">
          Simplicity is the soul of efficiency.
          <div className="absolute -right-[10px] top-2">
            <Image
              className="w-14 pointer-events-none select-none"
              src={Signs}
              alt="signs"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
          <div className="w-full flex flex-col items-start gap-7 md:gap-9">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="text-animation dark:text-accentColor text-3xl md:text-4xl font-medium">
                  À Propos
                </div>
              </div>

              <div className="absolute -top-6 -left-8">
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="overflow-hidden">
                <div className="dark:text-white text-animation">
                  🖥️ Développeur confirmé, j’accompagne vos équipes dans le
                  développement de vos solutions from scratch.
                  <br />
                  <br />
                  🛠 Mes compétences techniques: Node.js, Next.js, React.js,
                  Nest.js, Express.js, Docker, MongoDB, BullMQ, Redis, KeyDB,
                  JavaScript, HTML5, CSS3, SCSS, Git, Github, GitLab. <br />
                  <br />
                  📃 Habitué à travailler en agile et en équipe, j’intègre la
                  communication au cœur de mon travail pour vous indiquer au
                  mieux mon avancement et transmettre mes acquis aux collègues.{" "}
                  <br />
                  <br />
                  🚀 Mes domaines de spécialisation: <br />
                  <br />- <strong>Applications Web complexes : </strong>
                  Développement d'applications complexes, efficaces et faciles à
                  maintenir.
                  <br />- <strong> Projets critiques : </strong>Expérience avec
                  Aubay, Dassault Aviation, Beta.gouv et le Ministère de
                  l'Intérieur.
                  <br />- <strong>Architectures robustes : </strong>Conception
                  de systèmes résistants et évolutifs.
                  <br />- <strong>Expérience variée : </strong>Adaptation rapide
                  grâce à mes différentes expériences chez Aubay, Dassault
                  Aviation, le Ministère de l'Intérieur et bêta.gouv. <br />
                  <br />
                  Pour toute question, n’hésitez pas à me contacter directement
                  !😃
                </div>
              </div>
            </div>

            <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-medium dark:text-white">
                  <span className="experience-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">Experiences</div>
              </div>

              <div className="flex flex-col font-medium items-center">
                <div className="text-3xl md:text-4xl dark:text-white">
                  <span className="project-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">Projets</div>
              </div>

              <div className="flex flex-col font-medium items-center">
                <div className="text-3xl md:text-4xl dark:text-white">
                  <span className="user-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">Années d'études</div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center image-animation ">
            <div className="relative w-[260px] h-[240px] lg:w-[300px] lg:h-[262px]">
              <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
              <Image
                className="absolute z-10 w-full h-full shadow-sm rounded-sm object-cover"
                width={300}
                height={262}
                priority
                alt="shin thant's profile"
                src={ArnaudBENEDEImage}
              />

              <div className="absolute hidden lg:block -top-12 -right-12">
                <Image
                  className="pointer-events-auto select-none"
                  width={26}
                  height={26}
                  alt="triangle background"
                  src={Triangle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-14 -right-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={22}
                  height={22}
                  alt="circle background"
                  src={Circle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-16 -left-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={34}
                  height={34}
                  alt="star background"
                  src={Star}
                />
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}

const TechStack = () => {
  return (
    <div className="w-full inline-flex gap-20 flex-nowrap lg:overflow-hidden">
      <div className="flex items-center gap-20 justify-center animate-infinite-scroll">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
            <path d="M9 12h4" />
            <path d="M11 12v6" />
            <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">TypeScript</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">React</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
            <path d="M15 12v-3" />
          </svg>
          <div className="dark:text-white text-lg font-medium">Next</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h3v8l-2 -1" />
            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
          </svg>
          <div className="dark:text-white text-lg font-medium">JavaScript</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="28"
            viewBox="4 5 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
              fill="#8CC84B"
            />
            <path
              d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
              fill="#8CC84B"
            />
          </svg>
          <div className="dark:text-white text-lg font-medium">Node</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 2 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
          </svg>
          <div className="dark:text-white text-lg font-medium">MongoDB</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m27.994 14.729c-.012.267-.365.566-1.091.945-1.495.778-9.236 3.967-10.883 4.821-.589.419-1.324.67-2.116.67-.641 0-1.243-.164-1.768-.452l.019.01c-1.304-.622-9.539-3.95-11.023-4.659-.741-.35-1.119-.653-1.132-.933v2.83c0 .282.39.583 1.132.933 1.484.709 9.722 4.037 11.023 4.659.504.277 1.105.44 1.744.44.795 0 1.531-.252 2.132-.681l-.011.008c1.647-.859 9.388-4.041 10.883-4.821.76-.396 1.096-.7 1.096-.982s0-2.791 0-2.791z" />
            <path d="m27.992 10.115c-.013.267-.365.565-1.09.944-1.495.778-9.236 3.967-10.883 4.821-.59.421-1.326.672-2.121.672-.639 0-1.24-.163-1.763-.449l.019.01c-1.304-.627-9.539-3.955-11.023-4.664-.741-.35-1.119-.653-1.132-.933v2.83c0 .282.39.583 1.132.933 1.484.709 9.721 4.037 11.023 4.659.506.278 1.108.442 1.749.442.793 0 1.527-.251 2.128-.677l-.011.008c1.647-.859 9.388-4.043 10.883-4.821.76-.397 1.096-.7 1.096-.984s0-2.791 0-2.791z" />
            <path d="m27.992 5.329c.014-.285-.358-.534-1.107-.81-1.451-.533-9.152-3.596-10.624-4.136-.528-.242-1.144-.383-1.794-.383-.734 0-1.426.18-2.035.498l.024-.012c-1.731.622-9.924 3.835-11.381 4.405-.729.287-1.086.552-1.073.834v2.83c0 .282.39.583 1.132.933 1.484.709 9.721 4.038 11.023 4.66.504.277 1.105.439 1.744.439.795 0 1.531-.252 2.133-.68l-.011.008c1.647-.859 9.388-4.043 10.883-4.821.76-.397 1.096-.7 1.096-.984s0-2.791 0-2.791h-.009zm-17.967 2.684 6.488-.996-1.96 2.874zm14.351-2.588-4.253 1.68-3.835-1.523 4.246-1.679 3.838 1.517zm-11.265-2.785-.628-1.157 1.958.765 1.846-.604-.499 1.196 1.881.7-2.426.252-.543 1.311-.879-1.457-2.8-.252 2.091-.754zm-4.827 1.632c1.916 0 3.467.602 3.467 1.344s-1.559 1.344-3.467 1.344-3.474-.603-3.474-1.344 1.553-1.344 3.474-1.344z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">Redis</div>
        </div>
      </div>

      <div
        className="flex items-center gap-20 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
            <path d="M9 12h4" />
            <path d="M11 12v6" />
            <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
          </svg>
          j<div className="dark:text-white text-lg font-medium">TypeScript</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">React</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
            <path d="M15 12v-3" />
          </svg>
          <div className="dark:text-white text-lg font-medium">Next</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h3v8l-2 -1" />
            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
          </svg>
          <div className="dark:text-white text-lg font-medium">JavaScript</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">Tailwind</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
          </svg>
          <div className="dark:text-white text-lg font-medium">MongoDB</div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-black dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m27.994 14.729c-.012.267-.365.566-1.091.945-1.495.778-9.236 3.967-10.883 4.821-.589.419-1.324.67-2.116.67-.641 0-1.243-.164-1.768-.452l.019.01c-1.304-.622-9.539-3.95-11.023-4.659-.741-.35-1.119-.653-1.132-.933v2.83c0 .282.39.583 1.132.933 1.484.709 9.722 4.037 11.023 4.659.504.277 1.105.44 1.744.44.795 0 1.531-.252 2.132-.681l-.011.008c1.647-.859 9.388-4.041 10.883-4.821.76-.396 1.096-.7 1.096-.982s0-2.791 0-2.791z" />
            <path d="m27.992 10.115c-.013.267-.365.565-1.09.944-1.495.778-9.236 3.967-10.883 4.821-.59.421-1.326.672-2.121.672-.639 0-1.24-.163-1.763-.449l.019.01c-1.304-.627-9.539-3.955-11.023-4.664-.741-.35-1.119-.653-1.132-.933v2.83c0 .282.39.583 1.132.933 1.484.709 9.721 4.037 11.023 4.659.506.278 1.108.442 1.749.442.793 0 1.527-.251 2.128-.677l-.011.008c1.647-.859 9.388-4.043 10.883-4.821.76-.397 1.096-.7 1.096-.984s0-2.791 0-2.791z" />
            <path d="m27.992 5.329c.014-.285-.358-.534-1.107-.81-1.451-.533-9.152-3.596-10.624-4.136-.528-.242-1.144-.383-1.794-.383-.734 0-1.426.18-2.035.498l.024-.012c-1.731.622-9.924 3.835-11.381 4.405-.729.287-1.086.552-1.073.834v2.83c0 .282.39.583 1.132.933 1.484.709 9.721 4.038 11.023 4.66.504.277 1.105.439 1.744.439.795 0 1.531-.252 2.133-.68l-.011.008c1.647-.859 9.388-4.043 10.883-4.821.76-.397 1.096-.7 1.096-.984s0-2.791 0-2.791h-.009zm-17.967 2.684 6.488-.996-1.96 2.874zm14.351-2.588-4.253 1.68-3.835-1.523 4.246-1.679 3.838 1.517zm-11.265-2.785-.628-1.157 1.958.765 1.846-.604-.499 1.196 1.881.7-2.426.252-.543 1.311-.879-1.457-2.8-.252 2.091-.754zm-4.827 1.632c1.916 0 3.467.602 3.467 1.344s-1.559 1.344-3.467 1.344-3.474-.603-3.474-1.344 1.553-1.344 3.474-1.344z" />
          </svg>
          <div className="dark:text-white text-lg font-medium">Redis</div>
        </div>
      </div>
    </div>
  );
};
