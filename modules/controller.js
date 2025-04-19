
import { renderPage } from "./view.js";

export function handleMoodClick(mood) {
  fetch(`/api/mood/${mood}`)
    .then((res) => res.json())
    .then((data) =>  {
      data.mood = mood; 
      renderPage("suggestion", data);
    })
    .catch((err) => console.error("Fetch error:", err));
}
export function fetchNewQuote(mood) {
  fetch(`/api/mood/${mood}`)
    .then((res) => res.json())
    .then((data) => {
      // Update the quote with the new one
      document.getElementById("quote").innerHTML = data.text;
    })
    .catch((err) => console.error("Error fetching new quote:", err));
}
