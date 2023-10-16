'use client';

import { FC, useState } from 'react';
import styles from './page.module.css';
import { Card } from '@/components/card/Card';
import { Modal } from '@/components/modal/Modal';
import { Pokemon } from '@/types';
import { useListPokemons } from '@/hooks';
import { ListItem } from '@/components';

type UserPokemon = {
  surname?: string
} & Pokemon

type User = {
  firstName: string
  lastName: string
  pokemons: UserPokemon[]
}

const defaultUser: User = {
  firstName: 'my first name',
  lastName: 'my last name',
  pokemons: [],
};

type UserDetailsModalProps = {
  isOpen: boolean
  user: User
  setUser: (user: User) => void
  onClose: () => void
}

const UserDetailsModal: FC<UserDetailsModalProps> = ({
  isOpen, user, setUser, onClose,
}) => {
  const [newUser, setNewUser] = useState<User>(user);

  const onCancel = () => {
    setNewUser(user);
    onClose();
  };

  const onChange = (property: keyof User) => (e: any) => {
    e.preventDefault();

    setNewUser({ ...newUser, [property]: e.target.value });
  };

  const onSubmit = () => {
    setUser(newUser);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onCancel={onCancel} onSubmit={onSubmit} title="Update user details">
      <div className={styles.form}>
        <div className={styles.formPart}>
          <p className={styles.label}>First name</p>
          <input className={styles.input} value={newUser.firstName} onChange={onChange('firstName')} />
        </div>
        <div className={styles.formPart}>
          <p className={styles.label}>Last name</p>
          <input className={styles.input} value={newUser.lastName} onChange={onChange('lastName')} />
        </div>
      </div>
    </Modal>
  );
};

type CapturePokemonModalProps = {
  isOpen: boolean
  onClose: () => void
  addPokemon: (input: UserPokemon) => void
}

const CapturePokemonModal: FC<CapturePokemonModalProps> = ({
  isOpen, addPokemon, onClose,
}) => {
  const { pokemons } = useListPokemons();

  const [newPokemon, setNewPokemon] = useState<UserPokemon>({
    ...pokemons[0],
  });

  const onSelectPokemon = (e: any) => {
    e.preventDefault();

    setNewPokemon({
      ...pokemons[e.target.value - 1],
      surname: newPokemon.surname,
    });
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
      <div className={styles.form}>
        <div className={styles.formPart}>
          <p className={styles.label}>Surname</p>
          <input className={styles.input} value={newPokemon.surname} onChange={onSurnameChange} />
        </div>
        <div className={styles.formPart}>
          <p className={styles.label}>Pokemon</p>
          <select onChange={onSelectPokemon}>
            {pokemons.map((pokemon) => <option value={pokemon.id}>{pokemon.name}</option>)}
          </select>
        </div>
      </div>
    </Modal>
  );
};

type PokemonListItemProps = {
  pokemon: UserPokemon
  onEvolve?: () => void
  onRemove: () => void
}

const PokemonListItem: FC<PokemonListItemProps> = ({ pokemon, onEvolve, onRemove }) => (
  <ListItem>
    <div className={styles.listItem}>
      <div>
        #
        {pokemon.id}
        {' '}
        -
        {' '}
        {pokemon.name}
        {' '}
        {pokemon.surname && (
        <>
          -
          {' '}
          {pokemon.surname}
          {' '}
        </>
        )}
        -
        {' '}
        {pokemon.types.join(', ')}
      </div>
      <div>
        {onEvolve && <button type="submit" onClick={onEvolve}>Evolve</button>}
        <button className="danger" type="submit" onClick={onRemove}>Release</button>
      </div>
    </div>
  </ListItem>
);

const ProfilePage: FC = () => {
  const { pokemons } = useListPokemons();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isCaptureMode, setIsCaptureMode] = useState<boolean>(false);

  const [user, setUser] = useState<User>(defaultUser);

  const releasePokemon = (index: number) => {
    setUser({ ...user, pokemons: user.pokemons.filter((_, index2) => index2 !== index) });
  };

  const evolvePokemon = (index: number) => {
    const usersPokemon = [...user.pokemons];

    const toEvolve = user.pokemons[index];

    const evolution = pokemons.find(({ id }) => id === toEvolve.evolves);

    if (evolution) {
      usersPokemon[index] = { ...evolution, surname: user.pokemons[index].surname };
      setUser({ ...user, pokemons: usersPokemon });
    }
  };

  return (
    <>
      <main>
        <h1>Profile page</h1>
        <br />
        <Card>
          <div>
            <h2>Details</h2>
            <hr />
            <div className={styles.form}>
              <div className={styles.formPart}>
                <p className={styles.label}>FirstName</p>
                <p className={styles.value}>{user.firstName}</p>
              </div>
              <div className={styles.formPart}>
                <p className={styles.label}>Last name</p>
                <p className={styles.value}>{user.lastName}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="button" className="primary" onClick={() => setIsEditMode(true)}>Edit</button>
            </div>
          </div>
        </Card>
        <br />
        <button type="button" onClick={() => setIsCaptureMode(true)}>Capture</button>
        <br />
        {user.pokemons.map((pokemon, index) => (
          <PokemonListItem
            pokemon={pokemon}
            onRemove={() => releasePokemon(index)}
            onEvolve={pokemon.evolves ? () => evolvePokemon(index) : undefined}
          />
        ))}
      </main>
      <UserDetailsModal
        isOpen={isEditMode}
        onClose={() => setIsEditMode(false)}
        user={user}
        setUser={setUser}
      />
      <CapturePokemonModal
        isOpen={isCaptureMode}
        onClose={() => setIsCaptureMode(false)}
        addPokemon={
          (pokemon: UserPokemon) => setUser({ ...user, pokemons: [...user.pokemons, pokemon] })
        }
      />
    </>
  );
};

export default ProfilePage;
