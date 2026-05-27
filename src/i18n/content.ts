/**
 * Longer-form prose content (hero, about, section intros, page metadata),
 * separated from markup so copy can be edited without touching components.
 */

import type { Lang } from './ui';

type Localized<T> = Record<Lang, T>;

/** Per-page <title> and meta description, used by BaseLayout for SEO / OG. */
export const meta: Localized<{ title: string; description: string }> = {
  en: {
    title: 'Matteo Priori — Computer Engineering @ Sapienza',
    description:
      'Portfolio of Matteo Priori, third-year Computer Engineering student at Sapienza University of Rome, focused on cybersecurity and applied AI.',
  },
  it: {
    title: 'Matteo Priori — Ingegneria Informatica @ Sapienza',
    description:
      'Portfolio di Matteo Priori, studente del terzo anno di Ingegneria Informatica alla Sapienza di Roma, con focus su cybersecurity e intelligenza artificiale applicata.',
  },
};

export const hero: Localized<{
  greeting: string;
  name: string;
  subtitle: string;
  positioning: string;
}> = {
  en: {
    greeting: 'Hi, I’m',
    name: 'Matteo Priori',
    subtitle: 'Computer Engineering student @ Sapienza University of Rome',
    positioning:
      'Third-year student building toward cybersecurity and applied AI — currently contributing to Minerva, the Italian LLM developed by Sapienza NLP and Babelscape.',
  },
  it: {
    greeting: 'Ciao, sono',
    name: 'Matteo Priori',
    subtitle: 'Studente di Ingegneria Informatica @ Sapienza Università di Roma',
    positioning:
      'Studente del terzo anno orientato a cybersecurity e intelligenza artificiale applicata — attualmente contribuisco a Minerva, l’LLM italiano sviluppato da Sapienza NLP e Babelscape.',
  },
};

export const about: Localized<{
  eyebrow: string;
  title: string;
  paragraphs: string[];
}> = {
  en: {
    eyebrow: 'About',
    title: 'Engineer in the making, problem solver by default',
    paragraphs: [
      'I’m in my third year of Computer Engineering at Sapienza University of Rome. The coursework gave me solid foundations across software, systems and data — but what I enjoy most is taking a vague problem and turning it into something that actually runs.',
      'I’m now choosing between two master’s tracks: Cybersecurity and Artificial Intelligence. Both pull me in, and the work I do today — from web-parsing pipelines to LLM evaluation — sits right at their intersection.',
      'I like clean, well-documented code, reproducible setups (Docker, Linux, Git) and measuring whether something works instead of assuming it does. This very site is part of that mindset: simple, fast, and readable end to end.',
    ],
  },
  it: {
    eyebrow: 'Chi sono',
    title: 'Ingegnere in formazione, problem solver per natura',
    paragraphs: [
      'Sono al terzo anno di Ingegneria Informatica alla Sapienza di Roma. Il percorso mi ha dato basi solide tra software, sistemi e dati — ma ciò che mi appassiona di più è prendere un problema poco definito e trasformarlo in qualcosa che funziona davvero.',
      'Sto scegliendo tra due percorsi magistrali: Cybersecurity e Artificial Intelligence. Mi attraggono entrambi, e il lavoro che faccio oggi — da pipeline di parsing web alla valutazione di LLM — si colloca proprio alla loro intersezione.',
      'Amo il codice pulito e ben documentato, gli ambienti riproducibili (Docker, Linux, Git) e misurare se qualcosa funziona invece di darlo per scontato. Questo sito stesso fa parte di questa mentalità: semplice, veloce e leggibile dall’inizio alla fine.',
    ],
  },
};

export const sections: Localized<{
  projectsEyebrow: string;
  projectsTitle: string;
  projectsIntro: string;
  skillsEyebrow: string;
  skillsTitle: string;
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
}> = {
  en: {
    projectsEyebrow: 'Projects',
    projectsTitle: 'Things I’ve built',
    projectsIntro:
      'A selection of academic and personal work. Each project links to its source — the code is part of the portfolio.',
    skillsEyebrow: 'Skills',
    skillsTitle: 'Tools I work with',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk',
    contactIntro:
      'I’m currently studying Computer Engineering and plan to continue with a master’s in AI or Cybersecurity (still deciding which). I’m open to job offers — the best way to reach me is by email.',
  },
  it: {
    projectsEyebrow: 'Progetti',
    projectsTitle: 'Cosa ho costruito',
    projectsIntro:
      'Una selezione di lavori accademici e personali. Ogni progetto rimanda al codice sorgente — il codice fa parte del portfolio.',
    skillsEyebrow: 'Competenze',
    skillsTitle: 'Strumenti che uso',
    contactEyebrow: 'Contatti',
    contactTitle: 'Parliamone',
    contactIntro:
      'Attualmente studio Ingegneria Informatica e proseguirò con una magistrale in AI o Cybersecurity (devo ancora decidere quale). Sono aperto a offerte di lavoro — il modo migliore per contattarmi è via mail.',
  },
};
