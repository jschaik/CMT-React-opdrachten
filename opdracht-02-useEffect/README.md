# Opdracht 02 & 03 – useEffect

> ⚠️ Beide opdrachten maak je in **deze folder**. Geen nieuwe Vite-app aanmaken!

**Setup:**
```bash
cd opdracht-02-useEffect
npm install
npm run dev
```

---

## Opdracht 02 – Clock

Maak een component `Clock` die de huidige digitale tijd weergeeft en deze elke seconde bijwerkt.

**Stap 1** – Maak een nieuw component `Clock.jsx`

**Stap 2** – Maak een `useState` met `currentTime` en `setCurrentTime`, gebruik `new Date()` als beginwaarde

**Stap 3** – Importeer `useEffect`:
```js
import React, { useEffect, useState } from 'react';
```

**Stap 4** – Maak een `useEffect` met daarin `setInterval` om de tijd elke seconde te updaten. Return een `clearInterval` met je intervalId om dubbele updates te voorkomen:
```js
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  return () => clearInterval(intervalId);
}, []);
```

**Stap 5** – Toon de tijd met `toLocaleTimeString()`:
```jsx
<p>{currentTime.toLocaleTimeString()}</p>
```

**Stap 6** – Laad `Clock` in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 03 – WelcomeMessage

Maak een component `WelcomeMessage` dat afhankelijk van het tijdstip "Goedemorgen", "Goedemiddag" of "Goedenavond" toont.

**Stap 1** – Maak een nieuw component `WelcomeMessage.jsx`

**Stap 2** – Maak een `useState` met `message` en `setMessage`

**Stap 3** – Maak een `useEffect` die het juiste bericht bepaalt:
- Maak een variabele `currentTime` met `new Date()`
- Maak een variabele `hours` met de huidige uren
- Maak een variabele `newMessage` met een lege string
- Gebruik een `if-statement` om te bepalen welk bericht in `newMessage` komt:
  - Kleiner dan 12 → `'Goedemorgen'`
  - Kleiner dan 18 → `'Goedemiddag'`
  - Anders → `'Goedenavond'`
- Roep `setMessage(newMessage)` aan

**Stap 4** – Toon het bericht in de component

**Stap 5** – Laad `WelcomeMessage` in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
