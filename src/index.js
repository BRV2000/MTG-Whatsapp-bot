
function getCardInfo(nameCard) {
   if (nameCard == "") {
      return "Card name is empty";
   } else {
        return "Card name: " + nameCard;
   }
   
   
    
}

const cartica = getCardInfo("sol ring");
console.log(cartica);