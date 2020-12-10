import { showModal, closeModal } from "./modal";

const popularRecent = document.getElementById("popular-recent");
const popularRecentLinks = popularRecent.querySelector("ul");

popularRecentLinks.addEventListener("click", event => {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    updatePopularRecent(target.getAttribute("href"));
  }
});

if (window.location.hash) {
  updatePopularRecent(window.location.hash);
}

function updatePopularRecent(hash) {
  const popular = popularRecent.querySelector(".popular-list");
  const recent = popularRecent.querySelector(".recent-list");
  const popularBtn = popularRecentLinks.querySelector(".popular");
  const recentBtn = popularRecentLinks.querySelector(".recent");

  if (hash === "#popular") {
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

document.querySelectorAll("figure img").forEach(item => {
  item.addEventListener("click", event => {
    const item = event.target;
    const src = item.getAttribute("src");
    const caption = item.parentNode.querySelector("figcaption");
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
  const sibling = elem.nextElementSibling;

  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling
  }
}

window.app = window.app || {};
window.app.showSnackbar = function showSnackbar(event) {
  if (!event || !navigator.clipboard) {
    return
  }

  const elem = event.target.parentNode;
  const x = document.getElementById("snackbar");
  const url = window.location.href.split("#")[0] + elem.getAttribute("href");

  navigator.clipboard.writeText(url).then(() => {
    x.className = "show";
    setTimeout(() => x.className = x.className.replace("show", ""), 3000);
  });
};

document.querySelector(".optin-career-planing-course").addEventListener("click", () => {
  showModal("it-career-planning-course");
});
