// Gera src/app/opengraph-image.png e twitter-image.png (1200×630) a partir de og/og-image.html,
// com um Chromium headless já instalado (Chrome, Edge, Brave ou Chromium). Sem dependência nova.
// Uso: npm run og:image   (ou CHROME_PATH=/caminho/do/binario npm run og:image)
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("Nenhum Chromium encontrado. Defina CHROME_PATH.");
  process.exit(1);
}

const source = pathToFileURL(resolve("og/og-image.html")).href;
const output = resolve("src/app/opengraph-image.png");
const profile = mkdtempSync(join(tmpdir(), "og-image-"));

try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--user-data-dir=${profile}`,
      "--window-size=1200,630",
      // Tempo para as Google Fonts carregarem antes da captura.
      "--virtual-time-budget=8000",
      `--screenshot=${output}`,
      source,
    ],
    { stdio: "inherit" },
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

copyFileSync(output, resolve("src/app/twitter-image.png"));
console.log(`OK: ${output} e twitter-image.png (via ${browser})`);
