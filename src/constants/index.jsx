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
        image: resumeia,
        tech: ["React", "TailwindCSS", "Docker", "Python", "Flask"]
    },
    {
        name: "Smart Campus",
        image: smartcampus,
        tech: ["React", "CSS", "Docker", "React Leaflet"]
    },
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