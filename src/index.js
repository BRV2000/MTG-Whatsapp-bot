import axios from "axios";
import { formatoCartas } from "./utils/cardFormatter.js";
import { urlServices } from "./services/scryfallServices.js";

export function getCardInfo(nameCard) {
  if (nameCard == null || nameCard == undefined || nameCard.trim() === "") {
    return "Card name is empty";
  } else {
    return nameCard.trim();
  }
}

export function codeCardName() {
  const cartica = getCardInfo("sol ring"); //fix: error al tener multiples opciones

  const carticaCodificada = encodeURIComponent(cartica);
  return carticaCodificada;
}

async function infoCarticas() {
  try {
    const url = urlServices();
    let response = await axios.get(url);
    
    const cardData = response.data;
  
    const card = formatoCartas(cardData);
   
    console.log(card);//permite visualizar response de cardFormatter
  } catch (error) {
    console.log("Error al encontrar la carta: ", error);
  }
}

infoCarticas();
