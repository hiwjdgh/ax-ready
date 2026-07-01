#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "ax-ready";
const RUNTIME_ENTRIES = ["SKILL.md", "agents", "assets", "references"];

function usage() {
  console.log(`AX Ready

Usage:
  ax-ready install [--target <dir>] [--force]
  ax-ready path
  ax-ready help

Commands:
  install   Install the AX Ready skill files into a local skills directory.
  path      Print the default install path.
  help      Show this help.

Options:
  --target  Install into a custom parent directory. The skill is copied to <dir>/ax-ready.
  --force   Replace an existing ax-ready skill directory.
`);
}

function defaultSkillsDir() {
  if (process.env.CODEX_HOME) {
    return path.join(process.env.CODEX_HOME, "skills");
  }
  return path.join(os.homedir(), ".codex", "skills");
}

function packageRoot() {
  return path.resolve(__dirname, "..");
}

function parseArgs(argv) {
  const args = {
    command: argv[2] || "help",
    target: defaultSkillsDir(),
    force: false
  };

  for (let i = 3; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--force") {
      args.force = true;
    } else if (arg === "--target") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error("--target requires a directory path.");
      }
      args.target = path.resolve(value);
      i += 1;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return args;
}

function copyRecursive(source, destination) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function removeRecursive(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

function installSkill({ target, force }) {
  const sourceRoot = packageRoot();
  const installRoot = path.resolve(target);
  const destination = path.join(installRoot, SKILL_NAME);

  if (fs.existsSync(destination)) {
    if (!force) {
      throw new Error(`Skill already exists at ${destination}. Re-run with --force to replace it.`);
    }
    removeRecursive(destination);
  }

  fs.mkdirSync(destination, { recursive: true });
  for (const entry of RUNTIME_ENTRIES) {
    const source = path.join(sourceRoot, entry);
    if (!fs.existsSync(source)) {
      throw new Error(`Package is missing required entry: ${entry}`);
    }
    copyRecursive(source, path.join(destination, entry));
  }

  console.log(`Installed ${SKILL_NAME} to ${destination}`);
  console.log("Use it from an agent with: Use $ax-ready to prepare this project for AI agent coding.");
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv);
  } catch (error) {
    console.error(error.message);
    usage();
    process.exitCode = 1;
    return;
  }

  try {
    if (args.command === "install") {
      installSkill(args);
    } else if (args.command === "path") {
      console.log(path.join(args.target, SKILL_NAME));
    } else if (args.command === "help" || args.command === "--help" || args.command === "-h") {
      usage();
    } else {
      throw new Error(`Unknown command: ${args.command}`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();
