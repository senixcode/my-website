import { ICON_GITHUB, ICON_LINK } from "../globalVariables/icons";
import { ILenguage } from "../interface/Lenguages";
import { IProjects, RepeatPropertiesProject } from "./projects/interfaces";
import { SEO_GITHUB, SEO_LINK } from "./projects/variables";

export const getProjects = (lenguage: string = "en"): Array<IProjects> => {
  const repeatPropertiesProject: Array<RepeatPropertiesProject> = [
    {
      titleSeo: "my-website",
      topics: [
        "Figma",
        "Next.js",
        "TypeScript",
        "Font Awesome",
        "svg",
        "styled-components",
        "customized design system",
        "Vercel",
      ],
      links: [
        {
          nameSeo: SEO_GITHUB,
          name: ICON_GITHUB,
          link: "https://github.com/senixcode/my-website",
        },
        {
          nameSeo: SEO_LINK,
          name: ICON_LINK,
          link: "https://senixcode.dev/",
        },
      ],
    },
    {
      titleSeo: "simple-ecommerce",
      topics: ["React", "Local-storage", "Material-ui", "automic-geolocation"],
      links: [
        {
          nameSeo: SEO_GITHUB,
          name: ICON_GITHUB,
          link: "https://github.com/senixcode/lightweight-ecommerce-template",
        },
        {
          nameSeo: SEO_LINK,
          name: ICON_LINK,
          link: "https://lightweight-ecommerce-template.netlify.app/",
        },
      ],
    },
  ];
  const routes: ILenguage<Array<IProjects>> = {
    en: [
      {
        id: 1,
        title: "My website",
        titleSeo: repeatPropertiesProject[0].titleSeo,
        summary:
          'My current goal is the demonstration of my current skills, I have three versions at the moment, to get to this point I had to learn "figma", "illustrator", "next" and put into practice "typescript".',
        descriptions: [
          'My current goal is the demonstration of my current skills, I have three versions at the moment, to get to this point I had to learn "figma", "illustrator", "next" and put into practice "typescript".',
          'It is important to mention that "senixcode" I thought of it in an experimental way, to make myself known in a different way, I would like to show that using a nickname is not bad or unethical, it is like an art that is seen in the way you make it known.',
          "This website is special to me and I will always be giving it more life.",
        ],
        topics: repeatPropertiesProject[0].topics,
        links: repeatPropertiesProject[0].links,
      },
      {
        id: 2,
        title: "Simple ecommerce",
        titleSeo: repeatPropertiesProject[1].titleSeo,
        summary:
          "It is a practice project whose main objective was to learn the use of MATERIAL-UI, it has something very cool and that is that it will show you the code of your country automatically.",
        descriptions: [
          "It is a practice project whose main objective was to learn the use of MATERIAL-UI, it has something very cool and that is that it will show you the code of your country automatically.",
        ],
        topics: repeatPropertiesProject[1].topics,
        links: repeatPropertiesProject[1].links,
      },
    ],
    es: [
      {
        id: 1,
        title: "Mi pagina web",
        titleSeo: repeatPropertiesProject[0].titleSeo,
        summary:
          'MI actual objetivo es la demostración de mis habilidades mas actuales, tengo tres versiones actualmente, para llegar a este punto tuve que aprender "figma", "illustrator", "next" y poner en practica "typescript".',
        descriptions: [
          'MI actual objetivo es la demostración de mis habilidades mas actuales, tengo tres versiones actualmente, para llegar a este punto tuve que aprender "figma", "illustrator", "next" y poner en practica "typescript".',
          'Es importante mencionar que "senixcode" lo pensé de forma experimental,  para darme a conocer de manera distinta, me gustaría demostrar que usar un nickname no es malo o poco ético, es como un arte que es visto de la forma que le deis a conocer.',
          "Este sitio web es especial para mi y siempre estaré dándole mas vida.",
        ],
        topics: repeatPropertiesProject[0].topics,
        links: repeatPropertiesProject[0].links,
      },
      {
        id: 2,
        title: "Ecommerce simple",
        titleSeo: repeatPropertiesProject[1].titleSeo,
        summary:
          "Es un proyecto de practica que como objetivo principal fue aprender el uso MATERIAL-UI, tiene algo muy genial y es que le mostrara el código de su país de forma automática.",
        descriptions: [
          "Es un proyecto de practica que como objetivo principal fue aprender el uso MATERIAL-UI, tiene algo muy genial y es que le mostrara el código de su país de forma automática.",
        ],
        topics: repeatPropertiesProject[1].topics,
        links: repeatPropertiesProject[0].links,
      },
    ],
  };
  return lenguage === "en" ? routes.en : routes.es;
};
