import { useEffect, useState } from 'react';
import { Pokemon, PokemonType, Sort } from '@/types';

import filePokemons from './pokedex.json';

type ListPokemonsInput = {
  search?: string
  sort?: Sort
  types?: PokemonType[]
}

export const useListPokemons = (input?: ListPokemonsInput) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const sort = input?.sort ?? { field: 'id', direction: 'asc' };

    const sortedPokemons = (filePokemons as unknown as Pokemon[]).sort((p1, p2) => {
      if (sort.field === 'id') {
        if (sort.direction === 'asc') {
          return p1.id - p2.id;
        }

        return p2.id - p1.id;
      }

      if (sort.field === 'name') {
        if (sort.direction === 'asc') {
          return p1.name.localeCompare(p2.name);
        }

        return p2.name.localeCompare(p1.name);
      }

      return 0;
    })
      .filter(
        ({ name }) => (input?.search ? name.toLowerCase().includes(input.search.toLowerCase()) : true),
      )
      .filter(
        ({ types: pokemonTypes }) => (input?.types?.length ? pokemonTypes.some((type) => input.types.includes(type)) : true),
      );

    setPokemons(sortedPokemons);
  }, [input?.search, input?.sort, input?.types]);

  return { pokemons };
};
