const sentence = "hello there from lighthouse labs";

let delay = 0;
let printString = '';
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    printString += char;
    if (printString.length === sentence.length) {
      console.log('');
    }
  }, delay);
  delay += 50;
}
