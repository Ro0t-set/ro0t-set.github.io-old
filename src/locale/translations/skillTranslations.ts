import type { Skill, SkillTranslations } from "../locale";

const skills: Skill[] = [
    {
        name: "Git",
        level: 0.8
    },
    {
        name: "Agile Development",
        level: 0.85
    },
    {
        name: "TDD",
        level: 0.8
    },
    {
        name: "Object Oriented Programming",
        level: 0.95
    },
    {
        name: "Functional Programming",
        level: 0.9
    },
    {
        name: "Docker",
        level: 0.9
    },
    {
        name: "Kubernetes",
        level: 0.7
    },
    {
        name: "Java",
        level: 0.9
    },
    {
        name: "Kotlin",
        level: 0.5
    },
    {
        name: "Python",
        level: 0.8
    },
    {
        name: "JavaScript",
        level: 0.8
    },
    {
        name: "TypeScript",
        level: 0.9
    },
    {
        name: "Scala",
        level: 0.8
    },
    {
        name: "C",
        level: 0.6
    },
    {
        name: "Go",
        level: 0.9
    }
].sort((a, b) => b.level - a.level);

export const skillTranslationsEn: SkillTranslations = {
    skillTitle: "Technical Skills",
    skills: skills
};

export const skillTranslationsIt: SkillTranslations = {
    skillTitle: "Competenze Tecniche",
    skills: skills
};
