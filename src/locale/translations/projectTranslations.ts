import type { Project, ProjectTranslations } from "../locale";

const projectsEn: Project[] = [
    {
        title: "PiperChat",
        description: "Developed a microservices-based Discord clone with WebRTC support for real-time communication.",
        technologies: "TypeScript, WebRTC, Docker, Vue.js, MongoDB, Node.js, Express, JWT, Socket.io, RabbitMQ, Traefik, Jest, REST API",
        url: "https://github.com/zucchero-sintattico/piperchat"
    },
    {
        title: "Piper-KT",
        description: "A reimplementation of PiperChat using Hexagonal Architecture and Kubernetes.",
        technologies: "Kotlin, Kubernetes, Micronaut, Nginx",
        url: "https://github.com/zucchero-sintattico/piper-kt"
    },
    {
        title: "LoRa-Mesh IoT System",
        description: "Researched and implemented a LoRa-mesh-based system for marine Social IoT. The project was published in IEEE CCNC 2023.",
        technologies: "LoRa, IoT, Mesh Networks, Embedded Systems",
        url: "https://ieeexplore.ieee.org/document/10060829"
    }
];

const projectsIt: Project[] = [
    {
        title: "PiperChat",
        description: "Sviluppato un clone di Discord basato su microservizi con supporto WebRTC per la comunicazione in tempo reale.",
        technologies: "TypeScript, WebRTC, Docker, Vue.js, MongoDB, Node.js, Express, JWT, Socket.io, RabbitMQ, Traefik, Jest, REST API",
        url: "https://github.com/zucchero-sintattico/piperchat"
    },
    {
        title: "Piper-KT",
        description: "Una reimplementazione di PiperChat utilizzando l'Architettura Esagonale e Kubernetes.",
        technologies: "Kotlin, Kubernetes, Micronaut, Nginx",
        url: "https://github.com/zucchero-sintattico/piper-kt"
    },
    {
        title: "Sistema IoT LoRa-Mesh",
        description: "Ricerca e implementazione di un sistema basato su LoRa-mesh per il Social IoT marino. Il progetto è stato pubblicato su IEEE CCNC 2023.",
        technologies: "LoRa, IoT, Reti Mesh, Sistemi Embedded",
        url: "https://ieeexplore.ieee.org/document/10060829"
    }
];

export const ProjectTranslationsEn: ProjectTranslations = {
    projectTitle: "Featured Projects",
    projects: projectsEn
};

export const ProjectTranslationsIt: ProjectTranslations = {
    projectTitle: "Progetti in Evidenza",
    projects: projectsIt
};
