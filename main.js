
// import { createServer } from "miragejs";

/*
this.get("/mood/:mood", (schema, request) => { ... })
This defines a GET route for /api/mood/:mood.
The :mood is a route parameter, like stressed, anxious, etc.

When a request is made to /api/mood/stressed, request.params.mood will be "stressed".*/
// 1. Setup MirageJS Fake API
// createServer({
//   routes() {
//     this.namespace = "api";
//     this.get("/mood/:mood", (schema, request) => {
//       const mood = request.params.mood;
//       const moodData = {
//         stressed: {
//           spotify: "playlist/1dD2RAirtwoQQwno1mglZH?utm_source=generator",
//           youtube: "MIr3RsUWrdo",
//           text: "Try deep breathing and listen to calm tunes 💆‍♀️"
//         },
//         anxious: {
//           spotify: "playlist/0cj48sijCRDJ3Hatx1k1vJ?utm_source=generator",
//           youtube: "ZToicYcHIOU",
//           text: "You are safe. Ground yourself with this meditation 🌿"
//         },
//         tired: {
//           spotify: "album/2d6cNiDXbrKdFcn8ujJxo3?utm_source=generator",
//           youtube: "aNXKjGFUlMs",
//           text: "Time to recharge. Stretch or take a power nap 😴"
//         },
//         overwhelmed: {
//           spotify: "playlist/2f5GQGww9n40kQMm3X9Bi3?utm_source=generator",
//           youtube: "inpok4MKVLM",
//           text: "Just breathe. One thing at a time. You got this 💪"
//         }
//       };
//       return moodData[mood] || {};
//     });
//   }
// });

// 2. Function to Render Pages
// function renderPage(type = "home", data = {}) {
//   const app = document.getElementById("app");
//   if (type === "home") {
//     app.innerHTML = `
//       <div class="mainContainer">
//         <div class="left"><h1 class="logo">Be Stress-Less</h1></div>
//         <div class="right">
//           <button><i class="fa-regular fa-bell"></i> Notification</button>
//           <button> <i class="fa fa-circle-user"></i> Login</button>
//           <button><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
//         </div>
//       </div>

//       <h1 class="Mainheading">Welcome to Stress-Less - Micro Self-Care Assistant</h1>

//       <section id="mood-section" class="visible">
//         <h1>How are you feeling?</h1>
//         <div class="emoji-picker">
//           <button class="mood" data-mood="stressed">😣<span> Stressed</span></button>
//           <button class="mood" data-mood="anxious">😰<span> Anxious</span></button>
//           <button class="mood" data-mood="tired">😴<span> Tired</span></button>
//           <button class="mood" data-mood="overwhelmed">😵<span> Overwhelmed</span></button>
//         </div>
//       </section>
//     `;
//   } else if (type === "suggestion") {
//     app.innerHTML = `
//       <section id="suggestion-section" class="visible">
//         <button id="back-btn"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
//         <h2 class="calming-activity">Try this calming activity</h2>

//         <div class="suggestion-box">
//           <p style="hight:20px"><span><i class="fa-regular fa-face-smile"></i> Tip :</span>${data.text}</p>
//         </div>

//         <div class="media">
//           <div style="margin-bottom: 1rem;">
//             <h3><i class="fa-solid fa-music"></i> Try Spotify <i class="fa-brands fa-spotify"></i></h3>
//             <iframe style="border-radius:12px" src="https://open.spotify.com/embed/${data.spotify}"width="100%" height="552" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//           </div>
//           <div>
//             <h3><i class="fa-brands fa-youtube"></i> YouTube</h3>
//             <iframe  style="border-radius:12px" width="100%" height="515" src="https://www.youtube.com/embed/${data.youtube}" frameborder="0" allowfullscreen></iframe>
//           </div>
//         </div>

//       <div class="feedback">
//         <h1> <i class="fa-solid fa-comments"></i> Give your feedback </h1>
//         <button id="helped">That Helped 😊</button>
//         <button id="not-helped">Didn't Help 😕</button>
//      </div>
//       </section>
//     `;
//      // Using event delegation to handle button clicks for feedback
//      document.querySelector('.feedback').addEventListener('click', function(event) {
//         if (event.target.tagName === 'BUTTON') {
//             // Get the feedback type based on the button clicked
//             const feedbackType = event.target.id;  
//             handleFeedback(feedbackType);
//         }
//     });

//     // Function to handle feedback and show a response message
//     function handleFeedback(feedbackType) {
//         const feedbackContainer = document.querySelector('.feedback');
      
//         let responseMessage;

//         if (feedbackType === 'helped') {
//             responseMessage = `
//                 <p style="color: #fff; font-size: 1.2rem; font-weight: bold;">
//                     Thank you for your feedback! We're happy to help <i class="fa-regular fa-star"></i>
//                 </p>
//             `;
//         } else if (feedbackType === 'not-helped') {
//             responseMessage = `
//                 <p style="color:rgb(43, 27, 11); font-size: 1.2rem; font-weight: bold;">
//                     Sorry to hear that! We'll try to do better next time <i class="fa-regular fa-heart"></i>
//                 </p>
//             `;
//         }

//         // Clear the previous content and append the new response message using backticks
//         feedbackContainer.innerHTML = `
//             <h1>Give your feedback</h1>
//             ${responseMessage}
//         `;
//     }
//   }
// }


// rendering homePage
// renderPage("home");


// check which should render
// document.addEventListener("click", function (e) {
//   const moodBtn = e.target.closest(".mood");
//   const backBtn = e.target.closest("#back-btn");

//   if (moodBtn) {
//     const mood = moodBtn.dataset.mood;
//     fetch(`/api/mood/${mood}`)
//       .then((response) => response.json())
//       .then((data) => {
//         renderPage("suggestion", data);
//       })
//       .catch((error) => {
//         console.error("Error fetching mood data:", error);
//       });
//   }

//   if (backBtn) {
//     renderPage("home");
//   }
// });

// main.js
import { startMirageServer } from "./modules/model.js";
import { renderPage} from "./modules/view.js";
import { handleMoodClick } from "./modules/controller.js";



// Start Mirage API
startMirageServer();

// Load homepage
renderPage("home");


// event listener
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
