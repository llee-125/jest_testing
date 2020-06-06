class Word {
  constructor(wrd) {
    this.word = wrd;
  }

  get rev() {
    return new Word(this.word.split("").reverse().join(""));
  }

  get getWord() {
    return this.word;
  }

  get isPal() {}

  set setWord(wrd) {
    this.word = wrd;
  }
}

module.exports = Word;
