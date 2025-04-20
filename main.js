import { startMirageServer } from "./modules/model.js";
import { renderPage} from "./modules/view.js";
import { handleMoodClick } from "./modules/controller.js";

startMirageServer();

renderPage("home");

document.addEventListener("click", function (e) {
  const moodBtn = e.target.closest(".mood");
  const backBtn = e.target.closest("#back-btn");
  if (moodBtn) {
    const mood = moodBtn.dataset.mood;
    handleMoodClick(mood);
  }

  if (backBtn) {
    renderPage("home");
  }
});
