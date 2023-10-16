import { useState } from 'react';

export const useNames = () => {
  const [names, setNames] = useState<string[]>([]);

  // eslint-disable-next-line no-alert
  const greet = (name: string) => alert(`Hello there ${name}!`);
  const [newName, setNewName] = useState<string>('');

  const onSubmit = (e: any) => {
    e.preventDefault();

    setNames([...names, newName]);
    setNewName('');
  };

  const onChange = (event: any) => {
    event.preventDefault();

    setNewName(event.target.value);
  };

  const onRemove = (name: string) => {
    setNames(names.filter((name2) => name2 !== name));
  };

  return {
    names,
    onSubmit,
    newName,
    onChange,
    onRemove,
    greet,
  };
};
