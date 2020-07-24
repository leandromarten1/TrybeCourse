/* const fetchInsideFetch = async (URL) => {
  const responseInside = await fetch(URL);
  const responseInsideJSON = await responseInside.json();
  const {
    name,
    types,
    weight: averageWeight,
    sprites: image,
  } = responseInsideJSON;
  const pokemon = { name, types, averageWeight, image };
  return pokemon;
};

const fetchApiPoke = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
  );
  const responseJSON = await response.json();
  const pokemonsURLArray = await responseJSON.results;
  return pokemonsURLArray;
}; */
