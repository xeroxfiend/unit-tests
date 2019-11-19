import {
  sumCubes,
  spinWords,
  inviteMoreWomen,
  number,
  isSquare
} from "../functions";

it("takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.", () => {
  expect(sumCubes(2)).toBe(9);
  expect(sumCubes(3)).toBe(36);
  expect(sumCubes(4)).toBe(100);
  expect(sumCubes(5)).toBe(225);
  expect(sumCubes(10)).toBe(3025);
});

it("takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.", () => {
  expect(spinWords("Hello there pal, how are you doing?")).toBe(
    "olleH ereht pal, how are you ?gniod"
  );

  expect(spinWords("I am doing very well thank you")).toBe(
    "I am gniod very well knaht you"
  );

  expect(spinWords("well how was your day you beautiful man?")).toBe(
    "well how was your day you lufituaeb man?"
  );

  expect(
    spinWords("oh it was just fantastic thank you very much for asking!")
  ).toBe("oh it was just citsatnaf knaht you very much for !gniksa");

  expect(spinWords("That is so awesome to hear. Ok well goodbye!")).toBe(
    "That is so emosewa to .raeh Ok well !eybdoog"
  );
});

it("takes an array of integers of party goers. (-1 represent women, 1 represent men) Return true if more women need to be invited to match the number of invited men.", () => {
  expect(inviteMoreWomen([-1, -1, -1, 1, 1])).toBe(false);
  expect(inviteMoreWomen([-1, -1, -1, -1, -1, -1])).toBe(false);
  expect(inviteMoreWomen([1, 1, 1, 1, 1, 1])).toBe(true);
  expect(inviteMoreWomen([-1, -1, -1, 1, 1, 1])).toBe(false);
  expect(inviteMoreWomen([1, 1, 1, 1, 1, -1])).toBe(true);
});

it("takes an array of strings and returns each line prepended by the correct number.", () => {
  expects(number(["a", "b", "c"])).toBe(["1: a", "2: b", "3: c"]);
  expects(number(["a", "b", "c", "d", "e", "f", "g"])).toBe([
    "1: a",
    "2: b",
    "3: c",
    "4: d",
    "5: e",
    "6: f",
    "7: g"
  ]);
  expects(number(["Eggs", "Milk", "Cheese"])).toBe([
    "1: Eggs",
    "2: Milk",
    "3: Cheese"
  ]);
  expects(number(["Cereal", "Peanut Butter", "Bananas"])).toBe([
    "1: Cereal",
    "2: Peanut Butter",
    "3: Bananas"
  ]);
  expects(number(["1", "1", "2", "3", "5", "8", "13"])).toBe([
    "1: 1",
    "2: 1",
    "3: 2",
    "4: 3",
    "5: 5",
    "6: 8",
    "7: 13"
  ]);
});

it("takes an integral number and determines if it is a square number", () => {
    expect(isSquare(1)).toBe(false)
    expect(isSquare(4)).toBe(true)
    expect(isSquare(25)).toBe(true)
    expect(isSquare(100)).toBe(true)
    expect(isSquare(3000)).toBe(false)
});
