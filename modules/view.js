

export function renderPage(type = "home", data = {}) {
    const app = document.getElementById("app");
  
    if (type === "home") {
      app.innerHTML = `
        <div class="mainContainer">
          <div class="left"><h1 class="logo">Be Stress-Less</h1></div>
          <div class="right">
            <button><i class="fa-regular fa-bell"></i> Notification</button>
            <button> <i class="fa fa-circle-user"></i> Login</button>
            <button><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
          </div>
        </div>
        <h1 class="Mainheading">Welcome to Stress-Less - Micro Self-Care Assistant</h1>
        <section id="mood-section" class="visible">
          <h1>How are you feeling?</h1>
          <div class="emoji-picker">
            <button class="mood" data-mood="stressed">😣<span> Stressed</span></button>
            <button class="mood" data-mood="anxious">😰<span> Anxious</span></button>
            <button class="mood" data-mood="tired">😴<span> Tired</span></button>
            <button class="mood" data-mood="overwhelmed">😵<span> Overwhelmed</span></button>
          </div>
        </section>
      `;
      
    }
  
    if (type === "suggestion") {
      app.innerHTML = `
        <section id="suggestion-section" class="visible">
          <button id="back-btn"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
          <h2 class="calming-activity">Try this calming activity</h2>
          <div class="suggestion-box">
            <p><span><i class="fa-regular fa-face-smile"></i> Tip :</span>${data.text}</p>
          </div>
          <div class="media">
            <div style="margin-bottom: 1rem;">
              <h3><i class="fa-solid fa-music"></i> Try Spotify <i class="fa-brands fa-spotify"></i></h3>
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/${data.spotify}" width="100%" height="552" frameBorder="0" allowfullscreen loading="lazy"></iframe>
            </div>
            <div>
              <h3><i class="fa-brands fa-youtube"></i> YouTube</h3>
              <iframe style="border-radius:12px" width="100%" height="515" src="https://www.youtube.com/embed/${data.youtube}" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <div class="feedback">
            <h1><i class="fa-solid fa-comments"></i> Give your feedback</h1>
            <button id="helped">That Helped 😊</button>
            <button id="not-helped">Didn't Help 😕</button>
          </div>
        </section>
      `;
  
      document.querySelector(".feedback").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          handleFeedback(e.target.id);
        }
      });
  
      function handleFeedback(type) {
        const feedbackContainer = document.querySelector(".feedback");
        const message =
          type === "helped"
            ? `<p style="color:#fff; font-size:1.2rem; font-weight:bold;">Thanks! Glad we helped! 🌟</p>`
            : `<p style="color:#333; font-size:1.2rem; font-weight:bold;">Sorry to hear that! We'll try to do better next time <i class="fa-regular fa-heart"></i></p>`;
  
        feedbackContainer.innerHTML = `<h1>Give your feedback</h1>${message}`;
      }
    }
  }
  


  export function createView() {
    const root = document.getElementById('Doughunt');
  
    root.innerHTML = `
      <div style="display: flex; gap: 2rem; align-items: flex-start;">
        <div id="main" style="flex: 2;">
          <h2 class="Mindful">Mindful Hours State</h2>
          <form id="inputForm">
            <input type="text" id="desc" placeholder="Enter Mindful Hours description" required>
            <input type="number" id="hours" placeholder="Enter hours" required min="0.1" step="0.1">
             <button type="submit" class="add">Add</button>
          </form>
          <div id="taskList"></div>
        </div>
        <div id="sidebar" style="flex: 1;">
          <h3 class="Mindful-Hours">Mindful Hours State Anaysis</h3>
          <div style="width: 100%; max-width: 500px;">
            <canvas id="doughnutChart"></canvas>
          </div>
        </div>
      </div>
    `;
  
    const form = document.getElementById('inputForm');
    const descInput = document.getElementById('desc');
    const hoursInput = document.getElementById('hours');
    const taskListEl = document.getElementById('taskList');
    const ctx = document.getElementById('doughnutChart').getContext('2d');
  
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Hours Spent',
          data: [],
          backgroundColor: [],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
          title: { display: true, text: '' }
        }
      }
    });
  
    function bindForm(handler) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const desc = descInput.value.trim();
        const hours = parseFloat(hoursInput.value);
        if (desc && !isNaN(hours) && hours > 0) {
          handler(desc, hours);
          descInput.value = '';
          hoursInput.value = '';
        }
      });
    }
  
    function bindDelete(handler) {
      taskListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
          const index = parseInt(e.target.dataset.index);
          handler(index);
        }
      });
    }
  
    function renderTasks(tasks) {
      taskListEl.innerHTML = '';
      tasks.forEach((task, index) => {
        const el = document.createElement('div');
        el.className = 'task';
        el.innerHTML = `
          <span>${task.desc} - ${task.hours}h</span>
          <button class="delete-btn" data-index="${index}">delete</button>
        `;
        taskListEl.appendChild(el);
      });
    }
  
    function updateChart(tasks) {
      chart.data.labels = tasks.map(t => t.desc);
      chart.data.datasets[0].data = tasks.map(t => t.hours);
      chart.data.datasets[0].backgroundColor = tasks.map(t => t.color);
      chart.update();
    }
  
    return {
      bindForm,
      bindDelete,
      renderTasks,
      updateChart
    };
  }
  