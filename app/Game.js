class Game {
  constructor({ lettersWrapper, categoryWrapper, outputWrapper, wordWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.outputWrapper = outputWrapper;
    this.wordWrapper = wordWrapper;
  }

  start() {
    // console.log("Let's play the game");
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      this.lettersWrapper.appendChild(button);
    }
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
});
game.start();
