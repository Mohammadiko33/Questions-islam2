const greetings = [
  "🌹 سلام و عرض ادب و احترام 🌹",
  "🙏 درود بی‌پایان خدمت شما بزرگوار 🙏",
  "🌸 روز بخیر و شادی همراه لحظه‌هاتون 🌸",
  "💐 درود و ارادت تقدیم حضورتون 💐",
  "🌟 سلامی سرشار از انرژی مثبت 🌟",
  "🕊️ درود و آرامش برای شما نازنین 🕊️",
  "🌞 روزتون روشن و دل‌هاتون سبز 🌞",
  "🌺 سلامی صمیمانه و پر از مهربونی 🌺",
  "💎 درود ناب و ارزشمند برای شما 💎",
  "🌷 روز بخیر، دلتون همیشه بهاری 🌷",
  "🎉 سلامی پر از شادی و لبخند 🎉",
  "🍀 درود سبز و پر از خوشبختی 🍀",
  "🌈 روزی رنگین‌کمانی براتون آرزو دارم 🌈",
  "⚡ سلامی پر از انرژی و انگیزه ⚡",
  "📖 درود به شما فرهیخته و دانا 📖",
  "🎶 سلامی از جنس نغمه و آرامش 🎶",
  "🌍 روز بخیر جهانی و پر از امید 🌍",
  "🔥 درود پرحرارت و پرانرژی 🔥",
  "💫 سلامی درخشان و ناب 💫",
  "🌹 درود و آرزوی بهترین‌ها برای شما 🌹",
  "🙌 سلامی همراه با احترام ویژه 🙌",
  "🎁 روز بخیر با بهترین آرزوها 🎁",
  "💖 سلامی پر از محبت و دوستی 💖",
  "🌿 درود سبز و پرنشاط 🌿",
  "🪄 سلامی جادویی و پرامید 🪄",
  "🕯️ روز بخیر و روشن مثل شمع 🕯️",
  "🏆 سلامی همراه با موفقیت 🏆",
  "🖋️ درود اهل قلم و اندیشه 🖋️",
  "🧿 سلامی خوش‌یُمن و دلنشین 🧿",
  "🪷 روز بخیر آرامش‌بخش و ناب 🪷",
  "🌊 سلامی خنک و دلپذیر مثل دریا 🌊",
  "🐦 درود سبک‌بال و رها مثل پرنده 🐦",
  "🧡 سلامی گرم از دل صمیمیت 🧡",
  "💭 روز بخیر پر از اندیشه‌های زیبا 💭",
  "🎇 سلامی روشن مثل آسمون پرستاره 🎇",
  "🍎 درود شیرین مثل سیب 🍎",
  "🌻 روز بخیر مثل گل‌های آفتابگردان 🌻",
  "🤲 سلام و دعای خیر همراهتون 🤲",
  "🎀 درود لطیف و دلنشین مثل نسیم 🎀",
];

function getRandomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

const posts = [
  {
    id: 1,
    title: "چرا حضرت محمد این تعداد ازدواج داشته",
    cover: "./why-did-muhammad-have-so-many-marriages/cover.png",
    link: "./why-did-muhammad-have-so-many-marriages/response.html",
  },
];

const container = document.querySelector(".container");
posts
  .slice()
  .reverse()
  .forEach(({link , cover , title}) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <a href="${link}">
      <img src="${cover}" alt="${title}" />
      <div class="gradient"></div>
      <div class="text">${title}</div>
    </a>
    <div class="actions">
      <button class="like-btn" onclick="likeItem(this)">لایک</button>
      <button class="dislike-btn" onclick="dislikeItem(this)">دیس‌لایک</button>
    </div>
  `;
    container.appendChild(item);
  });

function dislikeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو 👎 دیس‌لایک کردم.  

📌 دلیل من : `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}

function likeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو ❤️ لایک کردم.  

💭 نظرم درباره‌ی پست : `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}