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

const posts = [{
    id: 1,
    title: "چرا حضرت محمد این تعداد ازدواج داشته",
    cover: "./why-did-muhammad-have-so-many-marriages/cover.png",
    link: "./why-did-muhammad-have-so-many-marriages/response.html",
  },
  {
    id: 2,
    title: "صحبت درمورد حجاب در قرآن ",
    link: "./islam-is-reqire/response.html",
    cover: "./islam-is-reqire/cover.png",
  },
  {
    id: 3,
    title: "اگه هر چیزی خالق داره ، خدا رو کی خلق کرده ؟",
    link: "./who-create-god/response.html",
    cover: "./who-create-god/cover.png",
  },
  {
    id: 4,
    title: "قرآن سخن کیست ؟ ، محمد یا الله ؟",
    link: "./who-wrriting-quran-muhammad-of-allah/response.html",
    cover: "./who-wrriting-quran-muhammad-of-allah/cover.png",
  },
  {
    id: 5,
    title: "خاورمیانه منطقه پیغمبر خیز و البته بدبختی خیز",
    link: "./MiddleEast-is-home-prophet/response.html",
    cover: "./MiddleEast-is-home-prophet/cover.png",
  },
  {
    id: 6,
    title: "نماز نمیخونم ، به سالمندان کمک میکنم",
    link: "./i-am-not-reading-namaz-becuase-im-help-old-women/response.html",
    cover: "./i-am-not-reading-namaz-becuase-im-help-old-women/cover.png",
  },
  {
    id: 7,
    title: "صحبت درمورد قلب و مغز در قرآن",
    link: "./heart-or-brain-chat/response.html",
    cover: "./heart-or-brain-chat/cover.jpg",
  },
  {
    id: 8,
    title: "رستم یا نوح ؟ قهرمانان شاهنامه یا قرآن ؟",
    link: "./real-superhiro-quran-or-shahnameh/response.html",
    cover: "./real-superhiro-quran-or-shahnameh/cover.jpg",
  },
  {
    id: 9,
    title: "در دنیا قرآن های مختلفی وجود داره",
    link: "./just-one-quran-or-not/response.html",
    cover: "./just-one-quran-or-not/cover.jpg",
  },
  {
    id: 10,
    title: "هیچ انسان سالمی با خواندن قرآن مسلمان نمی‌شود",
    link: "./no-iman-with-read-quran/response.html",
    cover: "./no-iman-with-read-quran/cover.jpg",
  },
  {
    id: 11,
    title: "قلب مرکز تفکره ؟ اشتباه علمی قرآن",
    link: "./heart-or-brain-verse-quran/response.html",
    cover: "./heart-or-brain-verse-quran/cover.jpg",
  },
  {
    id: 12,
    title: "خود آدم باعقلش میتونه به چیزایی که در قرآن وجود داره برسه",
    link: "./empty-quran/response.html",
    cover: "./empty-quran/cover.jpg",
  },
  {
    id: 13,
    title: "رابطه زن مسلمان با 72 مرد بهشتی",
    link: "./the-72-virgins-of-paradise/response.html",
    cover: "./the-72-virgins-of-paradise/cover.jpg",
  },
  {
    id: 14,
    title: "مکالمه درمورد اینکه قران ساخته دست بشره",
    link: "./quran-create-by-human/response.html",
    cover: "./quran-create-by-human/cover.jpg",
  },
  {
    id: 15,
    title: "ارتش اسـ*رائیـل با اخلاق ترین ارتش جهانه",
    link: "./ghaze/response.html",
    cover: "./ghaze/cover.png",
  },
  {
    id: 16,
    title: "هیچ قرآنی توی قرن اول اسلام نبوده",
    link: "./quran-after-200year-islam/response.html",
    cover: "./quran-after-200year-islam/cover.png",
  },
  {
    id: 17,
    title: "مراحل شکل گیری جنین درقرآن کپی برداری ازجالینوسه",
    link: "./quran-is-copy-paste-arasto/response.html",
    cover: "./quran-is-copy-paste-arasto/cover.jpg",
  },
  {
    id: 18,
    title: "مسلمانان بت پرستند ، چون دارن مکه رو میپرستن",
    link: "./is-it-maccae-god/response.html",
    cover: "./is-it-maccae-god/cover.png",
  },
  {
    id: 18,
    title: "چرا خدایی که میدونه من جهنمیم منو خلق میکنه",
    link: "./why-allah-create-me/response.html",
    cover: "./why-allah-create-me/cover.jpg",
  },
  {
    id: 19,
    title: "صحبت انسان با مورچه",
    link: "./human-talk-ant/response.html",
    cover: "./human-talk-ant/cover.png"
  },
  {
    id: 20,
    title: "اسلام من یا اسلام عربستان",
    link: "./islam-iran-or-arabstan/response.html",
    cover: "./islam-iran-or-arabstan/cover.jpg"
  },
  {
    id: 21,
    title: "مثال های کشکی قرآن",
    link: "./Muhammad-talk-about-fly/response.html",
    cover: "./Muhammad-talk-about-fly/cover.jpg"
  },
  {
    id: 22,
    title: "سوتی های قرآن زیر زره بین علم",
    link: "./scientific-review-of-quran-verse/response.html",
    cover: "./scientific-review-of-quran-verse/cover.jpg"
  },
  {
    id: 23,
    title: "اسلام مروج برده داری بود",
    link: "./islam-created-slavery/response.html",
    cover: "./islam-created-slavery/cover.png"
  },
];

const container = document.querySelector(".container");
posts
  .slice()
  .reverse()
  .forEach(({ link, cover, title }) => {
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
      <button class="dislike-btn" onclick="dislikeItem(this)">دیس‌لایک & ارسال بازخورد</button>
    </div>
  `;
    container.appendChild(item);
  });

function dislikeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو 👎 دیس‌لایک کردم.  

📌 دلیل من اینکه : `;

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
