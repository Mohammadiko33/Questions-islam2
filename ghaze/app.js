const $ = document;
const nextbtn = $.querySelector(".next");

  let currTime = Number(nextbtn.dataset.time);
  const currName = nextbtn.name;

  const interval = setInterval(() => {
      currTime = currTime - 1;
      nextbtn.innerHTML = `Next ${currTime}`;
    }, 1000);
    if (currTime > 0) {
      clearInterval(interval);
    } else {
      nextbtn.removeAttribute("disabled");
    }

nextbtn.addEventListener("click", () => console.log(`🔥 app.js:18 => clicked`));
