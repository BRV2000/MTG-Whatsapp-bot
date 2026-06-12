export function formatoCartas(cardData) {
  const card = {
    name: cardData.name,
    image: cardData.image_uris?.normal,
    manaCost: cardData.mana_cost,
    type: cardData.type_line,
    text: cardData.oracle_text,
    price: {
      usd: cardData.prices?.usd,
      usdfoil: cardData.prices?.usd_foil,
    },
    legalidad: {
      commander: cardData.legalities?.commander,
      standar: cardData.legalities?.standard,
    },
    urls: cardData.purchase_uris,
  };
  return card
}
