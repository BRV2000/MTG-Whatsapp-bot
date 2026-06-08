import axios from "axios";


function getCardInfo(nameCard) {
   if (nameCard == null || nameCard == undefined || nameCard.trim() === "") {
      return "Card name is empty";
   } else {
        return nameCard.trim();
   }

}

const cartica = getCardInfo("bello");//fix: error al tener multiples opciones
const carticaCodificada =  encodeURIComponent(cartica);
let url = "https://api.scryfall.com/cards/named?fuzzy=" + carticaCodificada;
console.log(url);

async function infoCarticas(response) {
   try {
       response = await axios.get(url);
      const cardData = response.data
      //console.log(response.data);
      const Card = {
         name: cardData.name,
         image: cardData.image_uris.normal,
         manaCost: cardData.mana_cost,
         type: cardData.type_line,
         text: cardData.oracle_text,
         price: {
            usd: cardData.prices.usd,
            usdfoil: cardData.prices.usd_foil
         },
         legalidad:{
            commander: cardData.legalities.commander,
            standar: cardData.legalities.standard
         } ,
         urls: cardData.purchase_uris
      };
      console.log(Card);

   } catch (error) {
      console.log("Error al encontrar la carta: ", error);
   }
}


infoCarticas();