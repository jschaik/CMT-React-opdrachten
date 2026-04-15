# Opdrachten useEffect — opdracht-02-useEffect

**Folder:** `opdracht-02-useEffect`

> ⚠️ Opdracht 3 maak je in **deze zelfde folder**. Geen nieuwe Vite-app aanmaken!

**Setup:**
```bash
cd opdracht-02-useEffect
npm install
npm run dev
```

---

## Opdracht 2 – Clock (useEffect)

Maak een component `Clock` die de huidige digitale tijd weergeeft en deze elke seconde bijwerkt.

**Stap 1** – Maak een nieuw component `Clock`

**Stap 2** – Maak een `useState` met `currentTime` en `setCurrentTime`, gebruik `new Date()` als beginwaarde

**Stap 3** – Importeer `useEffect`:
```js
import React, { useEffect, useState } from 'react';
```

**Stap 4** – Maak een `useEffect` met daarin `setInterval` om de tijd elke seconde te updaten. Return een `clearInterval` met je intervalId om dubbele updates te voorkomen.

**Stap 5** – Toon de tijd met `toLocaleTimeString()`

**Stap 6** – Laad Clock in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 3 – Welkom (useEffect)

**Folder:** `opdracht-02-useEffect` ⚠️

Maak een component `WelcomeMessage` dat afhankelijk van het tijdstip "Goedemorgen", "Goedemiddag" of "Goedenavond" toont.

**Stap 1** – Maak component `WelcomeMessage` met `useState` voor `message`

**Stap 2** – Gebruik `useEffect` om:
- `currentTime` = `new Date()` op te slaan
- `hours` = de huidige uren op te halen
- Met een `if-statement` te bepalen welk bericht in `newMessage` komt
- `setMessage(newMessage)` aan te roepen

**Stap 3** – Toon het bericht in de component

**Stap 4** – Laad WelcomeMessage in App.jsx

**Theorie:**
- [React - useEffect](https://meesterjson.nl/cheat-sheet/pages/react/useeffect.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
