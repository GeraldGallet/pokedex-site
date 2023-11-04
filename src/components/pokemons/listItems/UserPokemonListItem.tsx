import { ListItem } from "@/components";
import { User } from "@/types";
import { FC } from "react";

type UserPokemonListItemProps = {
  pokemon: User['pokemons'][number]
  onEvolve?: () => void
  onRemove: () => void
}

export const UserPokemonListItem: FC<UserPokemonListItemProps> = ({ pokemon, onEvolve, onRemove }) => (
  <ListItem>
    <div className="my-2 p-3 border rounded border-black flex justify-between">
      <div className="grow-0">
        #
        {pokemon.identifier}
        {' '}
        -
        {' '}
        {pokemon.name}
        {' '}
        {pokemon.surname && (
        <>
          {' '}
          {`(${pokemon.surname})`}
          {' '}
        </>
        )}
        -
        {' '}
        {pokemon.types.join(', ')}
      </div>
      <div className="grow">
        {onEvolve && <button type="submit" onClick={onEvolve}>Evolve</button>}
        <button className="danger" type="submit" onClick={onRemove}>Release</button>
      </div>
    </div>
  </ListItem>
);