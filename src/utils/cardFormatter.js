export function formatoCartas(cardData) {
  const card = {
    "🃏": cardData.name,
    "image": cardData.image_uris?.normal,
    "💧 Coste": cardData.mana_cost,
    "📌 Tipo": cardData.type_line,
    "📖 Texto": cardData.oracle_text,
    "💰 Precio": {
      "usd": cardData.prices?.usd,
      "usdfoil": cardData.prices?.usd_foil,
    },
    "⚖️ Legalidad": {
      "commander": cardData.legalities?.commander,
      "standar": cardData.legalities?.standard,
    },
    "🔗 Comprar": cardData.purchase_uris,
  };
  return card
}
