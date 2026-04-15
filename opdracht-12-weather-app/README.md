# Opdracht 12 – Weerapplicatie

**Setup:**
```bash
cd opdracht-12-weather-app
npm install
npm run dev
```

---

## Opdracht 12 – Weerapplicatie

Bouw een weerapplicatie met de [OpenWeather API](https://openweathermap.org/api). Maak een gratis account aan om een eigen API-key te genereren.

**API-url:**
```
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
```

Waarbij `city` de useState is waar de stadsnaam in zit en `apiKey` je eigen variabele met je sleutel.

**Eisen:**

- Component `WeatherInfo` met:
  - Stadsnaam + [weer-icon](https://openweathermap.org/weather-conditions)
  - Temperatuur
  - Gevoelstemperatuur
  - Luchtvochtigheid
  - Windsnelheid
- In `App.jsx`:
  - Fetch van de API-data
  - Form met input en submit
  - `WeatherInfo` component ingeladen
- Styling met Tailwind CSS

**Bonus:**
- Pas de achtergrond aan op basis van het weer (bewolkt, zonnig, etc.)
- Sla alle zoekopdrachten op en toon ze onder elkaar (net als de Twitter/Todo-opdracht)
- Toon het weer voor de [komende 4 dagen](https://openweathermap.org/api/hourly-forecast)
- Toggle card: klik op een stad om de weerinfo te tonen/verbergen

**Theorie:**
- [React - Data Fetching](https://meesterjson.nl/cheat-sheet/pages/react/fetching.html)
- [React - Forms & Input](https://meesterjson.nl/cheat-sheet/pages/react/forms.html)
- [React - Tailwind](https://meesterjson.nl/cheat-sheet/pages/react/tailwind.html)

**Oplevering:** Commit & Push + link inleveren via Canvas + een screenshot van de applicatie
