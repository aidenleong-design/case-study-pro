# Case Study Pro

A portfolio coaching and creation skill for designers and design engineers. It guides you through a case study,
asking about real work, picks a narrative shape that fits the story, and writes an
honest, specific case study as markdown, slides, or portfolio-wide guidance.

It combines two excellent MIT-licensed skills into one: the *coaching brain* of
[scoobynko/case-study-skill](https://github.com/scoobynko/case-study-skill) and
the *format library* of
[SonwaneyY/Portfolio-Case-Study](https://github.com/SonwaneyY/Portfolio-Case-Study).
See [CREDITS.md](CREDITS.md).

## What it does
- **Coaches, doesn't fill templates.** "No answer, no section." No invented metrics.
- **Grounds in real work.** For code projects it reads your git diff / PRs before
  asking questions.
- **Picks the right shape.** Nine narrative frameworks, matched to the story.
- **Writes in your voice.** Built-in anti-AI-slop rules.
- **Adapts the output.** Markdown, Notion/Framer/PDF, or a slide deck.
- **Zooms out.** Portfolio-level guidance across multiple case studies.

## Layout
```
case-study-pro/
├── SKILL.md                      # orchestrator: modes + 7-step workflow
├── references/
│   ├── narrative-frameworks.md   # story shapes + 9 frameworks
│   ├── structure-guide.md        # framing & visual ratios by designer type
│   ├── tone-guide.md             # voice + banned phrases
│   ├── hiring-rubric.md          # what reviewers assess
│   ├── metrics-guide.md          # discover & present impact data
│   └── portfolio-guide.md        # the portfolio as a whole
├── templates/
│   ├── project-template.md       # context to hand the skill
│   └── slide-template.md         # presentation blueprint
├── CREDITS.md
└── LICENSE
```

## Install (personal skill)
Copy or symlink this folder into your Claude Code skills directory:
```bash
cp -r case-study-pro ~/.claude/skills/case-study-pro
# or, to keep developing it here and have Claude use it live:
ln -s "$(pwd)/case-study-pro" ~/.claude/skills/case-study-pro
```
Then start a new Claude Code session and try: *"Help me write a case study for my
checkout redesign project."*

## Things to Note
Read hiring-rubric.md and change it with any research you have for your career path.
Understanding what hiring managers look for and how they assess candidates is key.

## License
MIT. Derived from two MIT-licensed works — both upstream notices are preserved in
[LICENSE](LICENSE).
