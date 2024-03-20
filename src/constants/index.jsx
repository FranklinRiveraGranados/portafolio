import {
    docker,
    mongodb,
    nodejs,
    javascript,
    react,
    html,
    css,
    figma,
    git,
    tailwindcss,
    typescript,
    mssql,
    resumeia,
    smartcampus,
    appsmartcampus,
    registroautobuses,
    backend,
    linkedin,
    github,
    ctic,
} from "../assets"

const navlinks = [
    {
        name: "Inicio",
        link: "#inicio",
    },
    {
        name: "Proyectos",
        link: "#proyectos",
    },
    {
        name: "Sobre mí",
        link: "#sobremi",
    },
    {
        name: "Experiencia",
        link: "#experiencia"
    },
    {
        name: "Skills",
        link: "#skills"
    }
]

const technologies = [
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Mongo DB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: mssql,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React",
        icon: react,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "Tailwindcss",
        icon: tailwindcss,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "Git",
        icon: git
    }
]

const projects = [
    {
        name: "Resume ia",
        rol: "FullStack",
        image: resumeia,
        tech: ["React", "TailwindCSS", "Docker", "Python", "Flask", "openai"],
        description: "Resume ia es una aplicación para resumir a texto un video de Youtube solo enviando el link y además permite copiar el resumen."
    },
    {
        name: "Smart Campus",
        rol: "Frontend",
        image: smartcampus,
        tech: ["Figma", "React", "CSS", "Docker", "React Leaflet"],
        description: "Smart Campus es una aplicación que engloba proyectos como Calidad del Aire, Smart Parking, Control de Aforo, etc. Esto permite la gestión y optimización de recursos en el campus de la UNI."
    },
    {
        name: "CRUD",
        rol: "backend",
        image: backend,
        tech: ["Node", "JavaScript", "Express", "MongoDB"],
        description: "CRUD es una aplicación que permite registrar, eliminar, actualizar y editar datos de usuarios y notas."
    },
    {
        name: "App Smart Campus",
        rol: "Frontend",
        image: appsmartcampus,
        tech: ["Figma","React Native", "CSS", "TypeScript"],
        description: "App Smart Campus es una aplicación que engloba proyecto como Tracking de Movilidad Universitario, Calidad del Aire, Visualizar Restaurantes, etc. Esto permite la gestión y optimización de recursos en el campus de la UNI."
    },
    {
        name: "Aplicación Registro de Autobuses",
        rol: "FullStack",
        image: registroautobuses,
        tech: ["Java", "MySQL", "MVC"],
        description: "Aplicación para Registro de Autobuses que sirve para registrar la entrada y salidad de autobuses, pasajes vendidos y también para generar la boleta de pago."
    }
]

const skills = ["React", "Tailwindcss", "Vite", "HTML", "CSS", 
                "Node.js", "Express", "Docker", "MongoDB", "MySQL", 
                "Firebase", "JavaScript", "TypeScript", 
                "Python", "Git", "Figma"]

const social = [
    {
        name: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/franklin-rivera-granados/"
    },
    {
        name: "github",
        icon: github,
        link: "https://github.com/FranklinRiveraGranados?tab=repositories"
    }
]

const company = [
    {
        name: "CTIC",
        icon: ctic,
    }
]

export { navlinks, technologies, projects, skills, social, company }