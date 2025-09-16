function setLocalItem({
  keyName,
  videoId = "introVideo",
  answerId = "answerCard",
  hintId = null,
  watchHintId = null,
}) {
  const video = document.getElementById(videoId);
  const answerCard = document.getElementById(answerId);
  const hintBox = hintId ? document.getElementById(hintId) : null;
  const watchHint = watchHintId ? document.getElementById(watchHintId) : null;

  if (!video || !answerCard) return;

  const KEY = `videoWatched-${keyName}`;

  const revealElement = (el) => {
    if (!el) return;
    el.classList.remove("hidden");
    el.classList.add("reveal");
  };

  const showAnswer = () => {
    revealElement(answerCard);
    revealElement(hintBox);
    if (watchHint) watchHint.style.display = "none";
  };

  if (localStorage.getItem(KEY) === "true") {
    showAnswer();
  } else {
    answerCard.classList.add("hidden");
    if (hintBox) hintBox.classList.add("hidden");
    if (watchHint) watchHint.style.display = "flex";
  }

  video.addEventListener("ended", () => {
    localStorage.setItem(KEY, "true");
    showAnswer();
  });

  document.addEventListener("visibilitychange", () => {
    if (
      document.visibilityState === "visible" &&
      localStorage.getItem(KEY) === "true"
    ) {
      showAnswer();
    }
  });
}

function setLocalItemStep({ watchHintId, videoId, steps }) {
  const hint = document.getElementById(watchHintId);
  let currentStep = 0;

  // چک وضعیت ذخیره‌شده
  steps.forEach((s, idx) => {
    const storageKey = `video_${videoId}_part${idx + 1}`;
    const watched = localStorage.getItem(storageKey) === "true";

    const video = document.getElementById(s.videoId);
    const answer = document.getElementById(s.answerId);

    if (watched) {
      answer.classList.remove("hidden");
      video.closest(".section").classList.remove("hidden");
      currentStep = idx + 1;
    } else {
      if (idx !== currentStep) {
        video.closest(".section").classList.add("hidden");
        answer.classList.add("hidden");
      }
    }
  });

  if (currentStep >= steps.length) {
    hint.style.display = "none";
    document.getElementById("extraBox")?.classList.remove("hidden");
    return;
  }

  function playStep(idx) {
    if (idx >= steps.length) {
      hint.style.display = "none";
      document.getElementById("extraBox")?.classList.remove("hidden");
      return;
    }

    const step = steps[idx];
    const video = document.getElementById(step.videoId);
    const answer = document.getElementById(step.answerId);
    const section = video.closest(".section");

    section.classList.remove("hidden");
    video.currentTime = 0;
    answer.classList.add("hidden");

    const storageKey = `video_${videoId}_part${idx + 1}`;

    video.onended = () => {
      answer.classList.remove("hidden");
      answer.classList.add("reveal");

      localStorage.setItem(storageKey, "true");

      currentStep++;
      if (currentStep < steps.length) {
        playStep(currentStep);
      } else {
        hint.style.display = "none";
        document.getElementById("extraBox")?.classList.remove("hidden");
      }
    };
  }

  playStep(currentStep);
}
