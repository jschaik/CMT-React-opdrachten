# Opdracht 10 – Mijn Kluis (Authentication)

**Setup:**
```bash
cd opdracht-10-authentication
npm install
npm run dev
```

---

## Opdracht 10 – Mijn Kluis

> *De deuren van De Kluis gaan niet voor iedereen open. Alleen geregistreerde leden mogen naar binnen, hun eigen kluis openen, en zien wat ze daar bewaren. Jouw taak? Zorg dat die deuren goed op slot zitten — en alleen opengaan voor wie de juiste sleutel heeft.*

Bouw een React-applicatie met inlog-systeem. De app heeft een publieke homepage die iedereen mag zien, en een beveiligde "Mijn Kluis"-pagina die alleen bereikbaar is voor ingelogde gebruikers. Je gebruikt de **Context API** om de inlogstatus door de hele app te delen zonder props door elke component te sturen.

**Wat ga je maken:**
- Een publieke homepage
- Een register-formulier (naam, email, wachtwoord)
- Een login-formulier (email, wachtwoord)
- Een beveiligde "Mijn Kluis"-pagina
- Een navbar die zich aanpast op basis van inlogstatus
- Een logout-knop

De inlogstatus en user-data worden opgeslagen in `localStorage` zodat je ingelogd blijft na een refresh.

---

### Must Haves

**AuthContext opzetten**
- Maak een `AuthContext` in `src/context/AuthContext.jsx`
- Maak een `AuthProvider`-component met state voor de huidige user
- Zet drie functies in de context: `login(user)`, `logout()`, en `register(user)`
- Wikkel je hele app in de `AuthProvider` (in `App.jsx` of `main.jsx`)

**Persistentie met localStorage**
- Bij `login` en `register`: sla de user op in `localStorage`
- Bij `logout`: verwijder de user uit `localStorage`
- Bij het laden van de app: lees `localStorage` zodat je ingelogd blijft na een refresh

**Registeren**
- Formulier met velden: naam, email, wachtwoord
- Validatie: alle velden verplicht, wachtwoord minimaal 6 tekens
- Bij succes: automatisch inloggen en doorsturen naar de kluis
- Opslaan in `localStorage` als `users`-array (zodat je kunt inloggen met dezelfde gegevens)

**Inloggen**
- Formulier met velden: email, wachtwoord
- Controleer de ingevoerde gegevens tegen de `users`-array in `localStorage`
- Bij succes: zet de user in de context en stuur door naar de kluis
- Bij fout: toon een foutmelding

**Beveiligde route**
- Maak een `ProtectedRoute`-component in `src/components/`
- Dit component checkt of een user ingelogd is via `useContext`
- Zo niet: redirect naar `/login` met `<Navigate>`
- Zo wel: toon de inhoud (`children`)
- Wikkel de kluis-route hierin

**Mijn Kluis-pagina**
- Toont "Welkom in jouw kluis, [naam]"
- Toont een paar fictieve items (gewoon hardcoded in de component)
- Alleen bereikbaar na inloggen

**Navbar**
- Links naar Home, Login en Register als je **niet** ingelogd bent
- Links naar Home en Mijn Kluis + een Logout-knop als je **wel** ingelogd bent
- Toon de naam van de ingelogde user (bijv. "Hallo, Jason")

**Design**
- Een strakke, serieuze uitstraling past bij een kluis (donkere kleuren, lock-icoontjes, een beetje bank/vault-sfeer)
- Of maak er juist iets vrolijks van — als het maar past bij het thema

---

### Bonus

Klaar met de must-haves? Werk aan één of meerdere van deze uitbreidingen:

**Dubbele registratie voorkomen**
- Controleer bij registreren of het email-adres al bestaat
- Zo ja: toon een foutmelding

**Wachtwoord verbergen/tonen**
- Voeg een oogje-knopje toe aan het wachtwoordveld
- Klik verandert `type="password"` naar `type="text"` en terug

**Eigen items in de kluis**
- Laat de user zelf items (notities, geheimen, codes) toevoegen aan de kluis
- Sla ze per user op in `localStorage`
- Alleen zichtbaar voor de ingelogde eigenaar

**Session-timeout**
- Log de user automatisch uit na X minuten inactiviteit
- Toon een melding dat ze opnieuw moeten inloggen

---

**Theorie:**
- [React - Context API](https://meesterjson.nl/cheat-sheet/pages/react/auth-context.html)
- [React - AuthContext Setup](https://meesterjson.nl/cheat-sheet/pages/react/auth-setup.html)
- [React - Login & Register](https://meesterjson.nl/cheat-sheet/pages/react/login-register.html)
- [React - Protected Routes](https://meesterjson.nl/cheat-sheet/pages/react/protected-routes.html)
- [React Cheat Sheet (overzicht)](https://meesterjson.nl/cheat-sheet/pages/react/index.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
