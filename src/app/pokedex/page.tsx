'use client';

import { FC, useState } from 'react';
import { useListPokemons } from '@/hooks';
import {
  Pokemon, PokemonType, pokemonTypes, Sort,
} from '@/types';
import { ListItem } from '@/components';
import { tagTypeProviders } from '@/components/common/tag/Tag';

type PokemonListItemProps = {
  pokemon: Pokemon
}

const PokemonListItem: FC<PokemonListItemProps> = ({ pokemon }) => (
  <ListItem>
    #
    {pokemon.identifier}
    {' '}
    -
    {' '}
    {pokemon.name}
     {pokemon.types.map((type) => {
      const provider = tagTypeProviders.find((provider2) => provider2.canHandle(type));

      return provider?.component(type) || <></>;
    })}
  </ListItem>
);

type PokemonFiltersProps = {
  sort: Sort
  setSort: (input: Sort) => void
  search: string
  setSearch: (input: string) => void
  filterTypes: PokemonType[]
  setFilterTypes: (input: PokemonType[]) => void
}

const PokemonFilters: FC<PokemonFiltersProps> = ({
  sort, setSort, search, setSearch, filterTypes, setFilterTypes,
}) => {
  const [typeSelect, setTypeSelect] = useState<PokemonType>(pokemonTypes[0]);

  const sorts: Sort[] = [
    { field: 'id', direction: 'asc' },
    { field: 'id', direction: 'desc' },
    { field: 'name', direction: 'asc' },
    { field: 'name', direction: 'desc' },
  ];

  const onSelectType = (e: any) => {
    e.preventDefault();

    setTypeSelect(e.target.value);
  };

  const addType = () => {
    if (typeSelect) {
      setFilterTypes([...filterTypes, typeSelect]);
    }
  };

  const removeType = (type: PokemonType) => {
    setFilterTypes(filterTypes.filter((filterType) => filterType !== type));
  };

  return (
    <div>
      <input type="text" value={search} onChange={(e: any) => { e.preventDefault(); setSearch(e.target.value); }} />
      {sorts.map((currentSort) => (
        <button key={`${currentSort.direction}-${currentSort.field}`} type="button" onClick={() => setSort(currentSort)} disabled={sort.direction === currentSort.direction && sort.field === currentSort.field}>
          {currentSort.field}
          {' '}
          {currentSort.direction}
        </button>
      ))}
      <br />
      <select onChange={onSelectType}>
        {pokemonTypes.map((type) => <option value={type}>{type}</option>)}
      </select>
      <button type="button" onClick={addType}>Add filter</button>
      <br />
      {filterTypes.map((type) => (
        <button key={type} type="button" onClick={() => removeType(type)}>
          {type}
          {' '}
          x
        </button>
      ))}
    </div>
  );
};

export default function Page() {
  const [sort, setSort] = useState<Sort>({ field: 'id', direction: 'asc' });
  const [search, setSearch] = useState('');
  const [filterTypes, setFilterTypes] = useState<PokemonType[]>([]);
  const { pokemons } = useListPokemons({ sort, search, types: filterTypes });

  return (
    <main>
      <h1>Pokedex</h1>
      <PokemonFilters
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
      />
      {pokemons.map((pokemon) => <PokemonListItem pokemon={pokemon} />)}
    </main>
  );
}
