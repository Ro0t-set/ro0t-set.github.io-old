import type { Service, ServiceTranslations } from "../locale.d";

const servicesEn: Service[] = [
    {
        title: "Cloud Optimization",
        description: "Comprehensive cloud infrastructure optimization services to reduce costs, improve performance, and enhance security. Expert analysis and implementation of best practices for Digital Ocean, Azure, and Google Cloud Platform.",
        technologies: "Digital Ocean, Azure, GCP, Kubernetes, Docker, Terraform, CloudFormation, Cost Optimization, Security Best Practices",
        url: "https://www.tommasopatriti.me/cloud-optimization/",
        category: "Cloud & Infrastructure"
    },
    {
        title: "Business Web Applications",
        description: "Custom development of enterprise web applications and management systems tailored to your business needs. Full-stack solutions including CRM, ERP, inventory management, and business intelligence dashboards.",
        technologies: "Vue.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, REST API, Microservices, Docker",
        category: "Web Development"
    },
    {
        title: "Rapid Prototyping",
        description: "Fast and efficient prototyping services to transform your ideas into functional MVPs. Ideal for startups and businesses looking to validate concepts quickly before full-scale development.",
        technologies: "Vue.js, Quasar, Figma, Node.js, Express, Firebase, Rapid Development Tools",
        category: "Product Development"
    }
];

const servicesIt: Service[] = [
    {
        title: "Ottimizzazione Cloud",
        description: "Servizi completi di ottimizzazione dell'infrastruttura cloud per ridurre i costi, migliorare le prestazioni e aumentare la sicurezza. Analisi esperta e implementazione delle best practice per Digital Ocean, Azure e Google Cloud Platform.",
        technologies: "Digital Ocean, Azure, GCP, Kubernetes, Docker, Terraform, CloudFormation, Ottimizzazione Costi, Best Practice Sicurezza",
        url: "https://www.tommasopatriti.me/cloud-optimization/",
        category: "Cloud & Infrastruttura"
    },
    {
        title: "Applicativi Web Aziendali",
        description: "Sviluppo personalizzato di applicazioni web enterprise e sistemi gestionali su misura per le tue esigenze aziendali. Soluzioni full-stack inclusi CRM, ERP, gestione inventario e dashboard di business intelligence.",
        technologies: "Vue.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, REST API, Microservizi, Docker",
        category: "Sviluppo Web"
    },
    {
        title: "Prototipazione Rapida",
        description: "Servizi di prototipazione veloce ed efficiente per trasformare le tue idee in MVP funzionali. Ideale per startup e aziende che desiderano validare concetti rapidamente prima dello sviluppo completo.",
        technologies: "Vue.js, Quasar, Figma, Node.js, Express, Firebase, Strumenti di Sviluppo Rapido",
        category: "Sviluppo Prodotto"
    }
];

export const ServiceTranslationsEn: ServiceTranslations = {
    serviceTitle: "Services",
    services: servicesEn
};

export const ServiceTranslationsIt: ServiceTranslations = {
    serviceTitle: "Servizi",
    services: servicesIt
};
