export const sumCubes = n => {
  let cube = 0;
  for (let i = 0; i <= n; i++) {
    cube += Math.pow(i, 3);
  }
  return cube;
};

export const spinWords = str => {
  let words = str.split(" ");
  let reversed;
  const mapped = words.map(el => {
    reversed = el.split("");
    if (reversed.length > 4) {
      return reversed.reverse().join("");
    }
    return reversed.join("");
  });
  return mapped.join(" ");
};

export const inviteMoreWomen = L => {
  const invite = L.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
  if (invite <= 0) {
    return false;
  }
  return true;
};

export const number = array => {
  const newArr = array.map((el, i) => {
    return `${i + 1}: ${el}`;
  });
  return newArr;
};

export const isSquare = n => {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }

  return false;
};
