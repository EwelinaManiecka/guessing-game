import Quote from "./Quote.js";

class Game {
  currentStep = 0;
  lastStep = 7;

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

  guess(letter, event) {
    event.target.disabled = true;

    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName("step")[
        this.currentStep
      ].style.opacity = 1;
      document.getElementsByTagName("button").style.opacity = 0.5;

      if (this.currentStep === this.lastStep) {
        this.loosing();
      }
    }
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label.toLocaleUpperCase();
      button.addEventListener("click", (event) => this.guess(label, event));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
    if (!content.includes("_")) {
      this.winning();
    }
  }

  start() {
    document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
    this.drawLetters();
    this.drawQuote();
  }

  winning() {
    this.wordWrapper.innerHTML = "Gratulacje! Wygrywasz! Koniec gry! :D";
    this.lettersWrapper.innerHTML = "";
  }

  loosing() {
    this.wordWrapper.innerHTML =
      "Ojć! :( Nie udało się... spróbuj raz jeszcze :D";
    this.lettersWrapper.innerHTML = "";
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
});
game.start();
