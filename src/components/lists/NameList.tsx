import React from 'react';
import NameItem from './NameItem';
import { IName } from '../../types/types';
import styles from './Names.module.scss';

interface IProps {
  variant: string;
  people: IName[];
}

function NameList({ variant, people }: IProps) {
  if (variant === 'chosenGroup' && people.length === 0) return null;

  return (
    <div className={styles[`nameList__${variant}`]}>
      {people.length > 0 ? (
        <ul>
          {people.map((person: IName) => (
            <NameItem variant={variant} key={person.id} person={person} />
          ))}
        </ul>
      ) : (
        <p>Group is empty</p>
      )}
    </div>
  );
}

export default NameList;
