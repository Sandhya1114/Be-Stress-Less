// modules/model.js
import { createServer } from "miragejs";

export function startMirageServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get("/mood/:mood", (schema, request) => {
        const mood = request.params.mood;

        const moodData = {
          stressed: {
            spotify: "playlist/1dD2RAirtwoQQwno1mglZH?utm_source=generator",
            youtube: "MIr3RsUWrdo",
            text: "Try deep breathing and listen to calm tunes 💆‍♀️"
          },
          anxious: {
            spotify: "playlist/0cj48sijCRDJ3Hatx1k1vJ?utm_source=generator",
            youtube: "ZToicYcHIOU",
            text: "You are safe. Ground yourself with this meditation 🌿"
          },
          tired: {
            spotify: "album/2d6cNiDXbrKdFcn8ujJxo3?utm_source=generator",
            youtube: "aNXKjGFUlMs",
            text: "Time to recharge. Stretch or take a power nap 😴"
          },
          overwhelmed: {
            spotify: "playlist/2f5GQGww9n40kQMm3X9Bi3?utm_source=generator",
            youtube: "inpok4MKVLM",
            text: "Just breathe. One thing at a time. You got this 💪"
          }
        };

        return moodData[mood] || {};
      });
    }
  });
}
