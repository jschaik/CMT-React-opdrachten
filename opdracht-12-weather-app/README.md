# Opdracht 12 – Weerapplicatie

**Folder:** `opdracht-12-weather-app`

**Setup:**
```bash
cd opdracht-12-weather-app
npm install
npm run dev
```

---

Bouw een weerapplicatie met de [OpenWeather API](https://openweathermap.org/api). Maak een gratis account aan voor een API-key.

**API-url:**
```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
```

**Eisen:**
- Component `WeatherInfo` met: stadsnaam + weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid, windsnelheid
- In `App.jsx`: fetch, form met input/submit, WeatherInfo component
- Styling met Tailwind CSS

**Bonus:**
- Pas de achtergrond aan op basis van het weer
- Sla alle zoekopdrachten op en toon ze onder elkaar
- Toon het weer voor de komende 4 dagen
- Toggle card: klik op een stad om de weerinfo te tonen/verbergen

**Theorie:**
- [React - Data Fetching](https://meesterjson.nl/cheat-sheet/pages/react/fetching.html)

**Oplevering:** Link + screenshot van de applicatie inleveren via Canvas
