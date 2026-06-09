export function getCurrentURLParams() {
  /*
   * Retorna um objeto contendo os parâmetros
   * da URL atual.
   */
  const urlParams = new URLSearchParams(window.location.search);
  const paramArray = {};

  for (const [key, value] of urlParams) {
    paramArray[key] = value;
  }

  return paramArray;
}
