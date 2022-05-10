export const type = [
  { value: "Bug", label: "Bug" },
  { value: "Dark", label: "Dark" },
  { value: "Dragon", label: "Dragon" },
  { value: "Electric", label: "Electric" },
  { value: "Fairy", label: "faiFy" },
  { value: "Fighting", label: "Fighting" },
  { value: "Fire", label: "Fire" },
  { value: "Flying", label: "Flying" },
  { value: "Ghost", label: "Ghost" },
  { value: "Grass", label: "Grass" },
  { value: "Ground", label: "Ground" },
  { value: "Ice", label: "Ice" },
  { value: "Normal", label: "Normal" },
  { value: "Poison", label: "Poison" },
  { value: "Psychic", label: "Psychic" },
  { value: "Rock", label: "Rock" },
  { value: "Steel", label: "Steel" },
  { value: "Water", label: "Water" },
];
export const simpleType = [
   "Bug",
   "Dark",
   "Dragon",
   "Electric",
   "Fairy",
   "Fighting",
   "Fire",
   "Flying",
   "Ghost",
   "Grass",
   "Ground",
   "Ice",
   "Normal",
   "Poison",
   "Psychic",
   "Rock",
   "Steel",
   "Water"
];
var typeSvg = require.context("../badge", true, /\.svg$/);
const paths = typeSvg.keys();
export const svgs = paths.map((path) => typeSvg(path));