import { FC } from 'react';
import { PokemonType } from '@/types';

type TagProps = {
  text: string
  color: string
}

export const Tag: FC<TagProps> = ({ text, color }) => <div style={{ backgroundColor: color }}>{text}</div>;

export const FireTag = () => <Tag text="fire" color="red" />;
export const PlantTag = () => <Tag text="plant" color="green" />;
export const WaterTag = () => <Tag text="water" color="blue" />;

export const tagTypeProviders = [
  {
    canHandle: (type: PokemonType) => type === 'fire',
    component: (type: PokemonType) => <FireTag />,
  },
  {
    canHandle: (type: PokemonType) => type === 'water',
    component: (type: PokemonType) => <WaterTag />,
  },
  {
    canHandle: (type: PokemonType) => type === 'grass',
    component: (type: PokemonType) => <PlantTag />,
  },
  {
    canHandle: (_type: PokemonType) => true,
    component: (type: PokemonType) => <Tag color="grey" text={type} />,
  },
];
