import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode as FaCodeIcon,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import {
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  faPhp,
  faSymfony,
  faLaravel,
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faGithub,
  faGitlab,
  faJira,
  faPython,
  faJs,
  faLinux,
  faWindows,
  faAws,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faCode,
  faToolbox,
  faDatabase,
  faCloud,
  faMobileAlt,
  faPalette,
  faProjectDiagram,
  faUsers,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import type {
  EducationItem,
  ExperienceItem,
  NavLinkItem,
  ProjectItem,
  SkillsCollection,
} from "@/types/portfolio";

export const navLinks: NavLinkItem[] = [
  { id: "home", icon: FaHome, text: "Accueil", path: "/" },
  { id: "skills", icon: FaCodeIcon, text: "Compétences", path: "/skills" },
  {
    id: "experience",
    icon: FaBriefcase,
    text: "Expérience",
    path: "/experience",
  },
  {
    id: "education",
    icon: FaGraduationCap,
    text: "Éducation",
    path: "/education",
  },
  { id: "projects", icon: FaLaptopCode, text: "Projets", path: "/projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
];

export const educations: EducationItem[] = [
  {
    period: "2023-08 - Présent",
    degree: "Master 2 en cours - Base de données et génie logiciel",
    institution: "Centre national de télé-enseignement de Madagascar",
  },
  {
    period: "01/2020 - 02/2022",
    degree: "License - Base de données et génie logiciel",
    institution: "Centre national de télé-enseignement de Madagascar",
  },
  {
    period: "2018",
    degree: "Baccalauréat Général",
    institution: "Lycée Saint Joseph Ivato Aéroport Antananarivo",
    details: "Série C",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "05/2023 - Présent",
    title: "Développeur Full Stack",
    company: "DEV WEB SERVICE (DWS)",
    location: "Ambatoroaka Antananarivo",
    tasks: [
      "Développement d'applications web sur mesure pour divers clients (e-commerce, CRM, tableaux de bord)",
      "Conception et implémentation d'API RESTful pour la communication front-end/back-end",
      "Collaboration avec les équipes techniques et fonctionnelles pour la définition des besoins",
      "Maintenance et évolution de solutions existantes en production",
      "Intégration de solutions techniques innovantes (payment gateway, authentification OAuth)",
      "Support technique et résolution d'incidents pour les applications en production",
      "Rédaction de documentation technique et guides d'utilisation",
    ],
    technologies: ["Symfony", "Laravel", "React", "Next.js", "MySQL", "PostgreSQL", "Docker", "Git", "API REST", "JWT"],
  },
  {
    period: "09/2022 - 02/2023",
    title: "Développeur Full Stack",
    company: "FIDEV",
    location: "Alasora Antananarivo",
    tasks: [
      "Création d'applications web responsive et performantes pour les besoins internes et clients",
      "Conception d'interfaces utilisateur modernes et ergonomiques avec React et Bootstrap",
      "Intégration de systèmes de paiement sécurisés (Stripe, PayPal)",
      "Développement de fonctionnalités back-end complexes (gestion utilisateurs, rapports dynamiques)",
      "Optimisation des performances des applications et des requêtes base de données",
      "Travail en équipe agile avec utilisation de Jira pour le suivi des tâches",
    ],
    technologies: ["Symfony", "React", "Node.js", "MySQL", "Bootstrap", "JavaScript", "Git", "REST API"],
  },
  {
    period: "01/2022 - 08/2022",
    title: "Développeur Full Stack (Stage)",
    company: "Paositra Malagasy",
    location: "Antananarivo",
    tasks: [
      "Développement d'un système de gestion logistique pour le suivi des envois postaux",
      "Création de tableaux de bord analytiques pour la visualisation des performances",
      "Automatisation de processus métiers (génération de rapports, notifications)",
      "Intégration de solutions de sécurité informatique (protection des données, gestion des accès)",
      "Formation des utilisateurs finaux à l'utilisation du système",
    ],
    technologies: ["Symfony", "PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Vision 360",
    date: "2024- présent",
    description:
      "A contribué au développement de l'application de reporting pour les boutiques Venum et Dragon Bleu.",
    tech: [faLaravel, faGitAlt, faGithub],
    demo: "#",
    code: "#",
  },
  {
    title: "Application de reporting - Version 1",
    date: "2023 - 02/2024",
    description:
      "Solution initiale avec génération de rapports et visualisation de données.",
    tech: [faSymfony, faBootstrap, faDocker, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },
  {
    title: "Microfinance Management",
    date: "09/2022 - 02/2023",
    description:
      "Tableau de bord interactif pour la visualisation de données financières",
    tech: [faSymfony, faNodeJs, faBootstrap, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },
  {
    title: "Gestion de stock",
    date: "01/2022 - 08/2022",
    description:
      "Application de gestion des stocks de produits postaux avec suivi des entrées, sorties et alertes de réapprovisionnement.",
    tech: [faSymfony, faNodeJs, faBootstrap, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },
];

export const skills: SkillsCollection = {
  backend: {
    title: "Back-End",
    icon: faServer,
    items: [
      { name: "Symfony", icon: faSymfony },
      { name: "Laravel", icon: faLaravel },
      { name: "PHP", icon: faPhp },
      { name: "Node.js", icon: faNodeJs },
      { name: "Python", icon: faPython },
      { name: "MySQL", icon: faDatabase },
      { name: "PostgreSQL", icon: faDatabase },
    ],
  },
  frontend: {
    title: "Front-End",
    icon: faCode,
    items: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "TypeScript", icon: faJs },
      { name: "JavaScript", icon: faJs },
      { name: "Tailwind CSS", icon: faCode },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
  tools: {
    title: "Outils & DevOps",
    icon: faToolbox,
    items: [
      { name: "Docker", icon: faDocker },
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "GitLab", icon: faGitlab },
      { name: "Jira", icon: faJira },
      { name: "Postman", icon: faCode },
      { name: "VSCode", icon: faCode },
      { name: "Figma", icon: faFigma },
    ],
  },
  other: {
    title: "Compétences Transversales",
    icon: faUsers,
    items: [
      { name: "Méthodologies Agiles", icon: faProjectDiagram },
      { name: "Gestion de Projet", icon: faProjectDiagram },
      { name: "Travail d'Équipe", icon: faUsers },
      { name: "Résolution de Problèmes", icon: faCheckCircle },
      { name: "Autonomie", icon: faClock },
    ],
  },
};