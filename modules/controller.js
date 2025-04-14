// modules/controller.js
import { renderPage } from "./view.js";

export function handleMoodClick(mood) {
  fetch(`/api/mood/${mood}`)
    .then((res) => res.json())
    .then((data) => renderPage("suggestion", data))
    .catch((err) => console.error("Fetch error:", err));
}
