// modules/view.js

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
            : `<p style="color:#333; font-size:1.2rem; font-weight:bold;">We'll do better next time 💔</p>`;
  
        feedbackContainer.innerHTML = `<h1>Give your feedback</h1>${message}`;
      }
    }
  }
  