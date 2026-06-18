
export function messageFormatter(cardFormatterMessage) {
    //fix: gestion del null o undefined
    const cardMessage = `
    ${cardFormatterMessage.image?? "No disponible"}
    🃏 Carta: ${cardFormatterMessage.name} 
    💧 Coste: ${cardFormatterMessage.mana_cost?? "Sin coste"}
    📌 Tipo: ${cardFormatterMessage.type}

    📖 Texto: ${cardFormatterMessage.text?? "Sin descripcion"}

    💰 Precio: 
       🌍regular:${cardFormatterMessage.prices?.usd?? "No disponible"}
       ✨Foil: ${cardFormatterMessage.prices?.usdfoil?? "No disponible"}

    ⚖️ Legalidad: 
        🎖️Commander:${cardFormatterMessage.Legalidad?.commander?? "No disponible"}
        🧸Standar: ${cardFormatterMessage.Legalidad?.standar?? "No disponible"}
    
    🔗 Comprar:
        🃏tcgplayer:${cardFormatterMessage.urls.tcgplayer?? "No disponible"}

        🛒cardmarket:${cardFormatterMessage.urls.cardmarket?? "No disponible"}

        📖cardhoarder:${cardFormatterMessage.urls.cardhoarder?? "No disponible"}
    `;

    return cardMessage;
}