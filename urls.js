const axios = require("axios");
const fs = require("fs");
const path = require("path");

const filename = process.argv[2];

if (!filename) {
  console.error("Please dont be a dillweed");
  process.exit(1);
}

let urls;
try {
  const fileContent = fs.readFileSync(filename, "utf-8");
  urls = fileContent.trim().split("\n");
} catch (err) {
  console.error("Gahhhhhhhh damn you suck");
  process.exit(1);
}

async function downloadAndSave(url) {
  try {
    const response = await axios.get(url);
    const { data } = response;
    const hostname = new URL(url).hostname;
    const filename = path.join(process.cwd(), `${hostname}.txt`);
    fs.writeFileSync(filename, data);
    console.log("Ya did it");
  } catch (err) {
    console.error("Ya Dun Goofed!");
  }
}

async function main() {
  for (let url of urls) {
    await downloadAndSave(url);
  }
}

main();
