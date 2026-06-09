export function removeAccents(string) {
  /*
   * Remove acentos de uma string.
   */

  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
