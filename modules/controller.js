
import { renderPage } from "./view.js";

export function handleMoodClick(mood) {
  fetch(`/api/mood/${mood}`)
    .then((res) => res.json())
    .then((data) => renderPage("suggestion", data))
    .catch((err) => console.error("Fetch error:", err));
}



//control for chart
// export function createController(model, view) {
//   view.bindForm(handleAddTask);
//   view.bindDelete(handleDeleteTask);

//   function handleAddTask(desc, hours) {
//     model.addTask(desc, hours);
//     updateView();
//   }

//   function handleDeleteTask(index) {
//     model.deleteTask(index);
//     updateView();
//   }

//   function updateView() {
//     const tasks = model.getTasks();
//     view.renderTasks(tasks);
//     view.updateChart(tasks);
//   }

//   // Initial render
//   updateView();
// }
