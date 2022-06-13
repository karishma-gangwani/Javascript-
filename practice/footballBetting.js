const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. using destructuring arrays.
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players}, ${players.length} goals were scored`);
};

// when you want individual components from an array then use the spread operator.
// printGoals(...game.scored);

// team1 < team2 && console.log("team1 is more likely to win");
// team1 > team2 && console.log("team2 is more likely to win");

// using the .entries() method to iterate over index, element in the array scored nested in the object game.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal ${i + 1}`, player);
// }
console.log(game.odds);
console.log(Object.values(game.odds));
console.log(Object.values(game.odds).length);

// iterating over a nested object inside an object would require object.values
let sum = 0;
let avg = 0;
for (const element of Object.values(game.odds)) {
  sum += element;
  avg = sum / Object.values(game.odds).length;
}
console.log(avg);

console.log(
  Object.values(game.odds).reduce((a, b) => a + b) /
    Object.values(game.odds).length
);

console.log(
  `\n odd victory of ${game.team1}: ${
    Object.values(game.odds)[0]
  }\n odd of draw: ${Object.values(game.odds)[1]}\n odd of victory ${
    game.team2
  }: ${Object.values(game.odds)[2]}`
);

// bonus question
let scorers = {};
for (const element of game.scored) {
  scorers[element]
    ? (scorers[element] += scorers[element])
    : (scorers[element] = 1);
}
console.log(scorers);

game.scorers = scorers;
console.log(game);
