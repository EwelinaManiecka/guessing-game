import Quote from "./Quote.js";

class Game {
  quotes = [
    {
      text: "pan tadeusz",
      category: "Utwór literacki",
    },
    {
      text: "janko muzykant",
      category: "Utwór literacki",
    },
    {
      text: "akademia pana kleksa",
      category: "Film",
    },
    {
      text: "quo vadis",
      category: "Utwór literacki",
    },
    {
      text: "ben hur",
      category: "film",
    },
    {
      text: "el cid",
      category: "Film",
    },
    {
      text: "programowanie w javascript",
      category: "Poradnik",
    },
    {
      text: "akademia pana kleksa",
      category: "Utwór literacki",
    },
    {
      text: "angielski dla leniwych",
      category: "Poradnik",
    },
  ];

  constructor({ lettersWrapper, categoryWrapper, outputWrapper, wordWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.outputWrapper = outputWrapper;
    this.wordWrapper = wordWrapper;

    const { text, category } =
      this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  guess(letter) {
    this.quote.guess(letter);
    this.drawQuote();
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label.toLocaleUpperCase();
      button.addEventListener("click", () => this.guess(label));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
  }

  start() {
    this.drawLetters();
    this.drawQuote();
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
});
game.start();
