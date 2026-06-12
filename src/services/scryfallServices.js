import {getCardInfo} from "./src/index.js";

const cartica = getCardInfo("bello");//fix: error al tener multiples opciones
const carticaCodificada =  encodeURIComponent(cartica);

let url = "https://api.scryfall.com/cards/named?fuzzy=" 
+ carticaCodificada;
console.log(url);




export async function infoCarticas(params) {}
