import { z } from "zod";

// Skill: writing
// Objetivo: guiar o agente para produzir textos de alta qualidade
// em inglês (EN) e português brasileiro (PT-BR), adaptando tom,
// registro e convenções de cada idioma.

export const WritingSkillSchema = z.object({
  name: z.literal("writing"),
  version: z.literal("2.0.0"),
  description: z.string(),
  languages: z.array(z.enum(["en", "pt-BR"])),
  style: z.object({
    goals: z.array(z.string()),
    principles: z.record(z.enum(["en", "pt-BR"]), z.array(z.string())),
    toneAdaptation: z.record(z.enum(["en", "pt-BR"]), z.string()),
    toneMatrix: z.record(z.string(), z.record(z.enum(["en", "pt-BR"]), z.string())),
    commonMistakesToAvoid: z.record(z.enum(["en", "pt-BR"]), z.array(z.string())),
    punctuationRules: z.record(z.enum(["en", "pt-BR"]), z.array(z.string())),
    formattingRules: z.array(z.string()),
    rhetoric: z.array(z.string()),
    storytelling: z.array(z.string()),
    uxWriting: z.array(z.string()),
    seoWriting: z.array(z.string()),
    revisionChecklist: z.array(z.string()),
    contextStrategies: z.record(z.string(), z.array(z.string())),
  }),
  translation: z.object({
    principles: z.array(z.string()),
    falseCoginates: z.array(z.object({ en: z.string(), ptBR: z.string(), note: z.string() })),
  }),
  mustAlways: z.array(z.string()),
  mustNever: z.array(z.string()),
});

export const writingSkill = {
  name: "writing" as const,
  version: "2.0.0" as const,
  description:
    "Diretrizes avançadas de escrita para inglês (EN) e português brasileiro (PT-BR): gramática, estilo, retórica, storytelling, UX writing, SEO, tradução e revisão.",
  languages: ["en", "pt-BR"] as const,

  style: {
    // ------------------------------------------------------------------
    // OBJETIVOS
    // ------------------------------------------------------------------
    goals: [
      "Produzir textos claros, coesos e adequados ao contexto e público-alvo.",
      "Respeitar as convenções gramaticais, estilísticas e culturais de cada idioma.",
      "Adaptar tom e registro conforme o propósito (formal, técnico, conversacional, criativo).",
      "Preservar a voz e intenção original do usuário ao revisar ou reescrever textos.",
      "Maximizar clareza e impacto sem sacrificar precisão ou nuance.",
      "Guiar o leitor com estrutura lógica, progressão suave e fechamentos satisfatórios.",
    ],

    // ------------------------------------------------------------------
    // PRINCÍPIOS POR IDIOMA
    // ------------------------------------------------------------------
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
        "Front-load sentences with the most important information (inverted pyramid).",
        "Use parallel structure in lists and headings: all items should follow the same grammatical pattern.",
        "Vary sentence length intentionally: short sentences create punch; longer ones build rhythm.",
        "Avoid zombie nouns (nominalizations): 'reach a conclusion' → 'conclude'.",
        "Use transitional phrases to connect ideas: 'however', 'as a result', 'in contrast', 'building on this'.",
        "Choose precise words over vague intensifiers: 'very good' → 'excellent'; 'really important' → 'critical'.",
        "In persuasive writing, establish credibility (ethos), appeal to emotion (pathos), then logic (logos).",
      ],
      "pt-BR": [
        "Usar a norma culta do português brasileiro (BNCC / Acordo Ortográfico de 2016).",
        "Preferir voz ativa; reservar a passiva para ênfase ou contextos formais específicos.",
        "Evitar gerundismo excessivo: preferir 'vai enviar' a 'vai estar enviando'.",
        "Respeitar a colocação pronominal brasileira: próclise em frases negativas e após pronomes relativos.",
        "Usar 'você' como pronome de tratamento padrão em textos informais e digitais; 'o senhor/a senhora' em contextos muito formais.",
        "Adaptar regionalismos com cuidado: evitar expressões que só fazem sentido em uma região específica sem contextualização.",
        "Em escrita técnica, priorizar termos consagrados em português quando existirem (ex.: 'servidor' em vez de 'server').",
        "Usar vírgula após adjuntos adverbiais deslocados para início da frase.",
        "Estruturar parágrafos com ideia principal na primeira frase, desenvolvimento no meio e fechamento ou transição ao final.",
        "Usar conexões textuais ricas: 'porém', 'contudo', 'dessa forma', 'em razão disso', 'vale ressaltar que'.",
        "Variar o vocabulário intencionalmente: evitar repetição de palavras-chave a cada 2–3 frases.",
        "Em texto persuasivo, construir a argumentação em três camadas: premissa, evidência, conclusão.",
        "Preferir construções diretas: sujeito + verbo + complemento, sem intercalações desnecessárias.",
        "Usar ponto e vírgula para separar itens de listas longas que já contêm vírgulas internas.",
      ],
    },

    // ------------------------------------------------------------------
    // ADAPTAÇÃO DE TOM (visão geral)
    // ------------------------------------------------------------------
    toneAdaptation: {
      en: "Match tone to audience: professional/concise for business; warm/conversational for consumer copy; precise/hedged for academic or legal writing; energetic/direct for marketing.",
      "pt-BR": "Adaptar o tom ao público: objetivo e direto para corporativo/técnico; próximo e descontraído para digital/redes sociais; formal e cuidadoso para jurídico/acadêmico; vibrante e persuasivo para marketing.",
    },

    // ------------------------------------------------------------------
    // MATRIZ DE TOM POR CONTEXTO
    // ------------------------------------------------------------------
    toneMatrix: {
      corporate: {
        en: "Formal, data-driven, concise. Use third person when possible. Avoid contractions. Lead with conclusions.",
        "pt-BR": "Formal, objetivo, baseado em dados. Evitar gírias e contrações. Iniciar com a conclusão principal.",
      },
      technical_docs: {
        en: "Precise, imperative mood for instructions ('Click Save'), neutral tone, step-by-step structure.",
        "pt-BR": "Preciso, imperativo para instruções ('Clique em Salvar'), tom neutro, estrutura passo a passo.",
      },
      marketing: {
        en: "Energetic, benefit-first, uses 'you' frequently, strong CTAs, short punchy sentences.",
        "pt-BR": "Energético, foca em benefícios, usa 'você' com frequência, CTAs fortes, frases curtas e impactantes.",
      },
      social_media: {
        en: "Casual, engaging, emoji-friendly, conversational questions, hook in the first line.",
        "pt-BR": "Casual, envolvente, pode usar emojis, perguntas conversacionais, gancho na primeira linha.",
      },
      academic: {
        en: "Formal, hedged ('may suggest', 'evidence indicates'), third person, citation-ready, no contractions.",
        "pt-BR": "Formal, uso de modalizadores ('sugere-se', 'os dados indicam'), terceira pessoa, pronto para citações.",
      },
      legal: {
        en: "Extremely precise, no ambiguity, defined terms, passive voice acceptable, long complex sentences with clear referents.",
        "pt-BR": "Extremamente preciso, sem ambiguidade, termos definidos, passiva aceitável, frases longas com referentes claros.",
      },
      email: {
        en: "Subject line front-loads intent. Opening acknowledges context. Body is scannable. One clear CTA at end.",
        "pt-BR": "Assunto antecipa a intenção. Abertura contextualiza. Corpo escaneável. Um CTA claro ao final.",
      },
      storytelling: {
        en: "Show, don't tell. Use sensory details. Build tension before resolution. End with a resonant insight.",
        "pt-BR": "Mostrar, não dizer. Usar detalhes sensoriais. Construir tensão antes da resolução. Encerrar com uma percepção marcante.",
      },
    },

    // ------------------------------------------------------------------
    // ERROS COMUNS
    // ------------------------------------------------------------------
    commonMistakesToAvoid: {
      en: [
        "Confusing 'affect' (verb) vs 'effect' (noun).",
        "Using 'utilize' when 'use' is sufficient.",
        "Dangling modifiers: 'Running down the street, the rain started.'",
        "Overusing nominalization: 'make a decision' → 'decide'.",
        "Inconsistent tense within the same paragraph.",
        "Redundant phrases: 'past history', 'future plans', 'end result'.",
        "Weak openers: starting with 'There is/are' or 'It is important to note'.",
        "Overusing adverbs: 'quickly ran' → 'sprinted'.",
        "Unclear pronoun reference: 'John told Mike he was wrong.' (Who was wrong?)",
        "Burying the lead: putting the most important information at the end.",
        "Hedging excessively in non-academic contexts: 'it could perhaps possibly be'.",
        "Using 'very' as an intensifier: 'very unique' → 'unique'; 'very tired' → 'exhausted'.",
      ],
      "pt-BR": [
        "Concordância nominal e verbal incorreta: 'Haviam muitas pessoas' → 'Havia muitas pessoas'.",
        "Crase indevida antes de pronomes: 'à você' — errado; 'a você' — correto.",
        "Uso excessivo de gerúndio: 'Vou estar verificando' → 'Vou verificar'.",
        "Confundir 'mas' (adversativo) com 'mais' (adição ou grau).",
        "Usar 'meia' no lugar de 'meio': 'meio confuso', não 'meia confusa' (quando adverbiado).",
        "Repetição excessiva de palavras sem variação sinonímica.",
        "Falta de vírgula após 'sendo assim', 'portanto', 'no entanto'.",
        "Uso incorreto de 'há' vs 'a': 'há dois anos atrás' — pleonástico; usar apenas 'há dois anos'.",
        "Ambiguidade de referência pronominal: 'João disse a Pedro que ele estava errado.' (Quem estava errado?)",
        "Começar muitos parágrafos com 'Além disso' sem variar os conectivos.",
        "Uso de 'enquanto' no sentido de 'como' ou 'na qualidade de' (anglicismo).",
        "'Ao invés de' (oposição) confundido com 'em vez de' (substituição).",
        "Uso de 'não... nem' sem o primeiro 'nem': 'não gosto nem de café' → 'não gosto de café nem de chá'.",
      ],
    },

    // ------------------------------------------------------------------
    // PONTUAÇÃO
    // ------------------------------------------------------------------
    punctuationRules: {
      en: [
        "Em dash (—) for strong breaks or parenthetical emphasis — no spaces around it in AE.",
        "En dash (–) for ranges: pages 10–20, 2019–2024.",
        "Semicolon (;) to join two closely related independent clauses without a conjunction.",
        "Colon (:) to introduce a list, explanation, or quotation — must follow a complete clause.",
        "Comma splice is an error: 'I came, I saw, I conquered' is stylistic but should be intentional.",
        "Apostrophe for contractions (don't) and possession (the team's result), never for plurals.",
        "Exclamation points: use sparingly in formal writing; one is always enough.",
        "Ellipsis (...) for trailing off or omitted text; use sparingly in professional contexts.",
      ],
      "pt-BR": [
        "Travessão (—) para isolar expressões, diálogos e incisos — com espaço antes e depois em PT-BR.",
        "Ponto e vírgula (;) para separar orações coordenadas longas ou itens de listas complexas.",
        "Dois-pontos (:) para iniciar enumeração, explicação ou citação — deve seguir oração completa.",
        "Não usar vírgula entre sujeito e verbo: 'O presidente, falou' — errado.",
        "Vírgula obrigatória após adjunto adverbial deslocado: 'No dia seguinte, o resultado foi divulgado'.",
        "Reticencias (...) para indicação de suspensão ou omissão; não usar em excesso em textos formais.",
        "Ponto de exclamação: reservar para ênfase real; excesso infantiliza o texto.",
        "Aspas duplas para citações diretas; itálico para estrangeirismos e neologismos.",
      ],
    },

    // ------------------------------------------------------------------
    // FORMATAÇÃO
    // ------------------------------------------------------------------
    formattingRules: [
      "Use headings (H1, H2, H3) for documents longer than 3 paragraphs.",
      "Prefer bullet lists for 3+ parallel items; use numbered lists for sequential steps.",
      "Keep paragraphs to 3–5 sentences in digital/web contexts.",
      "Highlight key terms on first occurrence if writing documentation or guides.",
      "In EN, use double quotes for quotations; in PT-BR, use aspas duplas or guillemets (« »).",
      "Avoid walls of text: break content into scannable sections.",
      "Use bold for key terms, warnings, or actions; use italic for titles, foreign words, and subtle emphasis.",
      "Never use ALL CAPS for emphasis in body text — use bold instead.",
      "Table of contents for documents exceeding 5 sections.",
      "Code blocks for any inline code, commands, or file paths, even in prose.",
      "Consistent heading hierarchy: never skip from H1 to H3.",
      "White space is content: short paragraphs and line breaks improve comprehension.",
    ],

    // ------------------------------------------------------------------
    // RETÓRICA
    // ------------------------------------------------------------------
    rhetoric: [
      "Ethos (credibility): establish expertise early, cite sources, use precise language.",
      "Pathos (emotion): use concrete human stories, sensory language, and values the audience shares.",
      "Logos (logic): structure arguments with clear premises, evidence, and conclusions.",
      "Anaphora: repeat a phrase at the start of consecutive sentences for rhythm and emphasis.",
      "Tricolon: group ideas in threes for memorability ('fast, reliable, and secure').",
      "Antithesis: juxtapose contrasting ideas in parallel structure ('Not what you say, but how you say it.').",
      "Rhetorical questions: engage the reader without expecting an answer ('Why does this matter?').",
      "Concession: acknowledge the opposing view before refuting it — builds trust.",
      "Chiasmus: reverse grammatical structure for effect ('You live to work; don't work to live.').",
      "Use specific numbers over vague quantities: '87% of users' beats 'most users'.",
    ],

    // ------------------------------------------------------------------
    // STORYTELLING
    // ------------------------------------------------------------------
    storytelling: [
      "Every story needs a protagonist, a conflict, and a resolution — even in business writing.",
      "Show, don't tell: replace 'she was nervous' with 'her hands trembled as she opened the email'.",
      "Start in medias res (in the middle of action) to hook readers immediately.",
      "Use the 'Before / After / Bridge' structure for transformational narratives.",
      "The 'Problem / Agitate / Solve' (PAS) framework works for persuasive and marketing texts.",
      "Build tension before the resolution — delay the answer to keep readers engaged.",
      "Use sensory details (sight, sound, texture) to make abstract ideas concrete.",
      "End with a resonant insight or call to action, not a summary of what was just said.",
      "In PT-BR: explorar a riqueza da narrativa oral brasileira — ritmo, causos, humor sutil.",
      "Callbacks: reference earlier elements at the end for structural satisfaction.",
    ],

    // ------------------------------------------------------------------
    // UX WRITING
    // ------------------------------------------------------------------
    uxWriting: [
      "Be clear over clever: users should never have to guess what a button does.",
      "Use action verbs for buttons and CTAs: 'Save changes', 'Get started', 'Try for free'.",
      "Error messages: state what happened, why, and what to do next — never blame the user.",
      "Empty states are opportunities: guide users to the next action instead of showing a blank screen.",
      "Microcopy should reduce anxiety: 'We’ll never share your email' next to a sign-up form.",
      "Confirmation dialogs: be specific about what will be deleted/changed — never just 'Are you sure?'.",
      "Use consistent terminology throughout the product: pick one word and stick to it ('delete' vs 'remove').",
      "Write for scanning: front-load labels and headings with the most important word.",
      "Avoid jargon in user-facing copy: 'Authentication failed' → 'Wrong email or password'.",
      "In PT-BR: usar linguagem próxima e acolhedora em produtos digitais; evitar termos técnicos em interfaces para usuários finais.",
      "Onboarding copy should celebrate the user's progress, not list features.",
      "Notifications: be specific about the source and urgency; avoid generic 'You have a new message'.",
    ],

    // ------------------------------------------------------------------
    // SEO WRITING
    // ------------------------------------------------------------------
    seoWriting: [
      "Place primary keyword in: title (H1), first 100 words, at least one H2, and meta description.",
      "Write meta descriptions as compelling summaries (150–160 chars) — include a CTA.",
      "Use semantic keywords (LSI): related terms and synonyms around the main keyword.",
      "Structure with H1 (one per page), H2 (main sections), H3 (subsections).",
      "Aim for featured snippet: answer the target question directly in 40–60 words near the top.",
      "Internal linking: link to relevant pages within the same site for context and crawlability.",
      "Image alt text: descriptive and keyword-relevant, not generic ('image1.png').",
      "URL slugs: short, lowercase, hyphen-separated, keyword-first ('blog/ai-agent-best-practices').",
      "Avoid keyword stuffing: write for humans first; Google rewards natural language.",
      "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness): back claims with data, credentials, and citations.",
      "In PT-BR: keyword research separado — português brasileiro tem volume de busca distinto do europeu.",
    ],

    // ------------------------------------------------------------------
    // CHECKLIST DE REVISÃO
    // ------------------------------------------------------------------
    revisionChecklist: [
      "Read aloud: awkward rhythm or tongue-twisters are signs of poor flow.",
      "Cut 10%: most first drafts are 10–30% longer than they need to be.",
      "Check every sentence for one idea: split sentences that carry two unrelated thoughts.",
      "Verify all claims: every fact, statistic, or quote must be traceable to a source.",
      "Consistency check: same terms, same spelling variant (AE or BE), same heading style throughout.",
      "Check transitions: every paragraph should connect logically to the next.",
      "Remove throat-clearing openers: 'In this article, we will...' → just say the thing.",
      "Passive voice audit: flag every passive construction and evaluate if active is clearer.",
      "Pronoun clarity: every 'it', 'they', 'this' must have an unambiguous antecedent.",
      "Final read for tone: does it match the intended audience and context?",
      "In PT-BR: revisar crase, concordâncias, gerundismos e repetição vocabular.",
      "Accessibility: avoid metaphors that depend on visual or cultural knowledge the reader may not have.",
    ],

    // ------------------------------------------------------------------
    // ESTRATÉGIAS POR CONTEXTO
    // ------------------------------------------------------------------
    contextStrategies: {
      email_cold_outreach: [
        "Subject: personalized, under 50 chars, creates curiosity or states clear value.",
        "First line: reference something specific about the recipient — no generic openers.",
        "Body: one problem, one solution, one CTA. Max 5 sentences.",
        "Avoid: 'I hope this email finds you well', 'Just following up', 'Per my last email'.",
      ],
      landing_page: [
        "Hero: headline (benefit-focused) + subheadline (how) + primary CTA above the fold.",
        "Social proof: testimonials with full names, roles, and companies — specifics beat generics.",
        "Objection handling: anticipate the top 3 reasons someone would NOT buy and address them.",
        "CTA buttons: use first person ('Start my free trial') over second person ('Start your free trial').",
      ],
      technical_documentation: [
        "Start every page with a one-sentence summary of what it covers.",
        "Prerequisites section before any tutorial or guide.",
        "Code examples for every non-trivial concept.",
        "Versioning: document which version an API/feature applies to.",
        "Warnings and notes in callout boxes, not inline in paragraphs.",
      ],
      social_linkedin: [
        "Hook in first line (before 'see more' cutoff): bold claim, surprising stat, or question.",
        "Short paragraphs: 1–2 lines max, with line breaks for breathing room.",
        "Personal story + professional insight = highest engagement formula.",
        "End with a question to drive comments.",
        "Hashtags: 3–5 relevant ones at the end, not scattered through the text.",
      ],
      thread_twitter_x: [
        "Tweet 1: the hook — make a bold statement or promise a payoff.",
        "Each tweet: one idea, under 240 chars ideally.",
        "Number tweets (1/, 2/, 3/) for clarity.",
        "Last tweet: summary + CTA (follow, retweet, link).",
        "Threads work best as 'how I did X', 'N lessons from Y', or 'unpopular opinion'.",
      ],
    },
  },

  // --------------------------------------------------------------------
  // TRADUÇÃO EN <-> PT-BR
  // --------------------------------------------------------------------
  translation: {
    principles: [
      "Translate meaning, not words: prioritize natural expression in the target language.",
      "Adapt idioms: 'break a leg' ≠ 'quebre uma perna' → 'boa sorte'.",
      "Cultural references: replace or explain references unknown to the target audience.",
      "Formality level: re-evaluate in target language — EN 'you' maps to 'você' in most PT-BR contexts.",
      "Numbers and dates: EN uses MM/DD/YYYY; PT-BR uses DD/MM/AAAA.",
      "Currency and units: adapt to local conventions if the text is market-specific.",
      "Keep SEO keywords in the target language — do not translate search terms literally.",
      "Technical terms: prefer established PT-BR translations; if none exists, keep EN in italics with translation in parentheses.",
    ],
    falseCoginates: [
      { en: "actually", ptBR: "atualmente", note: "'Actually' = 'na verdade'; 'atualmente' = 'currently'." },
      { en: "eventually", ptBR: "eventualmente", note: "'Eventually' = 'no final'; 'eventualmente' = 'occasionally'." },
      { en: "pretend", ptBR: "pretender", note: "'Pretend' = 'fingir'; 'pretender' = 'to intend'." },
      { en: "push", ptBR: "puxar", note: "'Push' = 'empurrar'; 'puxar' = 'to pull'." },
      { en: "realize", ptBR: "realizar", note: "'Realize' = 'perceber'; 'realizar' = 'to carry out / to hold an event'." },
      { en: "sympathetic", ptBR: "simpático", note: "'Sympathetic' = 'compassivo/solidário'; 'simpático' = 'likeable'." },
      { en: "college", ptBR: "colégio", note: "'College' = 'faculdade/universidade'; 'colégio' = 'high school'." },
      { en: "sensible", ptBR: "sensível", note: "'Sensible' = 'sensável/razoável'; 'sensível' = 'sensitive'." },
    ],
  },

  // --------------------------------------------------------------------
  // MUST ALWAYS
  // --------------------------------------------------------------------
  mustAlways: [
    "Identify the target language (EN or PT-BR) before generating or revising text.",
    "Ask for context (audience, purpose, tone, format) if not provided before writing long-form content.",
    "Signal when a term has no direct equivalent in the target language and suggest the best option.",
    "When translating EN ↔ PT-BR, adapt idioms and cultural references — never translate them literally.",
    "Preserve the author's voice and style when editing or revising existing text.",
    "Flag grammar or style issues with clear explanations, not just corrections.",
    "Apply the appropriate context strategy (email, landing page, docs, social) when the format is known.",
    "Use the tone matrix to calibrate register before writing in any specific context.",
    "When revising, apply the full revision checklist before returning the final version.",
    "In UX writing, always prioritize clarity and user confidence over cleverness.",
  ],

  // --------------------------------------------------------------------
  // MUST NEVER
  // --------------------------------------------------------------------
  mustNever: [
    "Mix languages within the same paragraph unless the user explicitly requests code-switching.",
    "Apply EN grammar rules to PT-BR text or vice versa.",
    "Generate text with known factual errors to make the writing 'sound better'.",
    "Remove nuance or technical precision for the sake of brevity without user consent.",
    "Use informal or offensive language in formal/professional contexts.",
    "Translate idioms literally between EN and PT-BR.",
    "Use false cognates as direct translations (see translation.falseCoginates).",
    "Write vague error messages that blame the user or provide no actionable next step.",
    "Ignore the intended format: a tweet must not read like a whitepaper and vice versa.",
    "Use ALL CAPS for emphasis in body text.",
    "Pad word count with filler phrases: 'it is worth noting that', 'as previously mentioned'.",
  ],
};

export type WritingSkill = typeof writingSkill;
