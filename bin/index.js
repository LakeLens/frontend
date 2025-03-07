#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

const projectName = process.argv[2] || "my-app";

execSync(
  `git clone https://github.com/TheMercury1229/react-boilerplate.git ${projectName}`,
  { stdio: "inherit" }
);

console.log("✅ Boilerplate setup complete!");
console.log(`👉 cd ${projectName} && npm install && npm run dev`);
