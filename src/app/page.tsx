'use client';

import { useMemo } from 'react';
import styles from './page.module.css';
import { useNames } from '@/hooks/useNames';
import { Greeting } from '@/components/Greeting';

export default function Home() {
  const {
    names, newName, onChange, onSubmit, onRemove, greet,
  } = useNames();

  const usersCount = useMemo(() => names.length, [names]);

  return (
    <main className={styles.main}>
      <h1>
        Page d&apos;accueil:
        {' '}
        {usersCount}
        {' '}
        utilisateurs
      </h1>
      <form>
        <input type="text" value={newName} onChange={onChange} />
        <button type="submit" onClick={onSubmit}>Add user</button>
      </form>

      {names.map((name) => <Greeting key={name} name={name} greet={greet} onRemove={onRemove} />)}
    </main>
  );
}
