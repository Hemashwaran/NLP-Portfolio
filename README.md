# The Classroom View — NLP Course Portfolio (25 Periods)

A first-person, student's-eye portfolio website for the **Natural Language Processing (CSI4001)** course at **VIT Vellore**, set from a third-row desk in the prp.

The visitor sits in the student's seat facing the chalkboard, notebook, and laptop, and can explore all 25 periods, trace derivational finite state automata, try a bigram model, see real screenshots of the *Campus Connect* assistant, and trigger classroom Easter eggs.

## 🏛️ Structure: 25 Periods Across 8 Wings

| Wing | Periods | Focus |
| :--- | :--- | :--- |
| **Wing A · Arrival** | Periods 1–4 | Classroom desk view, Welcome Board, period guide, About Me |
| **Wing B · How Our Mam Taught** | Periods 5–8 | Topics & real applications, hands-on coding in class, mother tongue morphology, stars system |
| **Wing C · Concept Notebook** | Periods 9–15 | Levels of NLP, regex tokenizer, morpheme splitter, POS tagging, bigram generator, NER highlighter, 25 flashcards |
| **Wing D · The FSA Problem** | Periods 16–17 | CAT 2 FSA question and interactive derivational morphology FSA (q0–q11) |
| **Wing E · Campus Connect** | Periods 18–20 | Project overview, real app screenshots & features, challenges |
| **Wing F · Stars & Project Ideas** | Periods 21–22 | 5 stars, rumour detection and Outbreak Radar ideas |
| **Wing G · CAT 2** | Period 23 | CAT 2 experience and preparation |
| **Wing H · Reflection** | Periods 24–25 | Timeline, reflection & thank-you, contact and credits |

--- | :--- | :--- |
| **Wing A · Arrival** | Periods 1–4 | Classroom desk view, Welcome Board, Class Diary index, Skills chart |
| **Wing B · How Our Mam Taught** | Periods 5–8 | Real application flip cards, interactive Jupyter notebook cells, mother tongue switcher, 5-star recognition |
| **Wing C · Concept Notebook** | Periods 9–15 | Levels of NLP stack, live regex tokenizer box, morpheme splitter, POS tag guesser, bigram next-word generator, NER highlighter, 25 glossary flashcards |
| **Wing D · The FSA Problem** | Periods 16–18 | CAT 2 10-mark exam card, interactive SVG derivational morphology FSA (q0–q11) with animated step transitions and augmented branches, 5-question quiz |
| **Wing E · Campus Connect** | Periods 19–22 | VIT multilingual FAQ & navigation assistant, 4 phone mockups, 11 topic tiles, verified emergency SOS cards, retrospective |
| **Wing F · Stars & Radar** | Periods 23–25 | 5 animated gold stars with story triggers, idea board sticky notes, Outbreak Radar transit corridor simulation |
| **Wing G · CAT 2 Exams** | Periods 26–27 | Unfolding CAT 2 exam paper with teacher's green remark, study preparation habits, 8-question practice quiz |
| **Wing H · Reflection** | Periods 28–30 | Chalkboard semester timeline, reflection on human language vs code, letter to faculty, contact links, Easter egg hub |

---

## 🚀 Quickstart

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in your browser
http://localhost:5173
```

### Production Build & Placeholder Audit
```bash
# Audits all placeholders and compiles production assets to /dist
npm run build
```

---

## ✏️ How to Customize Your Content

All content is kept separate from logic in:
```
src/data/content.ts
```

1. **Owner Details**: Open `src/data/content.ts` and replace placeholders with your personal information:
   - `name`: Your Name
   - `regNo`: Your Register Number (e.g. `23BCE0000`)
   - `programme`: Degree and year
   - `faculty`: Your Professor's Name
   - `semester`: Academic semester term
2. **Screenshots**: Place your real Campus Connect UI screenshots in:
   ```
   public/assets/screenshots/campus-1.png
   public/assets/screenshots/campus-2.png
   public/assets/screenshots/campus-3.png
   public/assets/screenshots/campus-4.png
   ```
   *(If omitted, the portfolio gracefully renders vector mockups with zero broken image links.)*
3. **Auditing Placeholders**: Run `npm run audit:placeholders` to check for any leftover placeholder tags.

---

## 🎮 Interactive Controls & Easter Eggs

- **Esc**: Return to the 3D illustrated classroom overview from any lesson.
- **Left / Right Arrow Keys (← / →)**: Navigate backward and forward through periods.
- **D**: Open the searchable Class Diary drawer.
- **S**: Scatter golden classroom stars across the room!
- **Wall Clock**: Click to ring the vintage classroom bell (Web Audio API synthesized).
- **Ceiling Fan**: Click to toggle rotation speed.
- **Sun / Moon Toggle**: Switch between Daytime Lecture and Evening Study Mode with desk-lamp glow.

---

## 🌐 Deploying to Vercel (Zero-Config)

This project is a 100% static client-side React application with zero backend or database dependencies.

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this directory to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: The Classroom View NLP portfolio"
   git remote add origin https://github.com/<your-username>/nlp-classroom-view.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site is live!

---

## 🎨 Design Tokens & Palette

- **Chalkboard Slate**: `#1f2d2a`, `#15201e`
- **Natural Wood**: `#8c5d37`, `#b5835a`, `#deb887`
- **Chalk White & Yellow**: `#f4f1ea`, `#f4e04d`
- **Classroom Star Gold**: `#f2b84b`, `#fde047`
- **Typography**:
  - Handwriting & Chalk: *Patrick Hand*, *Caveat*
  - Body & Labels: *DM Sans*
  - Code & Monospace: *JetBrains Mono*
