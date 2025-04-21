import { fetchNewQuote } from "./controller.js";
import { createTaskChartComponent } from "./taskChartComponent.js";

export function renderPage(type = "home", data = {}) {
    const app = document.getElementById("app");
  
    if (type === "home") {
      app.innerHTML = `
        <div class="header">
                <div class="left-header"><img src="./logo.jpg" alt="" height="100px" width="100px"></div>
                <div class="right-header">
                </div>
            </div>
        
        <h1 class="Mainheading">Welcome to Stress-Less - Micro Self-Care Assistant</h1>
        <div style="background-image: url('https://png.pngtree.com/png-clipart/20230927/original/pngtree-mental-health-meditation-illustration-png-image_13147790.png'); 
            background-size: contain; 
            background-repeat: no-repeat; 
            background-position: center; 
            width: 100%; 
            height: 382px;}">
        </div>


        <section id="mood-section" class="visible">
          <h1 clss="bothering"> how’s your inner sunshine?</h1>
          <div class="emoji-picker">
            <button class="mood" data-mood="stressed">😣<span> Stressed</span></button>
            <button class="mood" data-mood="anxious">😰<span> Anxious</span></button>
            <button class="mood" data-mood="tired">😴<span> Tired</span></button>
            <button class="mood" data-mood="overwhelmed">🌟<span> Joyful</span></button>
          </div>
        </section>
      `;
      
    }
  
    if (type === "suggestion") {
      const mood = data.mood;
    
      const showSpotify = ["tired", "overwhelmed", "anxious", "stressed"].includes(mood);
      const showYoutube = ["tired", "overwhelmed", "anxious", "stressed"].includes(mood);
      const showQuote = true; // Always 
      const showSound = ["anxious", "tired"].includes(mood);
      const showBreathing = ["anxious", "stressed","tired"].includes(mood);
      const ASMR= [ "overwhelmed","tired"].includes(mood);
    
     
      const spotifyEmbed = showSpotify ? `
      <div style="margin-bottom: 1rem;">
        <h3><i class="fa-solid fa-music"></i> Try Spotify <i class="fa-brands fa-spotify"></i></h3>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/${data.spotify}" width="100%" height="552" frameBorder="0" allowfullscreen loading="lazy"></iframe>
      </div>` : '';

  const youtubeEmbed = showYoutube ? `
    <div>
      <h3><i class="fa-brands fa-youtube"></i> YouTube</h3>
      <iframe style="border-radius:12px" width="100%" height="515" src="https://www.youtube.com/embed/${data.youtube}" frameborder="0" allowfullscreen></iframe>
       ${ASMR ? `
                <h3><i class="fa-brands fa-youtube"></i>  Try Chalk Crush YouTube Video</h3>
                <iframe style="border-radius:12px" padding-top="20px" margin-top="20px" width="100%" height="515" src="https://www.youtube.com/embed/jE7OtdqusPE?si=UXYXjy_TmMEsEXTu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                `:''}
    </div>` : '';


  const quoteBox = showQuote ? `
    <div class="suggestion-box">
      <div id="quote">${data.text}</div>
      <button id="new-quote-btn" class="new-quote-btn">Show Another Quote</button>
    </div>` : '';

  const soundBox = showSound ? `
    <div class="soothing-sound-box">
      <h2 class="sound-title">Soothing Nature Sounds</h2>
      <p class="sound-description">Let the calming sounds of nature relax your mind. Listen to the sounds of birds, rain, or the wind to feel more peaceful.</p>
      <audio id="soothing-sound" controls>
        <source src="${data.audio}" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <br>
      <button id="play-sound" class="play-sound-btn">Play Sound</button>
    </div>` : '';

  const breathingBox = showBreathing ? `
    <div id="breathing-component">
      <h3 class="headingcln">Inhale Peace, Exhale Stress: A Breathing Journey</h3>
      <div class="breath-container">
        <div class="outer-circle">
          <div class="inner-circle">
            <p class="center-text">Inhale</p>
          </div>
        </div>
        <p class="timer">One Minute Exercise Time Left: 60s</p>
        <p class="instruction">Click Start</p>
        <button class="btn start-btn">Start</button>
        <button class="btn restart-btn" style="display: none;">Restart</button>
      </div>
    </div>` : '';

  // all suggestion
  app.innerHTML = `
    <section id="suggestion-section" class="visible">
      <button id="back-btn"><i class="fa-solid fa-arrow-left"></i></button>
      <h2 class="calming-activity">Try this calming activity</h2>

      <div class="media">
        ${spotifyEmbed}
        ${youtubeEmbed}
        ${quoteBox}
        ${soundBox}
        ${breathingBox}
      </div>

      <div id="Doughunt"></div>

      <div class="feedback">
        <h1><i class="fa-solid fa-comments"></i> Give your feedback</h1>
        <button id="helped">That Helped 😊</button>
        <button id="not-helped">Didn't Help 😕</button>
      </div>
    </section>
  `;
    createTaskChartComponent("Doughunt");    
      (function () {
        const component = document.getElementById('breathing-component');
        const innerCircle = component.querySelector('.inner-circle');
        const instruction = component.querySelector('.instruction');
        const centerText = component.querySelector('.center-text'); 
        const timerDisplay = component.querySelector('.timer');
      
        const pattern = [
          { text: 'Inhale', scale: 1, duration: 6000 },
          { text: 'Hold', scale: 1, duration: 4000 },
          { text: 'Exhale', scale: 0.4, duration: 7000 }
        ];
      
        let timeoutIds = [];
        let timerInterval;
        let sessionTime = 60; 
        let phaseCountdownId;
      
        function updateTimerDisplay(time) {
          timerDisplay.textContent = `Time Left: ${time}s`;
        }
      
        // Run through each phase (Inhale, Hold, Exhale)
        function runPhase(index = 0) {
          const phase = pattern[index];
          const seconds = phase.duration / 1000;
          let count = seconds;
      
          // Update circle size (animation)
          innerCircle.style.transitionDuration = `${seconds}s`;
          innerCircle.style.transform = `scale(${phase.scale})`;
      
          // Show the text in the center
          centerText.style.display = 'block';
          centerText.textContent = `${phase.text}: ${count}`;
      
          // Per-second countdown text
          phaseCountdownId = setInterval(() => {
            count--;
            if (count > 0) {
              centerText.textContent = `${phase.text}: ${count}`;
            } else {
              clearInterval(phaseCountdownId);
              // Move to next phase or restart pattern
              const nextIndex = (index + 1) % pattern.length;
              runPhase(nextIndex);
            }
          }, 1000);
        }
        
        // Start the breathing exercise
        function startBreathing() {
          sessionTime = 60;
          updateTimerDisplay(sessionTime);
          component.querySelector('.start-btn').style.display = 'none';
          component.querySelector('.restart-btn').style.display = 'inline-block';
      
          // Initially hide the center text and reset circle size
          centerText.style.display = 'none'; 
          innerCircle.style.transform = 'scale(0.4)'; 
      
          // Start breathing after a small delay
          setTimeout(() => {
            runPhase();
          }, 1000);
      
          // Global session timer
          timerInterval = setInterval(() => {
            sessionTime--;
            updateTimerDisplay(sessionTime);
            if (sessionTime <= 0) {
              stopBreathing();
            }
          }, 1000);
        }
      
        // Stop the breathing exercise
        function stopBreathing() {
          timeoutIds.forEach(clearTimeout);
          clearInterval(timerInterval);
          clearInterval(phaseCountdownId);
          instruction.textContent = 'Session Complete';
          timerDisplay.textContent = 'Time Left: 0s';
          innerCircle.style.transitionDuration = '0.3s';
          innerCircle.style.transform = 'scale(0.4)';
          centerText.style.display = 'none';
          component.querySelector('.start-btn').style.display = 'inline-block';
          component.querySelector('.restart-btn').style.display = 'none';
        }
      
        // Restart the breathing exercise
        function restartBreathing() {
          stopBreathing();
          instruction.textContent = 'Click Start';
          timerDisplay.textContent = 'Time Left: 60s';
          centerText.style.display = 'none'; 
          innerCircle.style.transform = 'scale(0.4)'; 
        }
      
        // Event Delegation
        component.addEventListener('click', (e) => {
          if (e.target.matches('.start-btn')) {
            startBreathing();
          } else if (e.target.matches('.restart-btn')) {
            restartBreathing();
          }
        });
      })();
      
          
      
      document.getElementById("play-sound").addEventListener("click", function () {
        const audio = document.getElementById("soothing-sound");
        if (audio) audio.play();
      });
      
      document.getElementById("new-quote-btn").addEventListener("click", function () {
        fetchNewQuote(data.mood);
      });

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
