
import { createServer } from "miragejs";
const stressMarkdown = `
✅ Step 1: Acknowledge the Stress
What to do:
Pause and tell yourself: “I’m stressed right now. Something’s activating my stress response.”
Why it works (proof):
🧠 Naming emotions reduces activity in the amygdala (the brain’s fear and stress center) and increases regulation from the prefrontal cortex.
📚 Source: UCLA study on "affect labeling" (Lieberman et al.)

✅ Step 2: Use Measured Breathing (Box Breathing or 4-7-8)
What to do:
Breathe in for 4 seconds, hold 4, out for 4, hold 4 — repeat 3–4 times. Or use 4-7-8 breathing (inhale 4, hold 7, exhale 8).
Why it works (proof):
🌬️ Activates the parasympathetic nervous system, which calms the body and lowers cortisol.
📚 Source: Harvard Medical School, studies on vagus nerve activation.

✅ Step 3: Physically Move Your Body — Immediately
What to do:
Walk, stretch, shake out your hands, or do jumping jacks.
Why it works (proof):
🏃 Movement burns off excess adrenaline and cortisol, and boosts endorphins (natural stress-relievers).
📚 Source: Mayo Clinic and American Psychological Association (APA).

✅ Step 4: Write It Down — Get It Out of Your Head
What to do:
Journal, brain dump, or list out the stressors — without editing or judging.
Why it works (proof):
📝 Writing engages the left brain (logic side) and helps defuse the emotional overload. It reduces rumination and mental clutter.
📚 Source: University of Texas at Austin, Dr. James Pennebaker’s expressive writing studies.

✅ Step 5: Do One Small Action — Not Everything
What to do:
Pick one thing you can control or complete (even something small like sending one email or tidying your desk).
Why it works (proof):
🎯 Taking action restores a sense of agency and lowers the feeling of helplessness that stress causes.
📚 Source: CBT research on behavioral activation and stress reduction.

✅ Step 6: Limit Stimulants & Sugar
What to do:
Reduce caffeine, nicotine, and high-sugar snacks during stress spikes.
Why it works (proof):
☕ These spike cortisol and create physical symptoms like jitters, rapid heartbeat, and energy crashes — making stress feel worse.
📚 Source: American Journal of Psychiatry, effects of stimulants on stress and anxiety.

✅ Step 7: Practice Mindfulness or Grounding for 5 Minutes
What to do:
Sit quietly, focus on the breath, or use grounding (e.g., 5-4-3-2-1 sensory technique).
Why it works (proof):
🧘 Mindfulness reduces default mode network activity (overthinking) and builds stress resilience in the prefrontal cortex.
📚 Source: Neuroscience of Mindfulness, Harvard & Stanford MRI studies.

✅ Step 8: Talk to a Real Person
What to do:
Call, text, or talk in person to someone supportive — no need for solutions, just connection.
Why it works (proof):
👥 Human connection lowers cortisol and raises oxytocin, which buffers the stress response.
📚 Source: Social baseline theory and stress regulation (Coan, Schaefer, & Davidson).

✅ Step 9: Sleep, Rest, and Recovery
What to do:
Don’t push through long-term stress without sleep. Prioritize 7–9 hours or a short recovery nap if needed.
Why it works (proof):
😴 Sleep allows your brain to clear stress chemicals, consolidate emotional memory, and restore executive function.
📚 Source: Sleep studies from UC Berkeley and National Sleep Foundation.

✅ Step 10: Deal With Root Causes — Don’t Only Treat Symptoms
What to do:
When you’re calmer, figure out what's behind the stress: overwork, relationships, unrealistic pressure? Make a plan to change the source.
Why it works (proof):
🔍 Long-term stress becomes toxic if the cause is never addressed. Chronic stress impacts immune function, mood, and decision-making.
📚 Source: APA and CDC on chronic stress and health outcomes.


`;
const tiredness=`
✅ Step 1: Figure Out the Type of Tiredness
What to do:
Ask yourself: Is it physical? Mental? Emotional? Burnout? Lack of sleep? Naming it helps you fix the root.
Why it works (proof):
🧠 Research in fatigue management (especially in medical and athletic fields) shows that people recover faster when they target the actual cause.
📚 Source: Journal of Occupational Health Psychology.

✅ Step 2: Hydrate — Don’t Skip This One
What to do:
Drink 1–2 glasses of water as a first step, even before coffee.
Why it works (proof):
💧 Even mild dehydration (1–2%) can reduce energy, focus, and mood. It affects oxygen flow and blood volume.
📚 Source: European Journal of Clinical Nutrition.

✅ Step 3: Take a Controlled Nap (if needed)
What to do:
Set a timer for 10–20 minutes max. Power naps improve energy without grogginess (don’t go over 30).
Why it works (proof):
😴 Short naps boost alertness and performance by restoring dopamine levels and reducing mental fatigue.
📚 Source: NASA nap studies on pilots and astronauts.

✅ Step 4: Move Gently — Don’t Stay Slumped
What to do:
Stretch, go for a 5–10 minute walk, or do light yoga.
Why it works (proof):
🏃‍♂️ Movement increases circulation, brings oxygen to the brain, and releases endorphins that fight fatigue.
📚 Source: Journal of Applied Physiology, studies on low-intensity movement and energy.

✅ Step 5: Eat Something Balanced — Not Just Sugar or Carbs
What to do:
Eat a small snack with protein + healthy fat + complex carbs (e.g., nuts + fruit, yogurt + granola, boiled egg + toast).
Why it works (proof):
🍽️ Balanced snacks prevent blood sugar crashes — which are a major cause of sudden tiredness and brain fog.
📚 Source: Harvard School of Public Health on glycemic index and energy.

✅ Step 6: Limit Caffeine — Use It Strategically
What to do:
Use moderate caffeine (50–100mg) only if needed — ideally before 2 PM.
Why it works (proof):
☕ Caffeine blocks adenosine, the chemical that makes you feel sleepy — but if used late or too often, it backfires and disrupts sleep cycles.
📚 Source: Sleep Research Society, caffeine and circadian rhythms.

✅ Step 7: Fix Your Sleep Hygiene (If It's Chronic Tiredness)
What to do:
Stick to a sleep schedule, limit screens at night, keep the room dark/cool, and avoid heavy meals late.
Why it works (proof):
🛏️ Consistent circadian rhythms = better deep sleep, which restores physical and mental energy.
📚 Source: National Sleep Foundation and Dr. Matthew Walker’s research.

✅ Step 8: Check for Burnout — Not Just Fatigue
What to do:
Ask: Am I tired, or am I emotionally and mentally depleted?
If yes → reduce workload, take real breaks, talk to someone, or re-evaluate routines.
Why it works (proof):
🔥 Burnout causes chronic fatigue not solved by sleep — it’s tied to stress hormones like cortisol staying elevated.
📚 Source: World Health Organization (WHO) classification of burnout as a workplace syndrome.

✅ Step 9: Rule Out Medical Causes (If Nothing Helps)
What to do:
If you’ve tried healthy habits and still feel tired, talk to a doctor and ask about:
•	Anemia
•	Thyroid issues
•	Sleep apnea
•	Chronic fatigue syndrome
•	Vitamin D or B12 deficiency
Why it works (proof):
🩺 These conditions are medically recognized and commonly missed causes of tiredness.
📚 Source: Mayo Clinic & Cleveland Clinic guides to unexplained fatigue.
`
const anxious=`
✅ Step 1: Recognize That It’s Anxiety (Not Just “Worry”)
What to do:
Notice if symptoms like racing heart, irrational fear, or intrusive thoughts are happening. Say to yourself: “This is anxiety. It’s a real response, but it’s not dangerous.”
Why it works (proof):
🧠 Cognitive Behavioral Therapy (CBT) techniques start with identifying the problem. Naming the emotion activates the prefrontal cortex, which helps calm the amygdala (the fear center of the brain).
📚 Source: UCLA studies on affect labeling and emotional regulation.

✅ Step 2: Use Deep, Controlled Breathing — Not Random Breathing
What to do:
Practice 4-7-8 breathing (inhale for 4 seconds, hold for 7, exhale for 8). Do it for 1–3 minutes.
Why it works (proof):
🌬️ Slows down the sympathetic nervous system (fight or flight) and activates the parasympathetic system (rest and calm).
📚 Source: Harvard Medical School, studies on vagus nerve stimulation through breath.

✅ Step 3: Challenge the Thought — Don't Trust It Blindly
What to do:
Write down the anxious thought. Then ask:
•	What evidence supports this?
•	What evidence goes against it?
•	What would I tell a friend in this situation?
Why it works (proof):
🧠 This is a direct CBT technique that weakens cognitive distortions like catastrophizing or black-and-white thinking.
📚 Source: Beck Institute for Cognitive Behavior Therapy.

✅ Step 4: Get Grounded — Use the 5-4-3-2-1 Method
What to do:
Notice:
•	5 things you can see
•	4 things you can touch
•	3 things you can hear
•	2 things you can smell
•	1 thing you can taste
Why it works (proof):
📍Redirects focus from anxious thoughts to physical reality. This technique is widely used for panic attacks and anxiety disorders.
📚 Source: Anxiety and Depression Association of America (ADAA).

✅ Step 5: Avoid Stimulants (Even Mild Ones)
What to do:
Cut back or eliminate caffeine, nicotine, and sugar when anxious.
Why it works (proof):
☕ These substances increase cortisol and adrenaline, worsening anxiety symptoms like racing heart and jitters.
📚 Source: Journal of Psychopharmacology, caffeine's effect on anxiety.

✅ Step 6: Move — Even Just for 10 Minutes
What to do:
Walk briskly, stretch, or do light exercise.
Why it works (proof):
🏃 Exercise increases GABA and serotonin, calming neurotransmitters that regulate mood and anxiety.
📚 Source: Harvard Health Publishing, Physical Activity and Mental Health.

✅ Step 7: Sleep and Reset
What to do:
Aim for 7–9 hours of sleep. If anxious at night, try a calming routine (no screens, dim lights, read or listen to calming sounds).
Why it works (proof):
😴 Sleep deprivation amplifies the amygdala response, making people up to 60% more reactive to emotional triggers.
📚 Source: UC Berkeley, Dr. Matthew Walker’s sleep and emotion studies.

✅ Step 8: Seek Help — Therapy Isn’t a Last Resort
What to do:
If anxiety is frequent or interferes with life, see a licensed therapist or counselor trained in CBT, ACT, or mindfulness-based therapy.
Why it works (proof):
🧠 Therapy physically rewires brain patterns (neuroplasticity). Proven to reduce anxiety symptoms long-term.
📚 Source: National Institute of Mental Health (NIMH), studies on CBT for GAD and panic disorder.

`

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
            text: stressMarkdown 
          },
          anxious: {
            spotify: "playlist/0cj48sijCRDJ3Hatx1k1vJ?utm_source=generator",
            youtube: "ZToicYcHIOU",
            text:anxious
          },
          tired: {
            spotify: "album/2d6cNiDXbrKdFcn8ujJxo3?utm_source=generator",
            youtube: "aNXKjGFUlMs",
            text:tiredness
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

// //model for chart
// export function createModel() {
//   const tasks = [];

//   function addTask(desc, hours) {
//     const color = getRandomColor();
//     tasks.push({ desc, hours, color });
//   }

//   function deleteTask(index) {
//     tasks.splice(index, 1);
//   }

//   function getTasks() {
//     return [...tasks];
//   }

//   function getRandomColor() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgba(${r}, ${g}, ${b}, 0.6)`;
//   }

//   return {
//     addTask,
//     deleteTask,
//     getTasks
//   };
// }
