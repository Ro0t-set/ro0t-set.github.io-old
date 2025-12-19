import type { FreelancerProject, FreelancerProjectTranslations } from "../locale";

const freelancerProjectsEn: FreelancerProject[] = [
    {
        title: "Elaria",
        description: "Design and development of a microservices infrastructure based on Spring Boot and Docker Swarm for creating a highly modular, scalable and expandable management system. The architecture is based on service containerization and orchestration through Docker Swarm.",
        technologies: "Spring Boot, Docker & Docker Swarm, Traefik, GitHub Actions, Keycloak, Grafana & Prometheus, OpenAPI/Swagger",
        url: "https://elaria.it",
        client: "Elaria",
        year: "2025"
    },
    {
        title: "React frontend",
        description: "React frontend development a project at University of Bologna, focused on creating a platform for preventing university dropout based on predictive analytics and student support systems.",
        technologies: "React, TypeScript, Frontend Development",
        url: "https://bandi.unibo.it/s/disi/disi-incarico-di-lavoro-autonomo-di-natura-libero-professionale-partita-iva-della-durata-di-4-mesi-480-ore-collaborazione-per-attivita-di-sviluppo-software-nell-ambito-di-una-piattaforma-per-la-prevenzione-dell-abbandono-universitario-basata-su",
        client: "University of Bologna",
        year: "2025"
    },
    {
        title: "Discov.er",
        description: "Selected through public tender for the strategic industrial research project DISCOV.ER (PR FESR 2021–2027). Development of simulation and prediction models for environmental data using AI techniques, Machine Learning and statistical approaches to support predictive analysis and monitoring of complex phenomena.",
        technologies: "AI, Machine Learning, Statistical Analysis, Environmental Data Processing, Python",
        url: "https://www.unibo.it/it/ricerca/progetti-e-iniziative/pr-fesr-emilia-romagna-2021-2027/1223/20430/20607",
        client: "University of Bologna",
        year: "2025"
    }
];

const freelancerProjectsIt: FreelancerProject[] = [
    {
        title: "Elaria",
        description: "Progettazione e sviluppo di un'infrastruttura a microservizi basata su Spring Boot e Docker Swarm, finalizzata alla creazione di un gestionale altamente modulare, scalabile ed espandibile. L'architettura si basa sulla containerizzazione dei servizi e sulla loro orchestrazione tramite Docker Swarm.",
        technologies: "Spring Boot, Docker & Docker Swarm, Traefik, GitHub Actions, Keycloak, Grafana & Prometheus, OpenAPI/Swagger",
        url: "https://elaria.it",
        client: "Elaria",
        year: "2025"
    },
    {
        title: "React frontend",
        description: "Sviluppo del frontend React per un progetto presso l'Università di Bologna, focalizzato sulla creazione di una piattaforma per la prevenzione dell'abbandono universitario basata su analisi predittive e sistemi di supporto agli studenti.",
        technologies: "React, TypeScript, Sviluppo Frontend",
        url: "https://bandi.unibo.it/s/disi/disi-incarico-di-lavoro-autonomo-di-natura-libero-professionale-partita-iva-della-durata-di-4-mesi-480-ore-collaborazione-per-attivita-di-sviluppo-software-nell-ambito-di-una-piattaforma-per-la-prevenzione-dell-abbandono-universitario-basata-su",
        client: "Università di Bologna",
        year: "2025"
    },
    {
        title: "Discov.er",
        description: "Selezionato tramite bando pubblico per collaborare al progetto di ricerca industriale strategica DISCOV.ER (PR FESR 2021–2027). Sviluppo di modelli di simulazione e previsione di dati ambientali, attraverso l'applicazione di tecniche di Intelligenza Artificiale, Machine Learning e approcci statistici.",
        technologies: "AI, Machine Learning, Analisi Statistica, Elaborazione Dati Ambientali, Python",
        url: "https://www.unibo.it/it/ricerca/progetti-e-iniziative/pr-fesr-emilia-romagna-2021-2027/1223/20430/20607",
        client: "Università di Bologna",
        year: "2025"
    }
];

export const FreelancerProjectTranslationsEn: FreelancerProjectTranslations = {
    freelancerProjectTitle: "Freelance Projects",
    freelancerProjects: freelancerProjectsEn
};

export const FreelancerProjectTranslationsIt: FreelancerProjectTranslations = {
    freelancerProjectTitle: "Progetti Freelance",
    freelancerProjects: freelancerProjectsIt
};
