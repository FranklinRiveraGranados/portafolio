export interface links {
    name: string
    link: string
}

export interface tech {
    name: string
    icon: string
}

export interface project {
    name: string
    rol: string
    image: string
    tech: string []
    description: string
}

export interface soci {
    name: string
    icon: string
    link: string
}

export interface experence {
    rol: string
    empresa: string
    fecha: string
    icon: string
    tareas: string[]
}