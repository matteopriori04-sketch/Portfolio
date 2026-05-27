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
      'I’m a third-year Computer Engineering student at Sapienza University of Rome. The coursework gave me solid foundations across software, systems and data, and I enjoy the parts where a vague problem turns into something that actually runs.',
      'I’m drawn to cybersecurity and applied AI, and the work I like best sits there: building systems and pipelines, then measuring whether they actually work — from web parsing to LLM evaluation. I value clean, documented code and reproducible setups over guesswork.',
    ],
  },
  it: {
    eyebrow: 'Chi sono',
    title: 'Ingegnere in formazione, problem solver per natura',
    paragraphs: [
      'Sono uno studente del terzo anno di Ingegneria Informatica alla Sapienza di Roma. Il percorso mi ha dato basi solide tra software, sistemi e dati, e ciò che mi appassiona è la parte in cui un problema poco definito diventa qualcosa che funziona davvero.',
      'Mi interessano cybersecurity e intelligenza artificiale applicata, e il lavoro che preferisco si colloca proprio lì: costruire sistemi e pipeline e poi misurare se funzionano davvero — dal parsing web alla valutazione di LLM. Preferisco codice pulito e documentato e ambienti riproducibili al tirare a indovinare.',
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
      'I’m currently finishing my B.Sc. in Computer Engineering at Sapienza and plan to continue with a master’s in AI or Cybersecurity. I’m open to internships, collaborations, and interesting conversations — email is the best way to reach me.',
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
      'Sto concludendo la laurea triennale in Ingegneria Informatica alla Sapienza e proseguirò con una magistrale in AI o Cybersecurity. Sono aperto a tirocini, collaborazioni e conversazioni interessanti — il modo migliore per contattarmi è via mail.',
  },
};
