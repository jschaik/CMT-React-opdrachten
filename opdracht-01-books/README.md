# Opdracht 01 – Books

> ⚠️ Opdrachten 1.1, 1.2, 1.3, 1.4, 05, 11, 11.2, 13.1 en 13.2 maak je ook in **deze folder**.

**Setup:**
```bash
cd opdracht-01-books
npm install
npm run dev
```

---

## Opdracht 01 – Books

Je gaat een pagina maken waar de top drie bestseller boeken worden weergeven. In de eerste opdracht voer je de boeken handmatig in.

Je hebt twee componenten nodig in je `components`-folder:
- **Book**: bevat de titel, auteur en afbeelding
- **BookList**: laadt voor elk boek een Book-component

Zorg dat de styling lijkt op het voorbeeld in Canvas.

> 💡 Tip: afbeeldingen komen in de `public`-folder. Maak daar een map `images` aan.

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.1 – Uitbreiding Books

**Stap 1**
- Maak een component `Header` met een navbar: 'home', 'contact' en 'about us' met normaal HTML (nog geen `<a>`-tag)
- Style je Header-component met CSS
- Laad het in App.jsx boven je BookList

**Stap 2**
- Maak een component `Layout` die alleen styling bevat om een container van je website te maken
- Geef het een breedte van `80vw` en `margin: 0 auto`
- Laad Layout in App.jsx en plaats je Header en BookList erin
- Je ziet niets meer op het scherm — dat klopt! Zoek op hoe je dit oplost met één extra property

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.2 – Books object

In de vorige opdracht heb je de boeken handmatig ingevoerd. Nu maak je in BookList een `useState` met een array van objecten. Elk object is één boek. Toon alle boeken uit je array op het scherm.

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - useState (voorbeeld 3)](https://meesterjson.nl/cheat-sheet/pages/react/state.html)
- [React - Lists & Keys (Array met Objecten)](https://meesterjson.nl/cheat-sheet/pages/react/lists.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.3 – Lees-teller per boek

Doel: voeg een knop toe aan elk boek die bijhoudt hoe vaak je het boek "gelezen" hebt.

**Stap 1 – State aanmaken in Book.jsx**
- Importeer `useState` van React
- Maak een state `aantalKeerGelezen` met setter `setAantalKeerGelezen` en beginwaarde `0`

**Stap 2 – Functie die de teller verhoogt**
- Maak een functie `verhoogTeller`
- Roep daarin de setter aan zodat de nieuwe waarde de oude waarde + 1 is

**Stap 3 – Button toevoegen**
- Voeg in je return een button toe
- Koppel een `onClick` die `verhoogTeller` aanroept
- Tekst op de button: `"Keer gelezen: "` + de waarde van je state

**Stap 4 – Testen**
- Klik op de buttons bij verschillende boeken
- Elke button moet zijn eigen teller hebben

**Theorie:**
- [React - useState](https://meesterjson.nl/cheat-sheet/pages/react/state.html)
- [React - Events](https://meesterjson.nl/cheat-sheet/pages/react/events.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 1.4 – Totaal aantal boeken

Doel: maak een apart component dat toont hoeveel boeken er in totaal zijn.

**Stap 1** – Maak `BookCounter.jsx` in je components folder (gebruik `sfc`)

**Stap 2** – Ontvang prop `aantal` via `{aantal}` tussen de haakjes van je functie

**Stap 3** – Return een `<h2>` met tekst: `"Totaal aantal boeken in de lijst: "` + `{aantal}`

**Stap 4** – Importeer BookCounter in BookList.jsx

**Stap 5** – Voeg BookCounter toe boven je `books.map` in de return van BookList en geef `aantal={books.length}` mee

**Stap 6 – Testen**
- Bovenaan de pagina moet staan: `"Totaal aantal boeken in de lijst: 3"`
- Voeg handmatig een boek toe aan je array → getal moet automatisch veranderen

**Theorie:**
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 05 – Router

**Stap 1** – Maak in `src` een map `Pages` met de volgende bestanden:
- `About.jsx`
- `Contact.jsx`
- `Home.jsx`
- `Navigation.jsx`
- `NoPage.jsx`

**Stap 2** – Zet in elke pagina een basis component klaar met `sfc` en een titel. `NoPage` krijgt "404, page not found".

**Stap 3** – Verplaats de inhoud van je App.jsx return naar `Home.jsx` (dit wordt je indexpagina)

**Stap 4** – Lees de Router-theorie en koppel alle pagina's aan je navigatie. Style je navbar en zorg dat alle boeken zichtbaar zijn op de homepagina.

**Theorie:**
- [React - Router](https://meesterjson.nl/cheat-sheet/pages/react/router.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 11 – Zoekfunctie Books

Voeg een zoekfunctie toe aan je Books-applicatie. Gebruikers kunnen een boek zoeken op titel via een zoekbalk. Gebruik de PDF-uitleg die in Canvas staat.

**Theorie:**
- [React - Forms & Input](https://meesterjson.nl/cheat-sheet/pages/react/forms.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 11.2 – Filterfunctie Boekcategorieën

Voeg een filterfunctie toe waarmee gebruikers boeken kunnen filteren op categorie via een dropdown.

**Stap 1** – Voeg aan elk boek een `category`-property toe: Fantasy, Avontuur, Sciencefiction, Thriller of Romance

**Stap 2** – Toon de categorie in `Book.jsx` en geef de prop door vanuit `BookList.jsx`

**Stap 3** – Maak een `categories`-array in BookList:
```js
['Alle', 'Fantasy', 'Avontuur', 'Sciencefiction', 'Thriller', 'Romance']
```

**Stap 4** – Maak een `useState` voor `selectedCategory` met beginwaarde `'Alle'`

**Stap 5** – Maak een `filterHandler` die:
- De waarde uit `e.target.value` haalt
- `selectedCategory` updatet
- Bij 'Alle': alle boeken toont; anders: filtert op categorie met `.filter()`

**Stap 6** – Maak een `<select>` element met `onChange={filterHandler}` en map over `categories` voor de `<option>`-elementen

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 13.1 – Favoriet systeem

Voeg een favoriet-hartje toe aan elk boek. Wit hartje = niet favoriet, rood hartje = favoriet. Klikken toggled de status. Toon de tekst "Toegevoegd aan favorieten" als het boek favoriet is.

**Stap 1** – Importeer `useState` in `Book.jsx`

**Stap 2** – Maak state `liked` met beginwaarde `false`

**Stap 3** – Maak functie `toggleLike` die `setLiked(!liked)` aanroept

**Stap 4** – Voeg een `<div className="favorite-section">` toe met een button:
- `onClick={toggleLike}`
- Inhoud: `liked ? '❤️' : '🤍'` (ternary operator)

**Stap 5** – Voeg conditionele tekst toe onder de button:
```jsx
{liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
```

**Theorie:**
- [React - Conditionals](https://meesterjson.nl/cheat-sheet/pages/react/conditionals.html)

**Oplevering:** Commit & Push + link inleveren via Canvas

---

## Opdracht 13.2 – Flip Card

Voeg een flip card effect toe. Klik op een boek → de kaart draait om en toont details op de achterkant. Klik nogmaals → terug naar de voorkant.

**Stap 1** – Breid je data uit met `description`, `year` en `pages` per boek

**Stap 2** – Geef de extra props door in `BookList.jsx` en ontvang ze in `Book.jsx`

**Stap 3** – Maak state `isFlipped` met beginwaarde `false`

**Stap 4** – Maak functie `handleFlip` die `setIsFlipped(!isFlipped)` aanroept

**Stap 5** – Pas je JSX-structuur aan:
```jsx
<article
  className={`book ${isFlipped ? 'flipped' : ''}`}
  onClick={handleFlip}
>
  <div className="book-inner">
    <div className="book-front">
      {/* voorkant: image, title, author, category, favoriet */}
    </div>
    <div className="book-back">
      {/* achterkant: jaar, pagina's, beschrijving */}
    </div>
  </div>
</article>
```

**Stap 6** – Voeg de volgende CSS toe voor het flip-effect:
```css
.book {
  perspective: 1000px;
  cursor: pointer;
  height: 550px;
}

.book-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.book.flipped .book-inner {
  transform: rotateY(180deg);
}

.book-front,
.book-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}

.book-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

**Stap 7** – Voeg `e.stopPropagation()` toe als eerste regel van `toggleLike`, zodat klikken op het hartje de card niet ook laat flippen

**Theorie:**
- [React - Conditionals](https://meesterjson.nl/cheat-sheet/pages/react/conditionals.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
