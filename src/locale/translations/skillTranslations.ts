import type { Skill, SkillTranslations } from "../locale";

const skills: Skill[] = [
    // Paradigmi e tecniche
    {
        name: "OOP"
    },
    {
        name: "FP"
    },
    {
        name: "Agile"
    },
    {
        name: "TDD"
    },
    {
        name: "Microservices"
    },
    {
        name: "Cloud Computing"
    },
    {
        name: "Git"
    },
    {
        name: "Docker"
    },
    {
        name: "Kubernetes"
    },
    
    // Linguaggi di programmazione
    {
        name: "Java"
    },
    {
        name: "Kotlin"
    },
    {
        name: "Python"
    },
    {
        name: "JavaScript"
    },
    {
        name: "TypeScript"
    },
    {
        name: "Scala - Scala.js"
    },
    {
        name: "Go"
    },
    {
        name: "C"
    },
    {
        name: "Cuda"
    },
    
    // Framework e librerie
    {
        name: "Node.js"
    },
    {
        name: "Vue"
    },
    {
        name: "Express.js"
    },
    {
        name: "Micronaut"
    },
    {
        name: "WebRTC"
    },
    {
        name: "RabbitMQ"
    },
    {
        name: "Nginx"
    },
    {
        name: "Three.js"
    }
];


export const skillTranslationsEn: SkillTranslations = {
    skillTitle: "Technical Skills",
    skills: skills
};

export const skillTranslationsIt: SkillTranslations = {
    skillTitle: "Competenze Tecniche",
    skills: skills
};
