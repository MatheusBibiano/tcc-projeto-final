export function convertQuality(quality) {
  /*
   * Retorna um texto e o tipo
   * de acordo com o número da qualidade.
   */

  let content, type;

  switch (quality) {
    case 1:
      content = "Péssima";
      type = "veryBad";
      break;
    case 2:
      content = "Ruim";
      type = "bad";
      break;
    case 3:
      content = "Mediana";
      type = "median";
      break;
    case 4:
      content = "Boa";
      type = "good";
      break;
    case 5:
      content = "Ótima";
      type = "excellent";
      break;
  }

  return [content, type];
}
