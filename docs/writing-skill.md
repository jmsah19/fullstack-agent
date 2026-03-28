# Writing Skill

Este arquivo descreve a skill **writing** — uma skill complementar à `fullstack-agent` para produção e revisão de textos em **inglês (EN)** e **português brasileiro (PT-BR)**.

## Manifesto da skill

```json
{
  "name": "writing",
  "version": "1.0.0",
  "entry": "src/skills/writing.ts",
  "language": "typescript",
  "export": "writingSkill",
  "schema": "WritingSkillSchema",
  "languages": ["en", "pt-BR"],
  "description": "Diretrizes de escrita de alta qualidade para EN e PT-BR: tom, registro, erros comuns e formatação."
}
```

## Para que serve

A skill **writing** instrui o agente sobre como:

- Produzir, revisar e adaptar textos em **EN** (American ou British English) e **PT-BR** (norma culta).
- Adaptar **tom e registro** conforme o público e o propósito do texto.
- Evitar **erros gramaticais e estilísticos** comuns em cada idioma.
- Respeitar **convenções de formatação** para web, documentação e textos longos.
- Traduzir ou adaptar conteúdo entre EN ↔ PT-BR de forma idiomática, sem tradução literal.

## Idiomas cobertos

| Idioma | Código | Convenção de referência |
|---|---|---|
| Inglês | `en` | American English (padrão) / British English |
| Português Brasileiro | `pt-BR` | Acordo Ortográfico 2016 / norma culta BNCC |

## Como instalar esta skill no seu agente

1. Ler este `docs/writing-skill.md` e extrair o manifesto JSON do bloco acima.
2. Carregar o módulo em `src/skills/writing.ts`.
3. Importar `writingSkill`.
4. Injetar `writingSkill.style` e as listas `mustAlways`/`mustNever` como instruções de sistema.

```ts
import { writingSkill } from "../src/skills/writing";

agent.addSkill(writingSkill);
// O agente passa a consultar writingSkill.style.principles,
// writingSkill.style.commonMistakesToAvoid e writingSkill.style.toneAdaptation
// ao gerar ou revisar qualquer texto.
```

## Relação com a skill fullstack-agent

A skill **writing** é complementar à `fullstack-agent`:

- `fullstack-agent` → define **comportamento geral** (segurança, ética, escalação).
- `writing` → define **qualidade de linguagem e escrita** (gramática, tom, formatação).

Ambas podem ser carregadas simultaneamente no mesmo agente.
