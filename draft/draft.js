let pSet = ["A", "B", "C"];
let sSet = ["A", "D"];

function solve(pSet, sSet) {
  const N = pSet.length,
    M = sSet.length;

  const result = [];
  //1st loop
  pSet.forEach((element) => {
    result.push(element);
  });

  let pIndex = 0;

  while (pIndex < N) {
    for (let sIndex = 0; sIndex < M; sIndex++) {
      if (pSet[pIndex] != sSet[sIndex]) {
        result.push(pSet[pIndex] + sSet[sIndex]);
      }
    }
    pIndex++;
  }
  return result;
}

console.log(solve(pSet, sSet));
