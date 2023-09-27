let s = "ZZaAbBcDzFZ01857383958";

function replaceAt(index, s, char) {
  return s.slice(0, index) + char + s.slice(index + 1);
}

function bubbleSort(s) {
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length - 1; j++) {
      if (s.charCodeAt(j) > s.charCodeAt(j + 1)) {
        // console.log(`swap ${j} and ${j + 1}`);
        let tmp = s.charAt(j);
        s = replaceAt(j, s, s.charAt(j + 1));
        s = replaceAt(j + 1, s, tmp);
        // console.log(s);
      }
    }
  }
  return s;
}

s = bubbleSort(s);
// s = replaceAt(0, s, "?");
// s = replaceAt(s.length - 1, s, "?");
console.log(s);
