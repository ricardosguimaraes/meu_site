import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ricardo",
  lastName: "Guimarães",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Full Stack",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: (
    <>
      Ocasionalmente escrevo sobre design, tecnologia e compartilho pensamentos sobre a interseção entre criatividade e engenharia.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfólio de ${person.name}`,
  description: `Site de portfólio apresentando meu trabalho como ${person.role}`,
  headline: <>Construindo pontes entre design e código</>,
  featured: {
    display: true,
    title: <>Projeto recente: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Sou Selene, engenheira de design na <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, onde crio experiências de usuário intuitivas.
      <br /> No tempo livre, desenvolvo meus próprios projetos.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Selene é uma engenheira de design baseada em Jacarta, apaixonada por transformar desafios complexos em soluções de design simples e elegantes. Seu trabalho abrange interfaces digitais, experiências interativas e a convergência entre design e tecnologia.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Presente",
        role: "Engenheira de Design Sênior",
        achievements: [
          <>
            Redesenhou a UI/UX da plataforma FLY, resultando em um aumento de 20% no engajamento dos usuários e 30% mais rapidez no carregamento.
          </>,
          <>
            Liderou a integração de ferramentas de IA nos fluxos de design, permitindo que designers iterassem 50% mais rápido.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Projeto Once UI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Designer Líder",
        achievements: [
          <>
            Desenvolveu um sistema de design que unificou a marca em múltiplas plataformas, melhorando a consistência visual em 40%.
          </>,
          <>
            Liderou uma equipe multifuncional para lançar uma nova linha de produtos, contribuindo para um aumento de 15% na receita da empresa.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação",
    institutions: [
      {
        name: "Universidade de Jacarta",
        description: <>Estudou engenharia de software.</>,
      },
      {
        name: "Build the Future",
        description: <>Estudou marketing digital e branding pessoal.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Figma",
        description: <>Capaz de prototipar no Figma com Once UI em velocidade impressionante.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Construindo apps de próxima geração com Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Imagem do projeto",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre design e tecnologia...",
  description: `Leia o que ${person.name} tem feito recentemente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de fotos – ${person.name}`,
  description: `Uma coleção de fotos de ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
