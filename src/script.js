function showFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function getFact(event) {
  event.preventDefault();

  let topic = document.querySelector("#topic-input");
  let key = "5o168182b8atd0a481fedf7024b43479";
  let context =
    "You are a fun fact generator programmed to provide fascinating and entertaining information about a chosen topic. Your responses should consist only of the fact itself and any supporting details, and the total length of the response must not exceed 500 characters.";
  let prompt = `Please provide fun facts about ${topic.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(showFact);
}

let topicFormElement = document.querySelector("#topic-form");
topicFormElement.addEventListener("submit", getFact);
