export function createTaskChartComponent(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`No element found with ID: ${containerId}`);
      return;
    }
  
    const model = (() => {
      const tasks = [];
  
      function addTask(desc, hours) {
        const color = getRandomColor();
        tasks.push({ desc, hours, color });
      }
  
      function deleteTask(index) {
        tasks.splice(index, 1);
      }
  
      function getTasks() {
        return [...tasks];
      }
  
      function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, 0.6)`;
      }
  
      return {
        addTask,
        deleteTask,
        getTasks
      };
    })();
  
    // ========= VIEW =========
    function createView() {
        
       container.innerHTML = `
  <div id="task-container">

   <h2>See How Much Time You Spend On Yourself – Your Happy Time</h2>
   <p class="LoveYourSelf">“Remember, taking time for yourself is not a luxury, it’s a necessity for your happiness.”</p>
    <form id="task-form">
      <input type="text" id="task-desc" placeholder="Enter Mindful Hours description Description" />
      <input type="number" id="task-hours" placeholder="Hours" />
      <button type="submit">Add Happy Time</button>
    </form>
    <div class="task-layout">
      <ul id="task-list"></ul>
      <canvas id="task-chart"></canvas>
    </div>
  </div>
`;

      
        const form = container.querySelector("#task-form");
        const inputDesc = form.querySelector("#task-desc");
        const inputHours = form.querySelector("#task-hours");
        const list = container.querySelector("#task-list");
        const chartCanvas = container.querySelector("#task-chart");
      
        let chart;
      
        return {
          bindEvents({ onAdd, onDelete }) {
            form.addEventListener("submit", (e) => {
              e.preventDefault();
              if (!inputDesc.value || !inputHours.value) return;
              onAdd(inputDesc.value, parseFloat(inputHours.value));
              form.reset();
            });
            list.addEventListener("click", (e) => {
              if (e.target.tagName === "BUTTON") {
                const index = parseInt(e.target.dataset.index);
                if (!isNaN(index)) onDelete(index);
              }
            });
          },
      
          renderTasks(tasks) {
            list.innerHTML = tasks
              .map((task, index) =>
                `<li>${task.desc} (${task.hours}h) <button data-index="${index}">Delete</button></li>`
              )
              .join("");
          },
      
          updateChart(tasks) {
            const labels = tasks.map(t => t.desc);
            const data = tasks.map(t => t.hours);
            const colors = tasks.map(t => t.color);
      
            if (chart) chart.destroy();
      
            chart = new Chart(chartCanvas, {
              type: "doughnut",
              data: {
                labels,
                datasets: [{
                  data,
                  backgroundColor: colors
                }]
              },
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }
            });
          }
        };
      }
      
  
   
    function createController(model, view) {
        view.bindEvents({
          onAdd: handleAddTask,
          onDelete: handleDeleteTask
        });
      
        function handleAddTask(desc, hours) {
          model.addTask(desc, hours);
          updateView();
        }
      
        function handleDeleteTask(index) {
          model.deleteTask(index);
          updateView();
        }
      
        function updateView() {
          const tasks = model.getTasks();
          view.renderTasks(tasks);
          view.updateChart(tasks);
        }
      
        updateView();
      }
      
  
    // Init 
    const view = createView();
    createController(model, view);
  }
  