# Interview Planner

Interview preparation for any profession. Upload a resume (PDF, DOCX, TXT), choose a level (Fresher up to Advanced; the level names scale with your own years, e.g. 8 years gives Advanced 10+, 15 years gives Advanced 20+), and get a timed interview plan plus a mock session mode.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The whole app (page, logic, software skill bank) |
| `domains.js` | 20 profession banks: detection keywords, roles and question banks. **Must sit next to `index.html`.** |
| `roles.js` | Directory of about 370 job titles mapped to a field, used for suggestions and detection. **Must sit next to `index.html`.** |
| `practice.js` | Practical tasks for 18 professions, 14 coding challenges with tests, and 19 reasoning problems. **Must sit next to `index.html`.** |
| `coach.js` | The interactive interview, the in-browser code runner and the feedback report. **Must sit next to `index.html`.** |
| `worker.js` | Optional Cloudflare Worker for cloud AI questions and AI feedback |

## What a session includes

Each plan now has, on top of the interview questions:

- **Practical round**: for software, coding challenges chosen by level (fresher, 2 yrs, 5 yrs, 7+). You write JavaScript and run tests in the page; tests run in a sandboxed worker with a 3 second limit. For every other profession, hands-on tasks such as drafting a clause, planning a client's retirement, laying out a studio apartment or writing a tech pack.
- **Problem-solving round**: reasoning questions that scale with level. Numeric ones are checked automatically; open ones (estimates, diagnosing a drop in a metric) are scored on method.
- **Hints, dictation and answers**: every question has a hint button, and you can dictate answers with the microphone button where the browser supports it.

When you finish, you get a **feedback report**: an overall score, skill bars (communication, depth and evidence, structure, problem solving, practical skills), strengths, what to work on, a practice plan, and notes on every answer. You can download or print it, and the last scores for your field are remembered in your browser so you can see progress.

**How the scoring works.** The built-in coach is rule based: it looks at length, structure, concrete evidence, relevance to the question, filler words and, for experience questions, the Situation-Action-Result pattern. It also runs code tests and checks numeric answers. It cannot judge whether a domain answer is factually correct. For that, use the optional **AI feedback** button (cloud or in-browser) or a mentor.

## Professions included

Software / IT, Law, Fashion Design, Interior Design, Architecture, Financial Advisory / Wealth, Accounting / Audit / Tax, Marketing, Sales / Business Development, HR / Recruiting, Project / Product Management, UX / Graphic Design, Healthcare / Nursing, Teaching / Education, Electronics / Semiconductor / Embedded / IoT, Engineering (Civil / Mechanical / Electrical), Writing / Journalism, Operations / Supply Chain, Customer Service / Hospitality, plus **Other / General** for anything not listed.

## Any profession, in three layers

1. **Job-title directory (`roles.js`)**: about 370 titles (pilot, electrician, pharmacist, photographer, social worker and so on) mapped to the closest field. They appear as suggestions in the job title box and help detect the field from a resume.
2. **Universal role-based questions**: for any title, including ones nobody listed, the planner builds role-specific questions and scenarios from the title itself. These also mix into every listed field.
3. **AI options**: cloud or in-browser AI writes questions tailored to the exact title, field, level and resume skills.

The field is detected from the resume and can be changed in a dropdown. The job title is editable. A resume is optional: typing a title is enough.

## Question sources (all free)

- **Built-in banks**: always work (`domains.js`, and the software bank in `index.html`).
- **Free web sites**: Stack Exchange (the site matching the field, plus Workplace interview tips), and for software also Open Trivia DB and DEV. These are reading and discussion topics, not formal interview questions. Each links back to its source (Stack Exchange content is CC BY-SA).
- **Cloud AI**: Cloudflare Worker + Workers AI free tier (`worker.js`).
- **In-browser AI**: WebLLM, runs fully on the user's device (about 1 GB one-time download, needs a WebGPU browser such as desktop Chrome/Edge). No key, no server.

## 1. Deploy the site on GitHub Pages

1. Create a public repo and upload `index.html`, `domains.js`, `roles.js`, `practice.js`, `coach.js` and `README.md` to the root.
2. **Settings → Pages → Deploy from a branch → `main` / root → Save.**
3. Live at `https://<username>.github.io/<repo>/` after about a minute.

The built-in banks, free web sources and in-browser AI already work at this point.

## 2. (Optional) Enable cloud AI with a free Cloudflare Worker

1. Create a free Cloudflare account, go to **Workers & Pages → Create → Worker**, and deploy the default.
2. Click **Edit code**, paste the contents of `worker.js`, set `ALLOWED_ORIGIN` to `https://<username>.github.io`, and deploy.
3. Open the Worker **Settings → Bindings → Add → Workers AI**, set the variable name to `AI`, and save.
4. Copy the Worker URL (`https://<name>.<account>.workers.dev`) into `CONFIG.WORKER_URL` near the top of the script in `index.html`, then commit.

The free tier has a daily allowance that can change; when it runs out the page falls back to the built-in and web questions and shows a message.

## Privacy

- The resume is parsed in the browser.
- Cloud AI receives only job title, field, years, skills and level. If you press the AI feedback button, it also receives your answers (not your resume), cut to 700 characters each and at most 8 of them. A redacted excerpt (emails, phone numbers and links removed, first 1,500 characters) is sent only if the user ticks the box.
- In-browser AI never sends anything off the device.
- Dictation uses the browser's speech service. In Chrome the audio is sent to Google to be transcribed. Skip the microphone button if that is a concern.
- Past scores are stored only in your own browser (local storage), never on a server.

## Add or edit a profession

To add coding challenges, practical tasks or reasoning problems, edit `practice.js`. To add job titles, edit `roles.js`. To add a full profession bank, open `domains.js` and copy any block. Each has `kw` (words that identify the field in a resume), `roles`, `core` questions and `case` scenarios for the levels `basic`, `mid` and `senior`, and `se` (the Stack Exchange site and search term for reading topics).
