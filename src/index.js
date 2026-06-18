import axios from "axios";
import { formatoCartas } from "./utils/cardFormatter.js";
import { urlServices } from "./services/scryfallServices.js";
import { messageFormatter } from "./utils/messageFormatter.js";

export function getCardInfo(nameCard) {
  if (nameCard == null || nameCard == undefined || nameCard.trim() === "") {
    return "Card name is empty";
  } else {
    return nameCard.trim();
  }
}

export function codeCardName() {
  const cartica = getCardInfo("bello,"); //fix: error al tener multiples opciones

  const carticaCodificada = encodeURIComponent(cartica);
  return carticaCodificada;
}

export async function infoCarticas() {
  try {
    const url = urlServices();
    let response = await axios.get(url);

    const cardData = response.data;

    const card = formatoCartas(cardData);
    console.log(card);
    
    const cardMessage = messageFormatter(card);//da formato al mensaje en Wtps
    console.log(cardMessage);

  } catch (error) {
    console.log("Error al encontrar la carta: ", error);//muestra generalmente el error
  }
}

infoCarticas();
