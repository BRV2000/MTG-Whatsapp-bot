import {codeCardName} from "../index.js";

export function urlServices() {
    let urlScryFall = "https://api.scryfall.com/cards/named?fuzzy=";
    const params = urlScryFall + codeCardName();
    return params;
  
}
