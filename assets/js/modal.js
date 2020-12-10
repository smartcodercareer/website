window.app = window.app || {};

document.querySelector(".modal .close").addEventListener("click", closeEvent);
document.querySelector(".modal .backdrop").addEventListener("click", closeEvent);

function closeEvent(event) {
  const name = event.target.parentNode.getAttribute("data-name");
  closeModal(name);
}

document.querySelectorAll(".modal").forEach(modal => {
  const name = modal.getAttribute("data-name");
  document.addEventListener(`modal-show-${name}`, () => modal.classList.add("visible"));
  document.addEventListener(`modal-close-${name}`, () => modal.classList.remove("visible"));
});

window.app.showModal = showModal;
window.app.closeModal = closeModal;

export function showModal(name, context){
  document.dispatchEvent(new CustomEvent(`modal-show-${name}`, { detail: { context } }));
  document.body.classList.add("no-scroll");
}

export function closeModal(name) {
  document.dispatchEvent(new CustomEvent(`modal-close-${name}`));
  document.body.classList.remove("no-scroll");
}
