# Opdracht 15 – Old Town Barber App

**Folder:** `opdracht-15-old-town-barber-app`

**Setup:**
```bash
cd opdracht-15-old-town-barber-app
npm install
npm install react-toastify
npm run dev
```

---

Bouw een barbier boekingssysteem. 

**Must Haves:**
- User Profile Setup (formulier bij eerste bezoek, validatie, opgeslagen in `localStorage`)
- Shop Info Sectie (naam, openingstijden, services met prijzen)
- Afspraak Boeken (formulier prefilled met user data, service dropdown, datum/tijd selectie, opgeslagen in `localStorage`)
- Boekingen Overzicht (lijst gesorteerd op datum)
- Toast notificaties met `react-toastify` (succes, fout, reminder bij afspraak binnen 15 minuten)
- Design dat past bij de naam van de shop

**Eisen:**

**1. User Profile Setup**
- Formulier bij eerste bezoek (naam, email, telefoon)
- Validatie op alle velden
- localStorage: `userProfile` object

**2. Shop Info Sectie**
- Vaste shop informatie (naam, openingstijden)
- Services lijst met prijzen en duur
- Mooi geformateerd overzicht

**3. Afspraak Boeken**
- Formulier prefilled met user data
- Service selectie dropdown
- Datum picker (alleen toekomst)
- Tijd selectie dropdown
- localStorage: `appointments` array

**4. Boekingen Overzicht**
- Lijst van alle afspraken
- Sorteer op datum (chronologisch)
- Toon service name, datum, tijd, prijs

**5. Toast Notificaties & Reminders**
- Success bij nieuwe booking
- Success bij profiel opslaan/bewerken
- Error bij validatie problemen
- Reminder toast als je afspraak binnen 15 minuten is
- Gebruik `react-toastify`

**Theorie:**
- [React Cheat Sheet](https://meesterjson.nl/cheat-sheet/pages/react/index.html)
- [React - localStorage](https://meesterjson.nl/cheat-sheet/pages/react/localstorage.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
