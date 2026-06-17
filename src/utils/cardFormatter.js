export function formatoCartas(cardData) {
  const card = {
    name: cardData.name,
    image: cardData.image_uris?.normal,
    mana_cost: cardData.mana_cost,
    type: cardData.type_line,
    text: cardData.oracle_text,
    prices: {
      usd: cardData.prices?.usd,
      usdfoil: cardData.prices?.usd_foil,
    },
    Legalidad: {
      commander: cardData.legalities?.commander,
      standar: cardData.legalities?.standard,
    },
    urls: cardData.purchase_uris,
  };
  return card
}
