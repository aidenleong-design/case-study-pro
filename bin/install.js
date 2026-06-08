#!/usr/bin/env node
"use strict";

/**
 * Installer for the Case Study Pro Claude Code skill.
 *
 * Copies the skill (SKILL.md + references/ + templates/) into a Claude skills
 * directory so Claude Code can load it.
 *
 *   npx github:aidenleong-design/case-study-pro          # into ./.claude/skills
 *   npx github:aidenleong-design/case-study-pro --global # into ~/.claude/skills
 *
 * Flags:
 *   --global, -g   Install for all projects (~/.claude/skills) instead of the
 *                  current project (./.claude/skills).
 *   --force,  -f   Overwrite an existing install of this skill.
 *   --help,   -h   Show this help.
 */

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "case-study-pro";
// Files/folders that make up the skill (relative to the package root).
const SKILL_CONTENTS = [
  "SKILL.md",
  "references",
  "templates",
  "CREDITS.md",
  "LICENSE",
];

function parseArgs(argv) {
  const opts = { global: false, force: false, help: false };
  for (const arg of argv) {
    switch (arg) {
      case "--global":
      case "-g":
        opts.global = true;
        break;
      case "--force":
      case "-f":
        opts.force = true;
        break;
      case "--help":
      case "-h":
        opts.help = true;
        break;
      default:
        console.error(`Unknown option: ${arg}\n`);
        opts.help = true;
    }
  }
  return opts;
}

function printHelp() {
  console.log(`
Case Study Pro — Claude Code skill installer

Usage:
  npx github:aidenleong-design/case-study-pro [options]

Options:
  -g, --global   Install into ~/.claude/skills (available in every project)
  -f, --force    Overwrite an existing install
  -h, --help     Show this help

Default target is ./.claude/skills (the current project).
`);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  // Node 16.7+ is required for fs.cpSync.
  if (typeof fs.cpSync !== "function") {
    console.error(
      "Error: Node 16.7 or newer is required (fs.cpSync is unavailable)."
    );
    process.exit(1);
  }

  const packageRoot = path.join(__dirname, "..");
  const skillsDir = opts.global
    ? path.join(os.homedir(), ".claude", "skills")
    : path.join(process.cwd(), ".claude", "skills");
  const targetDir = path.join(skillsDir, SKILL_NAME);

  if (fs.existsSync(targetDir) && !opts.force) {
    console.error(
      `A skill already exists at:\n  ${targetDir}\n\n` +
        `Re-run with --force to overwrite it.`
    );
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  for (const entry of SKILL_CONTENTS) {
    const src = path.join(packageRoot, entry);
    if (!fs.existsSync(src)) continue; // tolerate optional files
    const dest = path.join(targetDir, entry);
    fs.cpSync(src, dest, { recursive: true });
  }

  const scope = opts.global ? "globally (all projects)" : "in this project";
  console.log(
    `\n✓ Installed the "${SKILL_NAME}" skill ${scope}.\n` +
      `  Location: ${targetDir}\n\n` +
      `Start a new Claude Code session, then try:\n` +
      `  "Help me write a case study for my <project> project."\n`
  );
}

main();
