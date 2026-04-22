# Opdracht 14 – Secret Diary

**Setup:**
```bash
cd opdracht-14-secret-diary
npm install
npm run dev
```

---

## Opdracht 14 – Secret Diary

Bouw een **Secret Diary** app waarin gebruikers zich kunnen registreren, inloggen en privé dagboek-entries kunnen schrijven die alleen zij kunnen zien. In deze opdracht ligt de focus op **authenticatie**: het beheren van een ingelogde gebruiker met de Context API, routes beschermen, en data bewaren in `localStorage`.

---

### Wat ga je bouwen?

Een kleine React app met drie pagina's:

1. **Home** (`/`) — publieke landingspagina met welkomsttekst en links naar Login/Register
2. **Login / Register** (`/login`, `/register`) — formulieren om in te loggen of te registreren
3. **Diary** (`/diary`) — **beveiligde** pagina waar de ingelogde gebruiker dagboek-entries kan toevoegen en lezen

---

### Must Haves

**AuthContext**
- Maak een `AuthContext` aan met `createContext`
- Wikkel de app in een `AuthProvider` die de huidige gebruiker bijhoudt
- Expose in elk geval: `user`, `login()`, `register()`, `logout()`
- Gebruik `useContext` om de auth-state overal in de app op te halen

**Register**
- Formulier met velden: `username`, `password`, `confirmPassword`
- Basisvalidatie: alle velden verplicht, wachtwoord ≥ 6 tekens, wachtwoorden moeten matchen
- Bij succes: nieuwe user opslaan in `localStorage` (array van users) en automatisch inloggen
- Foutmelding tonen als de username al bestaat

**Login**
- Formulier met velden: `username`, `password`
- Controleer gegevens tegen de users in `localStorage`
- Bij succes: huidige gebruiker in AuthContext zetten en doorsturen naar `/diary`
- Bij fout: foutmelding tonen

**Logout**
- Logout-knop zichtbaar in de header wanneer je ingelogd bent
- Wist de huidige gebruiker uit context en `localStorage`
- Stuurt door naar de home-pagina

**Protected Route**
- De `/diary`-route mag alleen toegankelijk zijn als je ingelogd bent
- Bezoekt een niet-ingelogde gebruiker `/diary`, stuur ze door naar `/login`
- Maak een herbruikbare `<ProtectedRoute>` component (wrapper om de route)

**Dagboek-entries**
- Op de `/diary`-pagina: formulier om een nieuwe entry toe te voegen (titel + tekst)
- Lijst van entries van de huidige gebruiker (nieuwste bovenaan)
- Elke entry toont: titel, tekst en timestamp
- Entries worden **per gebruiker** opgeslagen in `localStorage` (zodat User A niet de entries van User B ziet)
- Entries blijven bewaard na het herladen van de pagina

**Header / Navigatie**
- Uitgelogd: toon links naar `Home`, `Login`, `Register`
- Ingelogd: toon links naar `Home`, `Diary`, `Logout` + de huidige username

---

### Tips

- Wachtwoorden in `localStorage` zijn **niet** veilig — dat is in deze oefenopdracht prima. Doe dit nooit in productie.
- Gebruik één `AuthContext`-bestand (`src/context/AuthContext.jsx`) en importeer waar nodig
- Houd je formulieren controlled met `useState`
- Denk na over wat in context hoort en wat in lokale component-state

---

### Voorgestelde structuur

```
src/
  context/
    AuthContext.jsx
  components/
    Header.jsx
    ProtectedRoute.jsx
  pages/
    Home.jsx
    Login.jsx
    Register.jsx
    Diary.jsx
  App.jsx
  main.jsx
```

---

**Theorie:**
- [React - Context API](https://meesterjson.nl/cheat-sheet/pages/react/auth-context.html)
- [React - AuthContext Setup](https://meesterjson.nl/cheat-sheet/pages/react/auth-setup.html)
- [React - Login & Register](https://meesterjson.nl/cheat-sheet/pages/react/login-register.html)
- [React - Protected Routes](https://meesterjson.nl/cheat-sheet/pages/react/protected-routes.html)
- [React - localStorage](https://meesterjson.nl/cheat-sheet/pages/react/localstorage.html)
- [React - Router](https://meesterjson.nl/cheat-sheet/pages/react/router.html)
- [React Cheat Sheet (overzicht)](https://meesterjson.nl/cheat-sheet/pages/react/index.html)

**Oplevering:** Commit & Push + link inleveren via Canvas.
