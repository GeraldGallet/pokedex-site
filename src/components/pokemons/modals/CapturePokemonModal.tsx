import { Modal } from "@/components";
import { useListPokemons } from "@/hooks";
import { CapturePokemonInput } from "@/types";
import { FC, useState } from "react";

type CapturePokemonModalProps = {
  isOpen: boolean
  onClose: () => void
  addPokemon: (input: CapturePokemonInput) => void
}

export const CapturePokemonModal: FC<CapturePokemonModalProps> = ({
  isOpen, addPokemon, onClose,
}) => {
  const { pokemons } = useListPokemons();

  const [newPokemon, setNewPokemon] = useState<CapturePokemonInput>({
    pokemonId: pokemons[0]?.id,
    surname: undefined,
  });

  const onSelectPokemon = (e: any) => {
    e.preventDefault();

    const pokemon = pokemons.find(({id}) => id === e.target.value)

    if (pokemon) {
      setNewPokemon({
        surname: newPokemon.surname,
        pokemonId: pokemon.id,
      });
    }
  };

  const onSurnameChange = (e: any) => {
    e.preventDefault();

    setNewPokemon({ ...newPokemon, surname: e.target.value });
  };

  const onSubmit = () => {
    addPokemon(newPokemon);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onCancel={onClose} onSubmit={onSubmit} title="Update user details">
      <div className="width-full flex justify-between py-4">
        <div className="w-5/12 m-4">
          <p className="text-lg">Surname</p>
          <input value={newPokemon.surname} onChange={onSurnameChange} />
        </div>
        <div className="w-5/12 m-4">
          <p className="text-lg">Pokemon</p>
          <select onChange={onSelectPokemon}>
            {pokemons.map((pokemon) => <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>)}
          </select>
        </div>
      </div>
    </Modal>
  );
};