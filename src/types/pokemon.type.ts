export const pokemonTypes = ['normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'steel',
  'dragon',
  'dark',
  'fairy'] as const;

export type PokemonType = typeof pokemonTypes[number]

export type PokemonId = number & { __brand: 'Pokemon' }

export type Pokemon = {
  id: PokemonId
  identifier: number
  name: string
  types: PokemonType[]
  evolves?: PokemonId
}
