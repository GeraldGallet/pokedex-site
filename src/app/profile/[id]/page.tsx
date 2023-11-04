'use client';

import { Card, UserDetailsModal } from '@/components';
import { UserPokemonListItem } from '@/components/pokemons/listItems/UserPokemonListItem';
import { CapturePokemonModal } from '@/components/pokemons/modals/CapturePokemonModal';
import { useGetUser } from '@/hooks';
import { CapturePokemonInput, UpdateUserInput } from '@/types';
import { useParams } from 'next/navigation';
import { FC, useState } from "react";

const ProfileDetailsPage: FC = () => {
  const { id } = useParams();
  const { user, updateUser, capturePokemon } = useGetUser(id as string)
  const [isCaptureMode, setIsCaptureMode] = useState<boolean>(false)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const releasePokemon = (id: string) => {
    console.log(id)
  }

  const evolvePokemon = (id: string) => {
    console.log(id)
  }

  return user ? (
    <>
      <main>
        <h1>Profile page</h1>
        <br />
        <Card>
          <div>
            <h2>Details</h2>
            <hr />
            <div className="width-full flex justify-between py-4">
              <div className="w-5/12 m-4">
                <p className="text-lg">FirstName</p>
                <p className="text-gray-600">{user.firstName}</p>
              </div>
              <div className="w-5/12 m-4">
                <p className="text-lg">Last name</p>
                <p className="text-gray-600">{user.lastName}</p>
              </div>
            </div>
            <div className="flex flex-row-reverse pt-2">
              <button type="button" className="primary" onClick={() => setIsEditMode(true)}>Edit</button>
            </div>
          </div>
        </Card>
        <br />
        <button type="button" onClick={() => setIsCaptureMode(true)}>Capture</button>
        <br />
        {user.pokemons.map((pokemon, index) => (
          <UserPokemonListItem
            key={pokemon.id}
            pokemon={pokemon}
            onRemove={() => releasePokemon(pokemon.id)}
            onEvolve={pokemon.evolvesTo ? () => evolvePokemon(pokemon.id) : undefined}
          />
        ))}
      </main>
      <UserDetailsModal
        isOpen={isEditMode}
        onClose={() => setIsEditMode(false)}
        user={user}
        setUser={(user: UpdateUserInput) => updateUser(user)}
      />
      <CapturePokemonModal
        isOpen={isCaptureMode}
        onClose={() => setIsCaptureMode(false)}
        addPokemon={
          (pokemon: CapturePokemonInput) => capturePokemon(pokemon)
        }
      />
    </>
  ) : <></>
}

export default ProfileDetailsPage