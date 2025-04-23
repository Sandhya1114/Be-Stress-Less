import { fetchNewQuote } from "./controller.js";
import { createTaskChartComponent } from "./taskChartComponent.js";

export function renderPage(type = "home", data = {}) {
    const app = document.getElementById("app");
  
    if (type === "home") {
      app.innerHTML = `
        <div class="header">
                 
                <div class="left-header"><img src="./logoss.png" alt="" height="60px" width="200px"></div>
                <div class="right-header"><button class="getHelp" >Get Help</button></div>
            </div> 
        
        <!--  -->
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
            <button class="mood" data-mood="stressed"><img src="https://static.vecteezy.com/system/resources/previews/043/957/596/large_2x/painful-expression-trendy-icon-of-pain-emoji-editable-vector.jpg" alt="" height="70px" width="70px"><p><span> Stressed</span></p></button>
            <button class="mood" data-mood="anxious"><img src="https://static.vecteezy.com/system/resources/previews/043/957/610/large_2x/get-your-hands-on-perfectly-designed-sad-emoji-icon-customizable-vector.jpg" alt="" width="70px" height="70px"><p><span> Anxious</span></p></button>
            <button class="mood" data-mood="tired"> <img src="https://img.freepik.com/premium-vector/unique-premium-vector-tired-emoji-editable-icon_142112-2467.jpg" alt="" height="70px" width="70px"><p><span> Tired</span></p></button>
            <button class="mood" data-mood="overwhelmed"> <img src="https://static.vecteezy.com/system/resources/thumbnails/043/957/576/small_2x/enthusiastic-emoji-icon-happy-face-design-vector.jpg" alt="" width="70px" height="70px"><p><span> Joyful</span></p></button>
          </div>
        </section>
      `;
      
    }
  
    if (type === "suggestion") {
      const mood = data.mood;
    
      const showSpotify = ["tired", "overwhelmed"].includes(mood);
      const showYoutube = ["tired", "overwhelmed", "anxious", "stressed"].includes(mood);
      const showQuote = ["anxious"].includes(mood);

      const showSound = ["stressed"].includes(mood);
      const showBreathing = ["anxious"].includes(mood);
      const ASMR= [ "overwhelmed"].includes(mood);
      const tiredd=["tired"].includes(mood);
      const Doughuntt= [ "overwhelmed"].includes(mood);
    
     
      const spotifyEmbed = showSpotify ? `
      <div style="margin-bottom: 1rem;">
        <h3><i class="fa-solid fa-music"></i> Try Spotify <i class="fa-brands fa-spotify"></i></h3>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/${data.spotify}" width="100%" height="552" frameBorder="0" allowfullscreen loading="lazy"></iframe>
        ${tiredd?`<iframe  style="border-radius:12px"width="100%" height="552" src="https://www.youtube.com/embed/3LziNDk4kng?si=W7ZOliLxhfIf3kRX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:''}
        
      </div>` : '';

      const youtubeEmbed = showYoutube ? `
        <div>
          <h3><i class="fa-brands fa-youtube"></i> YouTube</h3>
          <iframe style="border-radius:12px" width="100%" height="515" src="https://www.youtube.com/embed/${data.youtube}" frameborder="0" allowfullscreen></iframe>
          ${ASMR ? `
                    <h3><i class="fa-brands fa-youtube"></i>  Try Chalk Crush YouTube Video</h3>
                    <iframe style="border-radius:12px" padding-top="20px" margin-top="20px" width="100%" height="515" src="https://www.youtube.com/embed/jE7OtdqusPE?si=UXYXjy_TmMEsEXTu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:' '}
        </div>` : '';


  const quoteBox = showQuote ? `
    <div class="suggestion-box">
      <div id="quote">${data.text}</div>
      <button id="new-quote-btn" class="new-quote-btn">Show Another Quote</button>
    </div>` : ' ';

  const soundBox = showSound ? `
    
    <div class="imgesYoga">
      <img src="https://i.pinimg.com/originals/cc/06/37/cc0637bc42a1e0a27b074691abaeb088.jpg" alt="" height="350px" width="300px">
      <img src=" https://i.pinimg.com/originals/94/32/c7/9432c74b25ed3f46636482022f5ead95.jpg" alt="" height="350px" width="300px">
      <img src="https://i.pinimg.com/originals/f2/17/94/f21794b4cf939a1314cfa222b5890e17.jpg" alt="" height="350px" width="300px">
    </div>
     <iframe style="border-radius:12px" padding-top="20px" margin-top="20px" width="100%" height="515" src="https://www.youtube.com/embed/5jca-sWgemI?si=S7rex7hv-Ixvbz_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

      ${Doughuntt?`<div id="Doughunt"></div>`:''}

      <div class="feedback">
        <h1><i class="fa-solid fa-comments"></i> Give your feedback</h1>
        <button id="helped">That Helped 😊</button>
        <button id="not-helped">Didn't Help 😕</button>
      </div>
    </section>
  `;
   
     // Attach only if component exists
const breathingComponent = document.getElementById('breathing-component');
if (breathingComponent) {
  (function () {
    const innerCircle = breathingComponent.querySelector('.inner-circle');
    const instruction = breathingComponent.querySelector('.instruction');
    const centerText = breathingComponent.querySelector('.center-text'); 
    const timerDisplay = breathingComponent.querySelector('.timer');

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

    function runPhase(index = 0) {
      const phase = pattern[index];
      const seconds = phase.duration / 1000;
      let count = seconds;

      innerCircle.style.transitionDuration = `${seconds}s`;
      innerCircle.style.transform = `scale(${phase.scale})`;

      centerText.style.display = 'block';
      centerText.textContent = `${phase.text}: ${count}`;

      phaseCountdownId = setInterval(() => {
        count--;
        if (count > 0) {
          centerText.textContent = `${phase.text}: ${count}`;
        } else {
          clearInterval(phaseCountdownId);
          runPhase((index + 1) % pattern.length);
        }
      }, 1000);
    }

    function startBreathing() {
      sessionTime = 60;
      updateTimerDisplay(sessionTime);
      breathingComponent.querySelector('.start-btn').style.display = 'none';
      breathingComponent.querySelector('.restart-btn').style.display = 'inline-block';

      centerText.style.display = 'none'; 
      innerCircle.style.transform = 'scale(0.4)'; 

      setTimeout(() => runPhase(), 1000);

      timerInterval = setInterval(() => {
        sessionTime--;
        updateTimerDisplay(sessionTime);
        if (sessionTime <= 0) stopBreathing();
      }, 1000);
    }

    function stopBreathing() {
      timeoutIds.forEach(clearTimeout);
      clearInterval(timerInterval);
      clearInterval(phaseCountdownId);
      instruction.textContent = 'Session Complete';
      timerDisplay.textContent = 'Time Left: 0s';
      innerCircle.style.transitionDuration = '0.3s';
      innerCircle.style.transform = 'scale(0.4)';
      centerText.style.display = 'none';
      breathingComponent.querySelector('.start-btn').style.display = 'inline-block';
      breathingComponent.querySelector('.restart-btn').style.display = 'none';
    }

    function restartBreathing() {
      stopBreathing();
      instruction.textContent = 'Click Start';
      timerDisplay.textContent = 'Time Left: 60s';
      centerText.style.display = 'none'; 
      innerCircle.style.transform = 'scale(0.4)'; 
    }

    breathingComponent.addEventListener('click', (e) => {
      if (e.target.matches('.start-btn')) startBreathing();
      if (e.target.matches('.restart-btn')) restartBreathing();
    });
  })();
}

// Safe check before adding quote listener
const quoteBtn = document.getElementById("new-quote-btn");
if (quoteBtn) {
  quoteBtn.addEventListener("click", function () {
    fetchNewQuote(data.mood);
  });
}

// Safe check before adding audio play listener
const soundBtn = document.getElementById("play-sound");
if (soundBtn) {
  soundBtn.addEventListener("click", function () {
    const audio = document.getElementById("soothing-sound");
    if (audio) audio.play();
  });
}

// Safe check for feedback section
const feedbackContainer = document.querySelector(".feedback");
if (feedbackContainer) {
  createTaskChartComponent("Doughunt");    
  feedbackContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      handleFeedback(e.target.id);
    }
  });
}


  
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
