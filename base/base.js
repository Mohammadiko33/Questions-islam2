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

function setLocalItemStep({ watchHintId, steps }) {
  const hint = document.getElementById(watchHintId);
  let currentStep = 0;

  // اگر قبلا دیده شده، از localStorage
  steps.forEach((s, idx) => {
    const watched = localStorage.getItem(s.videoId) === "true";
    if (watched) {
      document.getElementById(s.answerId).classList.remove("hidden");
      document
        .getElementById(s.videoId)
        .parentElement.parentElement.classList.remove("hidden");
      currentStep = idx + 1;
    } else {
      if (idx !== currentStep) {
        document
          .getElementById(s.videoId)
          .parentElement.parentElement.classList.add("hidden");
        document.getElementById(s.answerId).classList.add("hidden");
      }
    }
  });

  if (currentStep >= steps.length) {
    hint.style.display = "none";
    document.getElementById("extraBox").classList.remove("hidden");
    return;
  }

  function playStep(idx) {
    if (idx >= steps.length) {
      hint.style.display = "none";
      document.getElementById("extraBox").classList.remove("hidden");
      return;
    }

    const step = steps[idx];
    const video = document.getElementById(step.videoId);
    const answer = document.getElementById(step.answerId);

    video.parentElement.parentElement.classList.remove("hidden");
    video.currentTime = 0;
    answer.classList.add("hidden");

    video.onended = () => {
      answer.classList.remove("hidden");
      localStorage.setItem(step.videoId, "true"); // ذخیره وضعیت در localStorage
      currentStep++;
      if (currentStep < steps.length) {
        playStep(currentStep);
      } else {
        hint.style.display = "none";
        document.getElementById("extraBox").classList.remove("hidden");
      }
    };
  }

  playStep(currentStep);
}
