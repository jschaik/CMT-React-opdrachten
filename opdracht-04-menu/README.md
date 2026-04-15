# Opdracht 4 – Menu

**Folder:** `opdracht-04-menu`

**Setup:**
```bash
cd opdracht-04-menu
npm install
npm run dev
```

---

Maak een menu-overzicht met gerechten. De data staat klaar in `data.js`.

> ⚠️ Deze opdracht werkt exact hetzelfde als de Books-opdracht! `MenuItem` = Book, `MenuList` = BookList.

**Stap 1** – Bestudeer `data.js`. Elk object heeft: `id`, `title`, `category`, `price`, `img`, `desc`

**Stap 2** – Maak `MenuItem.jsx` met props `{title, price, img, desc}` en een HTML-structuur met `article`, `img`, `h2`, `h3` (met €-teken), `p`

**Stap 3** – Maak `MenuList.jsx`:
- Importeer `menu` uit `data.js`
- Maak een `useState(menu)` voor `gerechten`
- Map over `gerechten` en geef alle props door aan `<MenuItem />`
- Wrap in een `<section>` met className

**Stap 4** – Laad `MenuList` in App.jsx

**Stap 5** – Style met CSS (grid/flexbox)

**Theorie:**
- [React - Components](https://meesterjson.nl/cheat-sheet/pages/react/components.html)
- [React - Props](https://meesterjson.nl/cheat-sheet/pages/react/props.html)
- [React - useState](https://meesterjson.nl/cheat-sheet/pages/react/state.html)

**Oplevering:** Commit & Push + link inleveren via Canvas
