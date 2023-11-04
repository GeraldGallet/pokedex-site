import { FC } from 'react';
import { ListItem } from '@/components/common/listItem/ListItem';

type GreetingProps = {
  name: string
  greet: (name: string) => void
  onRemove: (name: string) => void
}

export const Greeting: FC<GreetingProps> = ({ name, greet, onRemove }) => (
  <ListItem>
    <>
      <p onClick={() => greet(name)}>
        Hello there
        {name}
      </p>
      <button type="button" onClick={() => onRemove(name)}>Remove</button>
    </>
  </ListItem>
);
