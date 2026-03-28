import { z } from "zod";

// Skill: writing
// Objetivo: guiar o agente para produzir textos de alta qualidade
// em inglês (EN) e português brasileiro (PT-BR), adaptando tom,
// registro e convenções de cada idioma.

export const WritingSkillSchema = z.object({
  name: z.literal("writing"),
  version: z.literal("1.0.0"),
  description: z.string(),
  languages: z.array(z.enum(["en", "pt-BR"])),
  style: z.object({
    goals: z.array(z.string()),
    principles: z.record(z.enum(["en", "pt-BR"]), z.array(z.string())),
    toneAdaptation: z.record(z.enum(["en", "pt-BR"]), z.string()),
    commonMistakesToAvoid: z.record(z.enum(["en", "pt-BR"]), z.array(z.string())),
    formattingRules: z.array(z.string()),
  }),
  mustAlways: z.array(z.string()),
  mustNever: z.array(z.string()),
});

export const writingSkill = {
  name: "writing" as const,
  version: "1.0.0" as const,
  description:
    "Diretrizes de escrita de alta qualidade para inglês (EN) e português brasileiro (PT-BR), incluindo tom, registro, erros comuns e convenções de formatação.",
  languages: ["en", "pt-BR"] as const,
  style: {
    goals: [
      "Produzir textos claros, coesos e adequados ao contexto e público-alvo.",
      "Respeitar as convenções gramaticais, estilísticas e culturais de cada idioma.",
      "Adaptar tom e registro conforme o propósito (formal, técnico, conversacional, criativo).",
      "Preservar a voz e intenção original do usuário ao revisar ou reescrever textos.",
    ],
    principles: {
      en: [
        "Prefer active voice over passive voice to increase clarity and directness.",
        "Use short sentences (15–20 words average) to improve readability.",
        "Avoid jargon unless writing for a specialized audience; define acronyms on first use.",
        "Be consistent with American English (AE) or British English (BE) spelling — never mix.",
        "Use Oxford comma in lists: 'apples, oranges, and bananas'.",
        "Avoid starting sentences with coordinating conjunctions (but, and, or) in formal writing.",
        "Use inclusive language: 'they/them' as singular pronoun when gender is unspecified.",
        "In technical writing, prefer concrete nouns and specific verbs over vague abstractions.",
      ],
      "pt-BR": [
        "Usar a norma culta do português brasileiro (BNCC / Acordo Ortográfico de 2016).",
        "Preferir voz ativa; reservar a passiva para ênfase ou contextos formais específicos.",
        "Evitar gerundismo excessivo: preferir 'vai enviar' a 'vai estar enviando'.",
        "Respeitar a colocação pronominal brasileira: próclise em frases negativas e após pronomes relativos.",
        "Usar 'você' como pronome de tratamento padrão em textos informais e digitais; 'o senhor/a senhora' em contextos muito formais.",
        "Adaptar regionalismos com cuidado: evitar expressões que só fazem sentido em uma região específica sem contextualização.",
        "Em escrita técnica, priorizar termos consagrados em português quando existirem (ex.: 'servidor' em vez de 'server' sempre que possível).",
        "Usar vírgula após adjuntos adverbiais deslocados para início da frase.",
      ],
    },
    toneAdaptation: {
      en: "Match the tone to the audience: professional and concise for business/technical audiences; warm and conversational for consumer-facing copy; precise and hedged for academic or legal writing.",
      "pt-BR": "Adaptar o tom ao público: objetivo e direto para contextos corporativos ou técnicos; próximo e descontraído para comunicações digitais e redes sociais; formal e cuidadoso para textos jurídicos, acadêmicos ou institucionais.",
    },
    commonMistakesToAvoid: {
      en: [
        "Confusing 'affect' (verb) vs 'effect' (noun).",
        "Using 'utilize' when 'use' is sufficient.",
        "Dangling modifiers: 'Running down the street, the rain started.' (Who is running?)",
        "Overusing nominalization: 'make a decision' → 'decide'.",
        "Inconsistent tense within the same paragraph.",
        "Redundant phrases: 'past history', 'future plans', 'end result'.",
      ],
      "pt-BR": [
        "Concordância nominal e verbal incorreta: 'Haviam muitas pessoas' → 'Havia muitas pessoas'.",
        "Crase indevida antes de pronomes: 'à você' — errado; 'a você' — correto.",
        "Uso excessivo de gerúndio: 'Vou estar verificando' → 'Vou verificar'.",
        "Confundir 'mas' (adversativo) com 'mais' (adição ou grau).",
        "Usar 'meia' no lugar de 'meio': 'meio confuso', não 'meia confusa' (quando adverbiado).",
        "Repetição excessiva de palavras sem variação sinonímica.",
        "Pontuação após 'sendo assim', 'portanto', 'no entanto' sem vírgula.",
      ],
    },
    formattingRules: [
      "Use headings (H1, H2, H3) for documents longer than 3 paragraphs.",
      "Prefer bullet lists for 3+ parallel items; use numbered lists for sequential steps.",
      "Keep paragraphs to 3–5 sentences in digital/web contexts.",
      "Highlight key terms on first occurrence if writing documentation or guides.",
      "In EN, use double quotes for quotations; in PT-BR, use aspas duplas or guillemets (« »).",
      "Avoid walls of text: break content into scannable sections.",
    ],
  },
  mustAlways: [
    "Identify the target language (EN or PT-BR) before generating or revising text.",
    "Ask for context (audience, purpose, tone) if not provided, before writing long-form content.",
    "Signal when a term has no direct equivalent in the target language and suggest the best option.",
    "When translating EN ↔ PT-BR, adapt idioms and cultural references — never translate them literally.",
    "Preserve the author's voice and style when editing or revising existing text.",
    "Flag grammar or style issues with clear explanations, not just corrections.",
  ],
  mustNever: [
    "Mix languages within the same paragraph unless the user explicitly requests code-switching.",
    "Apply EN grammar rules to PT-BR text or vice versa.",
    "Generate text with known factual errors to make the writing 'sound better'.",
    "Remove nuance or technical precision for the sake of brevity without user consent.",
    "Use informal or offensive language in formal/professional contexts.",
  ],
};

export type WritingSkill = typeof writingSkill;
