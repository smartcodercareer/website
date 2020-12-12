let tries = 0;

window.addEventListener("load", () => {
  const intervalHandler = setInterval(() => {
    const elements = document.querySelectorAll(".sender-form-link");

    if (elements.length && tries >= 5) {
      clearInterval(intervalHandler);
    }

    if (elements.length) {
      elements.forEach(item => item.setAttribute("rel", "noreferrer noopener"));
    }

    tries++;

  }, 200);
});
