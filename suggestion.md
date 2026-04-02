# Portfolio Project - Suggestions & Issues

## FIXED Issues (Already Done)

### ~~1. Dead Navbar Links~~ - FIXED
- **Status:** About (`/about`) aur Contact (`/contact`) pages ban gaye hain aur routes add ho gaye.

### ~~2. "Hire Me?" Button Non-Functional~~ - FIXED
- **Status:** `mailto:hiteshbih11@gmail.com` link add kar diya. Ab click karne par email open hoga.

### ~~3. CRA to Vite Migration~~ - FIXED
- **Status:** Project CRA se Vite mein migrate ho gaya. `npm run dev` ya `npm start` se chalega.

### ~~4. Skills Data from JSON~~ - FIXED
- **Status:** About page ab `skill.json` se data le raha hai (skills, services, timeline).

### ~~5. App.jsx Bugs~~ - FIXED
- **Problem:** `<navbar />` (lowercase - HTML element, React component nahi), `<footer />` same issue, `<blog />` aur `<service />` undefined components, duplicate `/services` route, `/contact-us` path galat tha.
- **Status:** Saare bugs fix kar diye. Clean routes: `/`, `/about`, `/contact`.

---

## Remaining Issues (Abhi Fix Karna Hai)

### 1. Fake Social Media Links
- **File:** `src/page/Home.jsx` (Line 249-252)
- **Problem:** Facebook aur Instagram ke links generic URLs hain (`https://facebook.com`, `https://instagram.com`).
- **Fix:** Apne real profile links lagao.

### 2. Duplicate Service Item on Home Page
- **File:** `src/page/Home.jsx` (Line 153-165)
- **Problem:** "Website Hosting" do baar repeat ho raha hai same icon ke saath.
- **Fix:** Ek ko hatao ya koi naya service add karo (e.g., "Backend Development", "Database Design").

### 3. Project Live Demo Link Commented Out
- **File:** `src/page/Home.jsx` (Line 227-231)
- **Problem:** Project cards mein Live Demo link comment mein hai. Users ko koi link nahi dikhta.
- **Fix:** Comment hataao aur `project_details.json` mein `link` field add karo.

### 4. Home Page Skills Hardcoded
- **File:** `src/page/Home.jsx` (Line 114-126)
- **Problem:** Skills plain `<p>` tags mein hardcoded hain. About page mein `skill.json` se aa raha hai lekin Home page mein nahi.
- **Fix:** Home page mein bhi `skill.json` se data lo.

### 5. Navbar Links Not Using React Router
- **File:** `src/components/Navbar.jsx`
- **Problem:** `<a href="/about">` use ho raha hai `<Link to="/about">` ki jagah. Har click pe full page reload hota hai.
- **Fix:** `react-router-dom` ka `Link` component use karo.

### 6. Services & Blog Pages Missing
- **Problem:** Navbar mein Services aur Blog ke links hain lekin pages nahi bane.
- **Fix:** Ya toh pages banao ya Navbar se links hatao.

### 7. Resume Link Hardcoded
- **File:** `src/page/Home.jsx` (Line 14)
- **Problem:** Google Docs link directly code mein hai.
- **Fix:** `.env` file mein `VITE_RESUME_URL` use karo (Vite mein `VITE_` prefix chahiye).

### 8. Contact Page Form Not Connected
- **File:** `src/page/Contact.jsx`
- **Problem:** Form submit hone par sirf `console.log` hota hai. Koi email nahi jaata.
- **Fix:** EmailJS ya Formspree integrate karo.

### 9. Contact Page Placeholder Details
- **File:** `src/page/Contact.jsx`
- **Problem:** Email `hiteshkumar@example.com` aur phone `+91 XXXXX XXXXX` placeholder hain.
- **Fix:** Apni real details lagao.

---

## Improvements (Project Ko Better Banane Ke Liye)

| # | Area | Suggestion |
|---|------|-----------|
| 1 | **Project Screenshots** | Har project card mein actual screenshot dikhao, sirf emoji nahi |
| 2 | **SEO** | `index.html` mein meta description, og:tags add karo |
| 3 | **Accessibility** | Mobile menu toggle mein `aria-label` add karo |
| 4 | **Image Format** | PNG ki jagah WebP use karo (newmypic_new.png 2.5MB hai!) |
| 5 | **Dark/Light Mode** | Theme toggle feature add karo |
| 6 | **Animations** | About/Contact pages mein bhi GSAP animations add karo |
| 7 | **Blog Section** | Blog page banao with markdown posts |
| 8 | **Loading Screen** | Proper loading skeleton add karo |
| 9 | **lucide-react cleanup** | `lucide-react` package.json mein hai lekin ab use nahi ho raha, `npm uninstall lucide-react` karo |
| 10 | **Empty App.css** | `src/App.css` empty hai — delete karo ya use karo |

---

## Priority Order

1. Real social media links lagao
2. Home page duplicate service fix karo
3. Navbar mein `<Link>` use karo (`<a>` ki jagah)
4. Project demo links enable karo
5. Contact form connect karo (EmailJS)
6. `lucide-react` uninstall karo
7. Image optimize karo (WebP)
8. Remaining improvements

---

> **Last Updated:** After Vite migration + About/Contact pages + App.jsx bug fixes
