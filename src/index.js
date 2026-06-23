import axios from "axios";
import { formatoCartas } from "./utils/cardFormatter.js";
import { urlServices } from "./services/scryfallServices.js";
import { messageFormatter } from "./utils/messageFormatter.js";

let nombreCarta = "bello";

export function getCardInfo(nameCard) {
  if (nameCard == null || nameCard == undefined || nameCard.trim() === "") {
    return "Card name is empty";
  } else {
    return nameCard.trim();
  }
}

export function codeCardName() {
  const cartica = getCardInfo(nombreCarta);// variable para el nombre de las cartas

  const carticaCodificada = encodeURIComponent(cartica);
  return carticaCodificada;
}

export async function infoCarticas() {
  try {
    const url = urlServices();
    let response = await axios.get(url);

    const cardData = response.data;

    const card = formatoCartas(cardData);
    
    const cardMessage = messageFormatter(card);//da formato al mensaje en Wtps
    console.log(cardMessage);

  } catch (error) {
    //gestion de errores para cartas ambiguas o no encontradas
    if (error.response.data.type == 'ambiguous') {
      console.log("Muchas cartas coinciden con el nombre: " + nombreCarta + " agrega mas palabras, para una respuesta precisa");
    } else {
      console.log("Error al encontrar la carta, verifica su nombre.");
    }

  }
}

infoCarticas();

