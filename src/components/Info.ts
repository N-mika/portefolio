// Social Media Icons
import Linknding from "../assets/icon/linkedin.svg";
import Gitlab from "../assets/icon/gitlab_green.svg";
import Facebook from "../assets/icon/facebook.svg";
import Instagram from "../assets/icon/instagram.svg";
import gitHub from "../assets/icon/github.svg";
import Whatsapp from "../assets/icon/whatsapp.svg";

// Project Images
import Ro from "../assets/Img/RO.png";
import Hackathon from "../assets/Img/competition.jpg";
import Transport from "../assets/Img/tranport.png";
import NaturaVamilla from "../assets/Img/vanilla.png";
import Mdgformation from "../assets/Img/mdgformation.png";
import EmploiDuTemps from "../assets/Img/emploiedutemps.png";
import Stock from "../assets/Img/gestionstock.png";
import MamiBeauter from "../assets/Img/mamibeauter.png";
import Aesnafianar from "../assets/Img/AESNASite.png";
import trasmatitime from "../assets/Img/transportmaritime.png";

export const contactInfo = [
  {id : 'facebook' , Icon: Facebook, link: "https://www.facebook.com/mikatieko02/" },
  {id : 'instagram', Icon: Instagram, link: "https://www.instagram.com/tieko.m/" },
  {id : 'whatsapp' , Icon: Whatsapp, link: "https://wa.me/+261331524733" },
  {
    id : 'linkinding', Icon: Linknding,
    link: "https://www.linkedin.com/in/michael-nandrasana-214009261/",
  },
  { id : 'gitlab', Icon: Gitlab, link: "https://gitlab.com/Mika-Na" },
  { id : 'github', Icon: gitHub, link: "https://github.com/N-mika" },
];
// Education and Experiences Data
export const education = [
  {
    year: "2025",
    degree: "Master professionnel et ingénieur en informatique",
    school: "École Nationale de l'Informatique (ENI), Madagascar",
    description: "Spécialisation en Génie logiciel & Base de données",
  },
  {
    year: "2023",
    degree: "Licence professionnelle en informatique",
    school: "École Nationale de l'Informatique (ENI), Madagascar",
    description: "Formation approfondie en développement logiciel",
  },
  {
    year: "2019",
    degree: "Baccalauréat",
    school: "Lycée Horace François , Antalaha ,Madagascar",
    description: "Obtention du diplôme du baccalauréat",
  },
];
// Professional Experiences Data
export const experiences = [
  {
    year: "2025",
    company: "Mahiratra Groupe",
    project: "Application Intranet",
    description:
      "Développement d'une application intranet pour la gestion interne de l'entreprise.",
  },
  {
    year: "2025",
    company: "Mahiratra Groupe",
    project: "Transformation Digitale",
    description:
      "Développement d'une application transport maritime pour la gestion des bateaux pour une entreprise.",
  },
  {
    year: "2024",
    company: "Tranoweb",
    project: "Mdgformation",
    description:
      "Contribution au développement d'une plateforme de formation en ligne.",
  },
  {
    year: "2023",
    company: "Faculté de Sciences",
    project: "Gestion d'emploi du temps",
    description:
      "Développement d'un système de gestion d'emploi du temps universitaire.",
  },
  {
    year: "2022",
    company: "Fyhary Soft",
    project: "Gestion d'entrepôt",
    description:
      "Création d'une application de gestion de stock et d'entrepôt.",
  },
];

// Projects Data
export const projects = [
  {
    title: "Transport Maritime",
    description:
      "Plateforme complète de gestion du transport maritime : réservation de cargaisons, suivi des expéditions, gestion des clients, des paiements et des tarifs, avec un tableau de bord administrateur.",
    image: trasmatitime,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Figma",
    ],
    link: "https://transportmaritime.vercel.app/",
  },
  {
    title: "AESN Fianarantsoa",
    description:
      "Site vitrine d'une association d'étudiants solidaires et natifs d'Antalaha, mettant en avant les activités, objectifs et événements de l'organisation.",
    image: Aesnafianar,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://aesnafianar.vercel.app/",
  },
  {
    title: "Natura Vanilla",
    description:
      "Site vitrine pour une entreprise spécialisée dans la production et la vente de vanille naturelle à Sambava, Madagascar.",
    image: NaturaVamilla,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://naturavanilla.com/",
  },
  {
    title: "MaMi Beauté",
    description:
      "Site vitrine pour un salon de beauté basé à Fianarantsoa, présentant les services et les prestations proposées.",
    image: MamiBeauter,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://mamibeauter.vercel.app/",
  },
  {
    title: "Calcul Matriciel",
    description:
      "Application web interactive permettant d’effectuer des opérations sur les matrices avec visualisation en temps réel.",
    image: Ro,
    tags: ["Vue.js", "JavaScript", "Tailwind CSS"],
    link: "https://rechercheoperationnel.vercel.app/",
  },
  {
    title: "Hackathon Inter-universitaire",
    description:
      "Participation à un hackathon de 48h avec conception et développement d’une solution innovante en équipe.",
    image: Hackathon,
    tags: ["React", "Node.js", "MongoDB"],
    link: "",
  },
  {
    title: "Gestion Maritime (Prototype)",
    description:
      "Application de gestion des bateaux et itinéraires maritimes avec suivi des opérations et organisation logistique.",
    image: Transport,
    tags: ["React", "Express", "MongoDB", "Agile Scrum"],
    link: "",
  },
  {
    title: "Gestion de Flotte Automobile",
    description:
      "Système de gestion de véhicules incluant suivi, maintenance, historique et gestion administrative de la flotte.",
    image:
      "https://images.unsplash.com/photo-1758411898471-fa144c487c85?auto=format&fit=crop&w=1080&q=80",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    link: "",
  },
  {
    title: "MDG Formation",
    description:
      "Plateforme de formation en ligne offrant des cours variés avec suivi des progrès des apprenants.",
    image: Mdgformation,
    tags: ["Vue.js", "Node.js", "MySQL"],
    link: "",
  },
  {
    title: "Gestion d'Emploi du Temps",
    description:
      "Application de gestion des emplois du temps pour les étudiants et le personnel universitaire.",
    image: EmploiDuTemps,
    tags: ["Vue.js", "Node.js", "MySQL"],
    link: "",
  },
  {
    title: "Gestion d'Entrepôt",
    description:
      "Système de gestion de stock et d'entrepôt permettant d’optimiser les opérations logistiques et les points de vente.",
    image: Stock,
    tags: ["Vue.js", "MySQL"],
    link: "",
  },
];
