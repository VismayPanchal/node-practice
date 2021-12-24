export const type = [
  { value: "bug", label: "bug" },
  { value: "dark", label: "dark" },
  { value: "dragon", label: "dragon" },
  { value: "electric", label: "electric" },
  { value: "fairy", label: "fairy" },
  { value: "fighting", label: "fighting" },
  { value: "fire", label: "fire" },
  { value: "flying", label: "flying" },
  { value: "ghost", label: "ghost" },
  { value: "grass", label: "grass" },
  { value: "ground", label: "ground" },
  { value: "ice", label: "ice" },
  { value: "normal", label: "normal" },
  { value: "poison", label: "poison" },
  { value: "psychic", label: "psychic" },
  { value: "rock", label: "rock" },
  { value: "steel", label: "steel" },
  { value: "water", label: "water" },
];
export const simpleType = [
   "bug",
   "dark",
   "dragon",
   "electric",
   "fairy",
   "fighting",
   "fire",
   "flying",
   "ghost",
   "grass",
   "ground",
   "ice",
   "normal",
   "poison",
   "psychic",
   "rock",
   "steel",
   "water"
];
var typeSvg = require.context("../badge", true, /\.svg$/);
const paths = typeSvg.keys();
export const svgs = paths.map((path) => typeSvg(path));