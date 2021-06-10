const input = document.querySelectorAll("input");
const btnsubmit = document.getElementById("btn-submit");
const miformulario = document.getElementById("container-form");
const modal = document.getElementById("modal");
const caption = document.getElementsByClassName("caption");
const close = document.getElementById("close");

miformulario.addEventListener("submit", (event) => {
  event.preventDefault();
  miformulario.reset()
  modal.classList.replace("fade", "show");
  caption.classList.add("active");
  submit();
});

close.addEventListener("click", function () {
  modal.classList.replace("show", "fade");
  caption.classList.remove("active");
});
