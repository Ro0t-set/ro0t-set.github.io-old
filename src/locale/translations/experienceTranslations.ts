import type { Experience, ExperienceTranslations } from "../locale";

const experiencesEn: Experience[] = [
    {
        title: "Internship - Kubernetes Autoscaling & Clean Architecture",
        company: "Dallara",
        location: "Varano de' Melegari, Italy",
        startDate: "2024",
        endDate: "2025",
        description: "Internship focused on Kubernetes autoscaling algorithms and clean architecture, as part of the master's thesis project."
    },
    {
        title: "Teaching Assistant",
        company: "University of Bologna",
        location: "Cesena, Italy",
        startDate: "2024",
        endDate: "2025",
        description: "Provided support for students with disabilities and specific learning disorders. Reviewed past exams and improved the ability to explain complex concepts effectively."
    },
    {
        title: "Software Engineer - Manager",
        company: "Settimana Flessibile Manager",
        location: "Perugia, Italy",
        startDate: "2017",
        endDate: "2019",
        description: "Developed a Django-based website to manage self-organization for Umbrian high schools. Managed relationships with school administrators, teachers, and students across three different schools."
    },
    {
        title: "Intern - Web Development",
        company: "InnoTeam",
        location: "Pesaro, Italy",
        startDate: "2017",
        endDate: "2017",
        description: "First real experience in a web development office. Gained insight into the software production process and used the Django framework for web development."
    }
];

const experiencesIt: Experience[] = [
    {
        title: "Stage - Autoscaling Kubernetes e Clean Architecture",
        company: "Dallara",
        location: "Varano de' Melegari, Italia",
        startDate: "2024",
        endDate: "2025",
        description: "Stage focalizzato sugli algoritmi di autoscaling in Kubernetes e la clean architecture, come parte del progetto di tesi magistrale."
    },
    {
        title: "Assistente alla Didattica",
        company: "Università di Bologna",
        location: "Cesena, Italia",
        startDate: "2024",
        endDate: "2025",
        description: "Supporto agli studenti con disabilità e disturbi specifici dell'apprendimento. Revisione di esami passati e miglioramento della capacità di spiegare concetti complessi in modo efficace."
    },
    {
        title: "Ingegnere del Software - Manager",
        company: "Settimana Flessibile Manager",
        location: "Perugia, Italia",
        startDate: "2017",
        endDate: "2019",
        description: "Sviluppo di un sito web basato su Django per gestire l'autogestione in alcune scuole umbre. Gestione dei rapporti con dirigenti scolastici, insegnanti e studenti di tre scuole diverse."
    },
    {
        title: "Stage - Sviluppo Web",
        company: "InnoTeam",
        location: "Pesaro, Italia",
        startDate: "2017",
        endDate: "2017",
        description: "Prima esperienza in un ufficio di sviluppo web. Acquisito insight nel processo di produzione software e utilizzo del framework Django per lo sviluppo web."
    }
];

export const experienceTranslationsEn: ExperienceTranslations = {
    experienceTitle: "Experience",
    experiences: experiencesEn,
};

export const experienceTranslationsIt: ExperienceTranslations = {
    experienceTitle: "Esperienza",
    experiences: experiencesIt,
};
