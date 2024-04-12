function getFact(event) {
  event.preventDefault();

  new Typewriter("#fact", {
    strings: "Apples float...",
    autoStart: true,
    delay: 35,
    cursor: "",
  });
}

let topicFormElement = document.querySelector("#topic-form");
topicFormElement.addEventListener("submit", getFact);
