<div align="center">

# 🤖 fullstack-agent

**Uma skill completa para agentes de IA fullstack — comportamento seguro, ético e escrita avançada em EN e PT-BR.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Validation-Zod-ef4444)](https://zod.dev/)
[![Writing Skill](https://img.shields.io/badge/Writing%20Skill-v2.0.0-22c55e)](./src/skills/writing.ts)

</div>

---

## 💡 O que é isso?

`fullstack-agent` é uma **skill modular para orquestradores de IA** — um conjunto de princípios e diretrizes que um agente pode carregar para saber **como agir, o que nunca fazer e como escrever bem** em qualquer contexto.

A skill é composta por **partes independentes** (módulos `.ts`) e centralizada em um único arquivo de entrada: [`skill.md`](./skill.md).

> **Para instalar esta skill no seu agente:** leia o [`skill.md`](./skill.md). É só isso.

---

## 📂 Estrutura do repositório

```
fullstack-agent/
├── skill.md                        ← ponto de entrada da skill (o agente lê só isso)
├── README.md
└── src/
    └── skills/
        ├── fullstack-agent.ts      ← módulo: comportamento (behavior)
        └── writing.ts              ← módulo: escrita EN + PT-BR (v2.0.0)
```

---

## 🧱 Partes da skill

### 🔒 Parte 1 — Comportamento (`behavior`)

> `src/skills/fullstack-agent.ts`

Define **como o agente deve se comportar** em qualquer interação com o usuário.

| Categoria | Descrição |
|---|---|
| `goals` | Ajudar com baixo atrito, minimizar riscos, ser transparente |
| `mustAlways` | Menor privilégio, confirmar ações críticas, preservar contexto |
| `mustNever` | Nada ilegal, nada inventado em domínios sensíveis, sem vazamento de dados |
| `escalation` | Quando e como escalar decisões irreversíveis para um humano |

---

### ✏️ Parte 2 — Escrita (`writing`) `v2.0.0`

> `src/skills/writing.ts`

Define **como o agente deve produzir e revisar textos** em dois idiomas, com cobertura avançada de gramática, retórica, storytelling, UX writing, SEO e tradução.

| Idioma | Padrão de referência |
|---|---|
| 🇺🇸 English | American English / British English |
| 🇧🇷 Português Brasileiro | Acordo Ortográfico 2016 / norma culta |

**Seções cobertas:**

| Seção | Descrição |
|---|---|
| `principles` | Gramática e estilo por idioma |
| `toneMatrix` | Tom calibrado por contexto: corporate, marketing, legal, academic, social, email, storytelling |
| `rhetoric` | Ethos, pathos, logos, anáfora, tricólon, antítese, concessão |
| `storytelling` | Show don't tell, in medias res, PAS, Before/After/Bridge |
| `uxWriting` | CTAs, error messages, microcopy, onboarding, terminologia consistente |
| `seoWriting` | Keyword placement, meta description, E-E-A-T, featured snippets |
| `punctuationRules` | Pontuação detalhada por idioma |
| `commonMistakesToAvoid` | Erros frequentes em EN e PT-BR |
| `revisionChecklist` | 12 verificações antes de entregar qualquer texto |
| `contextStrategies` | Cold email, landing page, docs técnicos, LinkedIn, Thread X |
| `translation` | Princípios de tradução EN ↔ PT-BR + 8 falsos cognatos documentados |

---

## ⚡ Instalação rápida

### 1. Via `skill.md` (recomendado para agentes)

O agente lê o arquivo [`skill.md`](./skill.md) e carrega todas as definições diretamente como instruções de sistema. Nenhuma dependência extra necessária.

### 2. Via módulos TypeScript (para desenvolvedores)

```bash
git clone https://github.com/jmsah19/fullstack-agent.git
npm install zod
```

```ts
import { fullstackAgentSkill } from "./src/skills/fullstack-agent";
import { writingSkill }        from "./src/skills/writing";

agent.configureBehavior(fullstackAgentSkill.behavior);
agent.addSkill(writingSkill);
```

---

## 📝 Como adicionar uma nova parte

1. Crie `src/skills/minha-skill.ts` seguindo o padrão dos módulos existentes.
2. Adicione uma nova seção `## Parte N` no [`skill.md`](./skill.md) com as definições inline.
3. Atualize o manifesto no topo do `skill.md` com a nova entrada em `modules`.

---

## 🛡️ Princípios fundamentais

```
 Segurança       →  menor privilégio, nada irreversível sem confirmação
 Ética           →  transparente sobre ser IA, sem invenção de fatos sensíveis
 Transparência   →  explicar raciocínio, declarar incerteza
 UX              →  preservar contexto, linguagem proporcional ao usuário
 Escrita         →  gramática, retórica, storytelling, UX writing e SEO em EN e PT-BR
 Tradução        →  significado cultural, não palavras — com atenção a falsos cognatos
```

---

## 📄 Licença

MIT © [jmsah19](https://github.com/jmsah19)
