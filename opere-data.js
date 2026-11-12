/*
  OPERE-DATA.JS
  -------------
  Qui vivono i contenuti di ogni singola immagine: titolo, percorso del file immagine,
  riferimento (prompt, modello, data...) e la dissertazione da leggere nella pagina di
  dettaglio (opera.html).

  Per aggiungere o modificare un'opera:
  1. Copia un blocco { ... } esistente.
  2. Cambia "id" (deve essere univoco: è il valore usato nel link, es. opera.html?id=01).
  3. Cambia "titolo", "immagine" (percorso del file nella cartella images/),
     "riferimento" e "dissertazione" (un array: ogni stringa è un paragrafo).
  4. In index.html, collega la tile corrispondente con href="opera.html?id=IL-TUO-ID".
*/

const OPERE = [
  {
    id: "01",
    titolo: "Senza titolo 01",
    immagine: "images/01.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Sostituisci questo paragrafo con il commento critico relativo a questa immagine: quali variabili del prompt erano in gioco, quale tipo fisiognomico il modello ha prodotto, cosa rivela sulla grammatica implicita del sistema.",
      "Puoi aggiungere quanti paragrafi vuoi: ogni stringa dell'array \"dissertazione\" diventa un paragrafo a parte nella pagina."
    ]
  },
  {
    id: "02",
    titolo: "Senza titolo 02",
    immagine: "images/02.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  },
  {
    id: "03",
    titolo: "Senza titolo 03",
    immagine: "images/03.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  },
  {
    id: "04",
    titolo: "Senza titolo 04",
    immagine: "images/04.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  },
  {
    id: "05",
    titolo: "Senza titolo 05",
    immagine: "images/05.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  },
  {
    id: "06",
    titolo: "Senza titolo 06",
    immagine: "images/06.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  },
  {
    id: "07",
    titolo: "Senza titolo 07",
    immagine: "images/07.jpg",
    riferimento: "Prompt: [inserisci qui il prompt usato] — Modello: [es. Midjourney v6] — Data: [mese/anno]",
    dissertazione: [
      "Testo segnaposto. Sostituisci con la dissertazione relativa a questa immagine."
    ]
  }
];
