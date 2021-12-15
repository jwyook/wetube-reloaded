const videoContainer = document;
const form = document.getElementById("commentForm");
const textarea = form.querySelector("text");
const btn = form.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  const text = textarea.value;
  const video = videoContainer.dataset.id;
};

btn.addEventListener("submit", handleSubmit);
