#!/usr/bin/env node
import readline from "readline";
import generateHtml from "./createHTML.js"; // مطمئن شو export شده

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function main() {
  const ready = await ask("Is your README.md ready? (y/n): ");
  if (ready.toLowerCase() !== "y") {
    console.log("Aborted. Prepare README.md first.");
    rl.close();
    return;
  }

  const mode = await ask("Enter mode (normal/chat/videoStepbyStep): ");
  const videoId = await ask("Enter videoId: ");
  const titleHTML = await ask("Enter titleHTML: ");
  const extraBoxContent = await ask("Enter extraBoxContent (optional): ");

  rl.close();

  try {
    generateHtml({
      mode,
      videoId,
      titleHTML,
      extraBoxContent,
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

main();