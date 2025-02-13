"use client";

import { useEffect, useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import PortailWeb from "@/public/assets/projects/portail-web.jpg";
import Ummanite from "@/public/assets/projects/ummanite.png";
import HubAPI from "@/public/assets/projects/hubAPI.jpg";
import Demonstrateur from "@/public/assets/projects/demonstrateur.png";
import DA from "@/public/assets/projects/dassault-aviation-rafale-falcon.jpg";
import GA from "@/public/assets/projects/GA.png";
import Planning from "@/public/assets/projects/Planning.png";
import { useSectionStore } from "@/store/section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StaticImageData } from "next/image";
import { RoughNotation } from "react-rough-notation";
import ProjectCard from "../ProjectCard";

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            },
          );
        },
      },
    });
  }, []);

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    projectSectionOnView && setSection("#project");
  }, [projectSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Projets et réalisations
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>
                Voici un exemple de mes expériences les plus pertinentes. 👇
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStacks: string[];
  image: StaticImageData;
  githubURL: string;
  githubApi: string;
}

const projects: Project[] = [
  {
    id: 1,
    title:
      "Ummanité association - 2024/Actuellement",
    description:
      "Développement fullstack et déploiement de la nouvelle version du site de l'association avec une infrastructure géré par Docker sur un VPS OVH.",
    techStacks: ["NestJS", "TypeScript", "Angular"],
    image: Ummanite,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 2,
    title:
      "France Identité - Hub d'API pour l'application mobile - 2024/Actuellement",
    description:
      "Développement d'un Hub d'API afin d'importer le permis de conduire dans l'application mobile France Identité.",
    techStacks: ["NextJS", "TypeScript", "NodeJS", "Redis"],
    image: HubAPI,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 3,
    title: "Démonstateur API Particulier - 2023/2024",
    description:
      "Développement du démonstrateur API Particulier dédié aux fournisseurs de service FranceConnect.",
    techStacks: ["NextJS", "TypeScript", "ReactJS"],
    image: Demonstrateur,
    githubURL: "https://github.com/ShinnTNT/music-player",
    githubApi: "https://api.github.com/repos/ShinnTNT/music-player",
  },
  {
    id: 4,
    title: "Attestation France Identité - Portail web - 2023/2024",
    description:
      "Développement de l'application Attestion France Identité visant à accélérer la simplificiation administrative.",
    techStacks: ["NextJS", "TypeScript", "NodeJS", "Redis"],
    image: PortailWeb,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 5,
    title: "Dassault Aviation - Application classée secret Défense - 2020/2023",
    description:
      "Développement d'une application dédiée au secteur de l'aéronautique et de la défense.",
    techStacks: ["ReactJS", "TypeScript", "NodeJS", "MongoDB"],
    image: DA,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 6,
    title: "Planning - 2018/2020",
    description:
      "Participation au développement d'un outil permettant à la direction de savoir en temps réel les missions en cours, leurs conditions, les interlocuteurs, les collaborateurs ...",
    techStacks: ["JavaEE", "Javascript"],
    image: Planning,
    githubURL: "",
    githubApi: "",
  },
  {
    id: 7,
    title: "Gestion d'activité - 2017/2018",
    description:
      "Participation au développement d'un outil destiné à afficher des informations sur l’activité de l'entreprise.",
    techStacks: ["JavaEE", "Javascript"],
    image: GA,
    githubURL: "",
    githubApi: "",
  },
];
