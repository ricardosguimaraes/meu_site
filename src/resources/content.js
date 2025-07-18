import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ricardo",
  lastName: "Guimarães",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Full Stack | Especialista em Web, IA e Automação",
  avatar: "/images/avatar.jpg",
  email: "contato@ricardodesenvolvedor.com.br",
  location: "America/Sao_Paulo", // IANA time zone válido para São Paulo
  languages: ["Português"],
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
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ricardosguimaraes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/web-ricardo",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ricardodesenvolvedor/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ricardodesenvolvedor",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/5519999942464",
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
  headline: <>Desenvolvedor Full Stack com foco em Web, IA e Automação</>,
  featured: {
    display: true,
    title: <>Projeto recente: <strong className="ml-4">Musictrade</strong></>,
    href: "/work/musictrade",
  },
  subline: (
    <>
      Sou {person.name}, desenvolvedor Full Stack com experiência em web, automação e inteligência artificial. <br />
      Atuo com tecnologias modernas, frameworks robustos e foco em performance. <br />
      No tempo livre, crio projetos próprios e ajudo empresas a inovar.
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
        {person.name} é um desenvolvedor Full Stack com sólida experiência em desenvolvimento web, aplicações no-code/low-code, automação de processos e ferramentas baseadas em inteligência artificial. Atua com tecnologias modernas e frameworks robustos, entregando soluções eficientes, escaláveis e com foco em performance.
        <br />
        Domina WordPress avançado, ferramentas como FlutterFlow, Bubble, n8n, e IA aplicada à produtividade com GitHub Copilot, Cursor e afins.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Agência Colors",
        timeframe: "2020 – Atual",
        role: "Desenvolvedor Full Stack",
        achievements: [
          <>
            Desenvolvimento de sites e sistemas personalizados com foco em performance e usabilidade
          </>,
          <>
            Aplicações em WordPress com Elementor Pro, JetEngine e WooCommerce
          </>,
          <>
            Criação de apps mobile com FlutterFlow e sistemas com Bubble.io
          </>,
          <>
            Automação de processos com n8n, integrações via APIs
          </>,
          <>
            Uso de IA (Copilot, Cursor) para acelerar o desenvolvimento
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "Faculdade Anhanguera – Campinas/SP",
        description: <>MBA em Marketing Digital</>,
      },
      {
        name: "Faculdade Anhanguera – Campinas/SP",
        description: <>Tecnólogo em Análise e Desenvolvimento de Sistemas</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Competências Técnicas",
    skills: [
      {
        title: "Frontend",
        description: <>
          HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Vue.js (básico), Bootstrap, Tailwind CSS, Figma
        </>,
        images: [],
      },
      {
        title: "Backend",
        description: <>
          Node.js (Express, NestJS), PHP (Laravel, Slim), API REST / GraphQL, JWT / OAuth, WebSockets
        </>,
        images: [],
      },
      {
        title: "Banco de Dados",
        description: <>
          MySQL, PostgreSQL, MongoDB, Prisma ORM, Sequelize
        </>,
        images: [],
      },
      {
        title: "WordPress & CMS",
        description: <>
          WordPress Avançado, Elementor, JetEngine, CPT UI, ACF, WooCommerce, Crocoblock
        </>,
        images: [],
      },
      {
        title: "No-Code & Low-Code",
        description: <>
          Bubble.io, FlutterFlow, Webflow, Glide, Zapier, Make, n8n (Automação de Workflows)
        </>,
        images: [],
      },
      {
        title: "IA e Produtividade",
        description: <>
          GitHub Copilot, Cursor, Codeium, TabNine, ChatGPT
        </>,
        images: [],
      },
      {
        title: "Ferramentas e Metodologias",
        description: <>
          Git, GitHub, GitLab, Docker, Postman, Insomnia, CI/CD, Scrum / Kanban, SEO técnico, Google Analytics
        </>,
        images: [],
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
