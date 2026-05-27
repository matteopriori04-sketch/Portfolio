/**
 * Project data, decoupled from markup. `ProjectCard.astro` renders each entry.
 * Bilingual fields use `{ en, it }`; technical labels (stack) stay language-neutral.
 */

import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import discotecaImg from '../assets/images/progetto-discoteca.jpg';

type Localized = Record<Lang, string>;

export interface Project {
  /** Stable id, used as the anchor / key. */
  id: string;
  /** Project name (localized — product names like "InfoStudio 54" stay as-is). */
  title: Localized;
  /** Optional preview image, shown as the card header. */
  image?: ImageMetadata;
  /** One-line summary shown under the title. */
  tagline: Localized;
  /** What it does and why it matters. */
  description: Localized;
  /** My role / contribution. */
  role: Localized;
  /** Optional standout result, rendered as a callout. */
  highlight?: Localized;
  /** Tech stack badges. */
  stack: string[];
  /** Source code URL. */
  github?: string;
  /** Optional live demo URL. */
  demo?: string;
  /** Marks work that is still ongoing (renders an "in progress" badge). */
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 'minerva-web-parsing',
    title: {
      en: 'Web parsing & evaluation system for Minerva LLM',
      it: 'Sistema di web parsing e valutazione per l’LLM Minerva',
    },
    tagline: {
      en: 'End-to-end pipeline to acquire and analyse web documents — Computer Engineering Lab (Prof. Navigli, Sapienza).',
      it: 'Pipeline end-to-end per acquisire e analizzare documenti web — Laboratorio di Ingegneria Informatica (Prof. Navigli, Sapienza).',
    },
    description: {
      en: 'A complete pipeline that fetches web pages, parses them with a multi-domain Python parser built on Crawl4AI, and evaluates extraction quality. I built a Gold Standard reference set and an automatic evaluation layer combining classic metrics (precision / recall / F1) with an LLM-as-Judge running locally through Ollama. Results are persisted in MariaDB and exposed via a FastAPI REST API and a Jinja2 web UI, with the whole system orchestrated as multiple containers through Docker Compose.',
      it: 'Una pipeline completa che recupera pagine web, le analizza con un parser multi-dominio in Python basato su Crawl4AI e ne valuta la qualità di estrazione. Ho costruito un Gold Standard di riferimento e un livello di valutazione automatica che combina metriche classiche (precision / recall / F1) con un LLM-as-Judge eseguito in locale tramite Ollama. I risultati sono salvati in MariaDB ed esposti tramite API REST in FastAPI e una Web UI in Jinja2, con l’intero sistema orchestrato in più container via Docker Compose.',
    },
    role: {
      en: 'Built in a team of three (me and two friends). I worked on the parsing pipeline, the evaluation suite (metrics + LLM-as-Judge) and the multi-container architecture.',
      it: 'Realizzato in un team di tre (io e due amici). Mi sono occupato della pipeline di parsing, della suite di valutazione (metriche + LLM-as-Judge) e dell’architettura multi-container.',
    },
    highlight: {
      en: '7th place out of ~60 groups — earning access to a custom NLP thesis contributing to the development of Minerva, the Italian national LLM by Sapienza NLP and Babelscape.',
      it: '7° posto su circa 60 gruppi — con accesso a una tesi personalizzata in NLP che contribuisce allo sviluppo di Minerva, l’LLM nazionale italiano di Sapienza NLP e Babelscape.',
    },
    stack: ['Python', 'FastAPI', 'Crawl4AI', 'MariaDB', 'Docker', 'Ollama'],
    github: 'https://github.com/matteopriori04-sketch/Text_WebScraper',
  },
  {
    id: 'infostudio-54',
    title: {
      en: 'Nightclub website — InfoStudio 54',
      it: 'Sito web per discoteca — InfoStudio 54',
    },
    image: discotecaImg,
    tagline: {
      en: 'Full-stack site with table booking and user accounts — Web Technologies & Systems (Sapienza), team of 3.',
      it: 'Sito full-stack con prenotazione tavoli e account utente — Tecnologie e Sistemi Web (Sapienza), team da 3.',
    },
    description: {
      en: 'A full-stack web application for a nightclub: visitors can register, log in and book tables, while all data is persisted in a relational database. Built from scratch with a classic LAMP-style stack, covering front-end pages, server-side logic and SQL schema design.',
      it: 'Un’applicazione web full-stack per una discoteca: gli utenti possono registrarsi, effettuare il login e prenotare i tavoli, con tutti i dati salvati in un database relazionale. Realizzata da zero con uno stack classico in stile LAMP, dal front-end alla logica server-side fino allo schema SQL.',
    },
    role: {
      en: 'Built in a team of three (me and two friends): I worked on front-end and server-side features (booking flow, authentication) and the database schema.',
      it: 'Realizzato in un team di tre (io e due amici): mi sono occupato di front-end e funzionalità server-side (flusso di prenotazione, autenticazione) e dello schema del database.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    github: 'https://github.com/matteopriori04-sketch/InfoStudio-54',
  },
  {
    id: 'domain-chatbot',
    title: {
      en: 'Domain chatbot grounded in live web sources',
      it: 'Chatbot di dominio ancorato a fonti web reali',
    },
    tagline: {
      en: 'Custom thesis with Prof. Navigli — a chatbot that answers from real, parsed web pages.',
      it: 'Tesi personalizzata col Prof. Navigli — un chatbot che risponde a partire da pagine web reali e analizzate.',
    },
    description: {
      en: 'An ongoing thesis project: a domain chatbot that retrieves relevant web pages, parses them with the parsers developed in the Minerva project, and produces answers grounded in real sources through an LLM. The goal is reliable, source-backed responses rather than free-form generation.',
      it: 'Un progetto di tesi in corso: un chatbot di dominio che recupera pagine web pertinenti, le analizza con i parser sviluppati nel progetto Minerva e produce risposte basate su fonti reali tramite un LLM. L’obiettivo sono risposte affidabili e ancorate alle fonti, invece di una generazione libera.',
    },
    role: {
      en: 'Built in a team of three (me and two friends), continuing the work from the Minerva project under the guidance of Prof. Navigli.',
      it: 'Realizzato in un team di tre (io e due amici), proseguendo il lavoro del progetto Minerva sotto la guida del Prof. Navigli.',
    },
    stack: ['Python', 'LLM', 'Crawl4AI', 'NLP'],
    inProgress: true,
  },
];
