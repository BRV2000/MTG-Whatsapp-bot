
export function messageFormatter(cardFormatterMessage) {
    //fix: gestion del null o undefined
    const cardMessage = `
    ${cardFormatterMessage.image}
    🃏 Carta: ${cardFormatterMessage.name} 
    💧 Coste: ${cardFormatterMessage.mana_cost}
    📌 Tipo: ${cardFormatterMessage.type}

    📖 Texto: ${cardFormatterMessage.text}

    💰 Precio: 
        ${cardFormatterMessage.prices?.usd}
        ${cardFormatterMessage.prices?.usdfoil}

    ⚖️ Legalidad: 
        ${cardFormatterMessage.Legalidad?.commander}
        ${cardFormatterMessage.Legalidad?.standar}
    
    🔗 Comprar:
        ${cardFormatterMessage.urls.tcgplayer}

        ${cardFormatterMessage.urls.cardmarket}

        ${cardFormatterMessage.urls.cardhoarder}
    `;

    return cardMessage;
}