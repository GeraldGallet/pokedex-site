import type { PokemonId } from './pokemon.type'

export type UserPokemon = {
  id: string
  surname?: string
  evolvesTo?: string
  identifier: number
  name: string
  types: string[]
}

export type User = {
  id: string

  firstName: string
  lastName: string

  pokemons: {
    id: string
    surname?: string
    evolvesTo?: string
    identifier: number
    name: string
    types: string[]
  }[]
}

export type UpdateUserInput = {
  firstName?: string
  lastName?: string
}

export type CapturePokemonInput = {
  pokemonId: PokemonId
  surname?: string
}