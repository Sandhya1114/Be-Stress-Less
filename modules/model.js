import { createServer } from "miragejs";
import { quotes } from "./quotes.js";


export  function startMirageServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get("/mood/:mood",  (schema, request) => {
        const mood = request.params.mood;
        
        const getRandomQuote = (mood) => {
          const moodQuotes = quotes[mood] || [];
          if (moodQuotes.length === 0) return "You're doing great. Keep going! 💛";
          const randomIndex = Math.floor(Math.random() * moodQuotes.length);
          return moodQuotes[randomIndex];
        };

        


        const moodData = {
          stressed: {
            spotify: "playlist/1dD2RAirtwoQQwno1mglZH?utm_source=generator",
            youtube: "MIr3RsUWrdo",
            text:getRandomQuote("stressed"),
            audio: "/audioSounds/avala-mountain-scenery-245994.mp3"
          },
          anxious: {
            spotify: "playlist/0cj48sijCRDJ3Hatx1k1vJ?utm_source=generator",
            youtube: "ZToicYcHIOU",
            text:getRandomQuote("anxious"),
            audio: "/audioSounds/birds-chirping-75156.mp3"
          },
          tired: {
            spotify: "album/2d6cNiDXbrKdFcn8ujJxo3?utm_source=generator",
            youtube: "aNXKjGFUlMs",
            text:getRandomQuote("tired"),
            audio: "/audioSounds/raindrop-146855.mp3"
          },
          overwhelmed: {
            spotify: "playlist/2f5GQGww9n40kQMm3X9Bi3?utm_source=generator",
            youtube: "inpok4MKVLM",
            text:getRandomQuote("overwhelmed"),
            audio: "/audioSounds/forestbirds-319791.mp3"
          }
        };

        return moodData[mood] || {};
      });
    }
  });
}
