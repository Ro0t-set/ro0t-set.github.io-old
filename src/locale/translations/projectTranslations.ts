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
    },
    {
        title: "Multilanguage Portfolio Template",
        description: "Developed a Vue 3-based portfolio template with multilingual support.",
        technologies: "Vue 3, Vite, Quasar, Pinia, GitHub Actions, Semantic Release",
        url: "https://github.com/Ro0t-set/multilanguage-portfolio-template"
    },
    {
        title: "ScafiWeb3",
        description: "Created a framework for visualizing and executing aggregate programs with a 3D graph viewer and real-time code compilation.",
        technologies: "Scala.js, Three.js, Scastie, Docker, Cucumber, Selenium",
        url: "https://www.tommasopatriti.me/PPS-24-ScafiWeb3/"
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
    },
    {
        title: "Template Portfolio Multilingua",
        description: "Sviluppato un template per portfolio basato su Vue 3 con supporto multilingua.",
        technologies: "Vue 3, Vite, Quasar, Pinia, GitHub Actions, Semantic Release",
        url: "https://github.com/Ro0t-set/multilanguage-portfolio-template"
    },
    {
        title: "ScafiWeb3",
        description: "Creato un framework per la visualizzazione e l'esecuzione di programmi aggregati con un visualizzatore di grafi 3D e compilazione del codice in tempo reale.",
        technologies: "Scala.js, Three.js, Scastie, Docker, Cucumber, Selenium",
        url: "https://www.tommasopatriti.me/PPS-24-ScafiWeb3/"
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
