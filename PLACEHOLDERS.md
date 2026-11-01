# PLACEHOLDERS & HONESTY AUDIT

This document catalogues every user-supplied placeholder across the 30 periods of **The Classroom View** portfolio. 

As per the course portfolio honesty rules:
> *Never fabricate marks, grades, dates, results, quotes or what was taught. Use `[PLACEHOLDER]`, `[CONFIRM]`, `[VERIFY MY ANSWER]`, `[REVIEW BY NATIVE SPEAKER]` tags with a visible highlight in dev mode and a build-time warning listing any left.*

---

## 1. Quick Summary Table

| Tag | Pages / Location | What You Must Supply |
| :--- | :--- | :--- |
| `K.Hemashwaran` | Pages 1, 2, 23, 29, 30 (`OWNER_DETAILS.name`) | Your full legal or preferred student name. |
| `23MID046` | Pages 1, 2, 29, 30 (`OWNER_DETAILS.regNo`) | Your official VIT registration number (e.g., `23BCE10234`). |
| `[PROGRAMME, YEAR]` | Page 2 (`OWNER_DETAILS.programme`) | Your degree and year of study (e.g., `B.Tech CSE, 3rd Year`). |
| `Dr. SHARMILA BANU K mam` | Pages 1, 2, 5, 8, 16, 23, 26, 29 (`OWNER_DETAILS.faculty`) | Your course faculty professor's name (e.g., `Dr. Jane Doe`). |
| `7` | Page 2 (`OWNER_DETAILS.semester`) | The semester term (e.g., `Winter Semester 2025-2026`). |
| `[MY LEVELS]` | Page 4 (About Me) | Self-assessed proficiency percentages for Python, Regex, Morphology, Multilingual, NER. |
| `[CONFIRM which were discussed]` | Page 5 (Real Applications) | Confirm whether search autocorrect, epidemic news, rumour detection, and speech assistants were discussed in class. |
| `[LAB 1]`, `[LAB 2]`, `[LAB 3]` | Page 6 (Jupyter Labs) | Your specific lab exercise numbers / titles from your practical record. |
| `[NOTEBOOK / GITHUB LINK]` | Page 6 (Jupyter Labs) | URL to your actual GitHub repository or Google Colab notebook. |
| `[REVIEW BY NATIVE SPEAKER]` | Pages 7, 18 (Mother Tongue) | Native speaker review of Tamil (`-த்தனம்`), Telugu (`-వరి`), Malayalam (`-മുള്ള`), or Hindi (`-ता`) morphological derivations. |
| `[MY MEMORIES]` | Page 8 (Class Moments) | Authentic classroom anecdotes, questions you asked, or moments that happened in class. |
| `[MY WORDS]` | Page 8 (Mam's Quotes) | Actual memorable phrases or pieces of advice your professor repeated. |
| `[VERIFY MY ANSWER]` | Pages 16, 17 (`FSA_EXAM_WORDS`) | Your CAT 2 exam solutions for Minimal, Naturalization, Spontaneousness, Actually, Revolutionary. |
| `[MY LANGUAGE]` | Page 18 (Mother Tongue FSA) | Your chosen native mother tongue (Tamil, Telugu, Malayalam, Hindi, etc.). |
| `[SOLO/TEAM]` | Page 19 (Campus Connect) | Whether Campus Connect was completed individually or with teammates (and teammate names). |
| `[CONFIRM numbers]` | Page 21 (Helpline Numbers) | Verify campus and national emergency numbers (112, 108, 181, 1800-180-5522). |
| `[MY EXPERIENCE]` | Page 22 (Challenges) | Your personal programming and deployment hurdles while building the assistant. |
| `[LIVE DEMO URL]` | Page 22 (Campus Connect) | Live URL if your assistant is hosted on Vercel/Netlify/Streamlit. |
| `[GITHUB URL]` | Page 22 (Campus Connect) | GitHub repository link for the Campus Connect source code. |
| `[MY STORY]` | Page 23 (Star Chart) | Why you were awarded stars in class (questions asked, Outbreak Radar concept pitch). |
| `[WHICH QUESTION]` | Page 26 (CAT 2 Reflection) | The exact question on your CAT 2 question paper that earned a teacher remark. |
| `[MY STRATEGY]` | Page 27 (Study Preparation) | Your personal revision habits before the examination. |
| `[DATES]` | Page 28 (Timeline) | Specific calendar dates corresponding to Week 1, Week 3, Week 5, Week 8, and Week 11. |
| `[MY EMAIL]` | Page 30 (Contact) | Your contact email address. |
| `[LINKEDIN]` | Page 30 (Contact) | Your LinkedIn profile URL. |
| `[GITHUB]` | Page 30 (Contact) | Your GitHub profile URL. |

---

## 2. Where to Edit

All text and placeholders are centralized in:
```
src/data/content.ts
```

Opening `src/data/content.ts` allows you to edit the `OWNER_DETAILS` object at lines 3–17:
```typescript
export const OWNER_DETAILS = {
  name: "Your Name",
  regNo: "23BCE0000",
  programme: "B.Tech Computer Science & Engineering, 3rd Year",
  faculty: "Dr. Your Professor's Name",
  semester: "Winter Semester 2025-2026",
  // ...
};
```

Run the build audit command at any time to verify remaining tags:
```bash
npm run audit:placeholders
```
