import axios from "axios";
import {formatoCartas} from "./utils/cardFormatter.js";

export function getCardInfo(nameCard) {
   if (nameCard == null || nameCard == undefined || nameCard.trim() === "") {
      return "Card name is empty";
   } else {
        return nameCard.trim();
   }

}

const cartica = getCardInfo("bello");//fix: error al tener multiples opciones
const carticaCodificada =  encodeURIComponent(cartica);

let url = "https://api.scryfall.com/cards/named?fuzzy=" 
+ carticaCodificada;
console.log(url);

async function infoCarticas(response) {
   try {
       response = await axios.get(url);
      const cardData = response.data
     
      const card = formatoCartas(cardData);
      console.log(card);

   } catch (error) {
      console.log("Error al encontrar la carta: ", error);
   }
}

infoCarticas();