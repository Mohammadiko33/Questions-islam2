import fs from "fs";
import path from "path";

function addPostToAppJs({ videoId, titleHTML }) {
  const appPath = path.resolve("./base/app.js");
  if (!fs.existsSync(appPath)) {
    console.warn("⚠️ فایل app.js پیدا نشد:", appPath);
    return;
  }

  let content = fs.readFileSync(appPath, "utf-8");

  // پیدا کردن آرایه posts
  const postsMatch = content.match(/const posts = \[(.*?)\];/s);
  if (!postsMatch) {
    console.warn("⚠️ آرایه posts پیدا نشد در app.js");
    return;
  }

  let postsContent = postsMatch[1].trim();

  // پیدا کردن آخرین id
  const ids = [...postsContent.matchAll(/id:\s*(\d+)/g)].map((m) =>
    parseInt(m[1], 10)
  );
  const lastId = ids.length ? Math.max(...ids) : 0;
  const newId = lastId + 1;

  // ساخت آیتم جدید
  const newPost = `
  {
    id: ${newId},
    title: "${titleHTML}",
    link: "./${videoId}/response.html",
    cover: "./${videoId}/cover.png"
  }`;

  // اضافه کردن به آخر آرایه قبل از ]
  if (postsContent.endsWith(",")) {
    postsContent += newPost + ",";
  } else {
    postsContent += "," + newPost;
  }

  const newContent = content.replace(
    /const posts = \[.*?\];/s,
    `const posts = [${postsContent}\n];`
  );

  fs.writeFileSync(appPath, newContent, "utf-8");
  console.log("✅ پست جدید به app.js اضافه شد:", newId, titleHTML);
}

export default function generateHtml({
  mode = "normal",
  path: fileName = "README.md",
  videoId,
  extraBoxContent = "",
  titleHTML,
}) {
  const rootDir = path.resolve(`./`); // rootproject

  // مسیر ورودی
  let inputDir = rootDir;
  if (mode === "normal" || mode === "videoStepbyStep") {
    if (!videoId) throw new Error("❌ videoId اجباری هست در این حالت");
    inputDir = path.join(rootDir, videoId);
  }

  const absPath = path.join(inputDir, fileName);
  if (!fs.existsSync(absPath)) {
    throw new Error(`❌ فایل پیدا نشد: ${absPath}`);
  }
  const mdContent = fs.readFileSync(absPath, "utf-8");

  // مسیر خروجی
  let outputDir = rootDir;
  if (mode === "normal" || mode === "videoStepbyStep") {
    outputDir = path.join(rootDir, videoId);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const evidenceDir = path.join(outputDir, "evidence");
    if (!fs.existsSync(evidenceDir)) {
      fs.mkdirSync(evidenceDir);
    }
  }

  // ------------------ حالت chat ------------------
  if (mode === "chat") {
    const lines = mdContent.split("\n").filter((line) => line.trim() !== "");
    const messages = lines.map((line) => {
      const [senderRaw, ...textParts] = line.split(":");
      const sender = senderRaw.trim().toLowerCase();
      const text = textParts.join(":").trim();

      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const readTime = wordCount * 300;

      return {
        sender,
        text: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        readTime,
      };
    });

    const html = `<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>چت</title>
  <link rel="stylesheet" href="../base/chats/chat.css">
</head>
<body>
  <div class="chat-container" id="chat"></div>
  <audio id="sendSound" src="../base/chats/public/get.wav" controls style="display:none;"></audio>
  <audio id="receiveSound" src="../base/chats/public/send.mp3" controls style="display:none;"></audio>
  <script src="../base/chats/chat.js"></script>
  <script>
    const messages = ${JSON.stringify(messages, null, 2)};
    initChat(messages);
  </script>
</body>
</html>`;

    const outPath = path.join(rootDir, `${videoId}/response.html`);
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ فایل chat ساخته شد:", outPath);
    fs.unlinkSync(absPath);
    return;
  }

  // ------------------ حالت normal ------------------
  if (mode === "normal") {
    if (!videoId) throw new Error("❌ videoId اجباری هست در حالت normal");

    const lines = mdContent.split("\n").filter((line) => line.trim() !== "");
    const bodyContent = lines
      .map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("####"))
          return `<h4>${trimmed.replace(/^####\s*/, "")}</h4>`;
        if (trimmed.startsWith("###"))
          return `<h3>${trimmed.replace(/^###\s*/, "")}</h3>`;
        if (trimmed.startsWith("<img") || trimmed.startsWith("<div"))
          return trimmed;
        const withStrong = trimmed.replace(
          /\*\*(.*?)\*\*/g,
          "<strong>$1</strong>"
        );
        return `<p>${withStrong}</p>`;
      })
      .join("\n");

    const extraHtml = extraBoxContent
      ? `<div id="extraBox" class="extra-box hidden mt-2">
           <h2>نکات تکمیلی</h2>
           <ul>${extraBoxContent}</ul>
         </div>`
      : "";

    const pageTitle = titleHTML || videoId;

    const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="../base/base.css">
</head>
<body>
  <div class="container">

    <!-- ادعا -->
    <div class="card card--claim">
      <h2>ادعا</h2>
      <video id="${videoId}" src="./claim.mp4" controls></video>
    </div>

    <!-- جواب -->
    <div id="answerBox" class="card card--answer hidden mt-2">
      <h2>جواب</h2>
      ${bodyContent}
    </div>

    <!-- نکات تکمیلی -->
    ${extraHtml}

    <!-- پیام هشدار -->
    <div id="hint" class="watch-hint mt-2">
      <span>برای مشاهده جواب و نکات تکمیلی، ابتدا ویدیو را کامل ببینید.</span>
    </div>

  </div>

  <script src="../base/base.js"></script>
  <script>
    setLocalItem({
      keyName: "${videoId}",
      videoId: "${videoId}",
      answerId: "answerBox",
      hintId: "extraBox",
      watchHintId: "hint"
    });
  </script>
</body>
</html>`;

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ فایل normal ساخته شد:", outPath);
    fs.unlinkSync(absPath);

    // ← این خط اضافه کن
    addPostToAppJs({ videoId, titleHTML: pageTitle });

    return;
  }

  // ------------------ حالت videoStepbyStep ------------------
  if (mode === "videoStepbyStep") {
    const parts = mdContent.split(/^# ادعا/m).slice(1);
    const steps = [];

    const sectionsHtml = parts
      .map((block, idx) => {
        const number = idx + 1;
        const lines = block.split("\n").filter((l) => l.trim() !== "");
        const claimVideoLine = lines.find((l) => l.includes("<video"));
        const claimVideo = claimVideoLine
          ? claimVideoLine.replace(
              /<video(.*?)>/,
              `<video id="claim${number}" data-key="claim--part${number}"$1>`
            )
          : "";

        const answerIdx = lines.findIndex((l) => l.startsWith("# جواب"));
        const answerContentLines = lines.slice(answerIdx + 1);
        const answerContent = answerContentLines
          .map((line) => {
            const trimmed = line.trim();
            if (trimmed.startsWith("####"))
              return `<h4>${trimmed.replace(/^####\s*/, "")}</h4>`;
            if (trimmed.startsWith("###"))
              return `<h3>${trimmed.replace(/^###\s*/, "")}</h3>`;
            if (trimmed.startsWith("<img") || trimmed.startsWith("<div"))
              return trimmed;
            const withStrong = trimmed.replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            );
            return `<p>${withStrong}</p>`;
          })
          .join("\n");

        steps.push({ videoId: `claim${number}`, answerId: `answer${number}` });

        return `
      <!-- ========== بخش ${number} ========== -->
      <div id="section${number}" class="section ${number > 1 ? "hidden" : ""}">
        <div class="card card--claim">
          <h2># ادعا ${number}</h2>
          <div class="video-wrapper">${claimVideo}</div>
        </div>

        <div id="answer${number}" class="card card--answer hidden">
          <h2># جواب ${number}</h2>
          ${answerContent}
        </div>
      </div>`;
      })
      .join("\n");

    const extraHtml = extraBoxContent
      ? `<div id="extraBox" class="extra-box hidden">
           <h2>نکات تکمیلی</h2>
           <ul>${extraBoxContent}</ul>
         </div>`
      : "";

    const pageTitle = titleHTML || "ویدیو چند بخشی";

    const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="../base/base.css">
</head>
<body>
  <div class="container">
    <h1 class="page-title">${pageTitle}</h1>
    <div id="hint" class="watch-hint" aria-live="polite">
      برای دیدن پاسخ و ادامه، ویدیوها را به ترتیب کامل تماشا کنید.
    </div>

    ${sectionsHtml}
    ${extraHtml}
  </div>

  <script src="../base/base.js"></script>
  <script>
    const steps = ${JSON.stringify(steps, null, 2)};
    setLocalItemStep({ watchHintId: "hint", steps });
  </script>
</body>
</html>`;

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ فایل normal ساخته شد:", outPath);
    fs.unlinkSync(absPath);
    // ← این خط اضافه کن
    addPostToAppJs({ videoId, titleHTML: pageTitle });
    return;
  }
}