document.querySelector(".popular-recent ul").addEventListener("click", event => {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    const href = target.attributes.href;
    const ul = target.parentNode.parentNode;
    const wrapper = ul.parentNode;
    const popular = wrapper.querySelector("div.popular");
    const recent = wrapper.querySelector("div.recent");
    const popularBtn = ul.querySelector(".popular");
    const recentBtn = ul.querySelector(".recent")

    if (href.value === "#popular") {
      popular.classList.add("selected");
      recent.classList.remove("selected");
      popularBtn.classList.add("selected");
      recentBtn.classList.remove("selected");

    } else {
      recent.classList.add("selected");
      popular.classList.remove("selected");
      recentBtn.classList.add("selected");
      popularBtn.classList.remove("selected");
    }
  }
});

document.querySelectorAll("figure img").forEach(item => {
  item.addEventListener("click", event => {
    const item = event.target;
    const src = item.getAttribute("src");
    const caption = getNextSibling(item, "figcaption");
    const text = caption ? caption.innerText : "";
    openModalImage(src, text);
  });
});

function openModalImage(src, text) {
  const wrapper = document.createElement("div");
  const close = document.createElement("span");
  const img = document.createElement("img");
  const caption = document.createElement("div");

  close.classList.add("close");
  close.appendChild(document.createTextNode("×"));

  img.classList.add("modal-content");
  img.setAttribute("src", src);

  caption.classList.add("caption");
  caption.appendChild(document.createTextNode(text));

  wrapper.classList.add("img-modal");
  wrapper.appendChild(close);
  wrapper.appendChild(img);
  wrapper.appendChild(caption);

  document.body.appendChild(wrapper);
  document.body.classList.add("stop-scrolling");

  wrapper.addEventListener("click", () => {
    wrapper.remove();
    document.body.classList.remove("stop-scrolling");
  });
}

function getNextSibling(elem, selector) {
  var sibling = elem.nextElementSibling;

  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling
  }
}

document.querySelectorAll(".optin-career-planing-course").forEach(item => {
  item.addEventListener("click", () => {
    sender('b2aa78d27b1267')
  });
});
