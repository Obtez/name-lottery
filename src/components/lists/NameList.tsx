import React from 'react';
import NameItem from './NameItem';
import { IName } from '../../types/types';
import styles from './Names.module.scss';

interface IProps {
  people: IName[];
}

function NameList({ people }: IProps) {
  return (
    <div className={styles.nameList}>
      {people.length > 0 ? (
        <ul className={styles.nameListInner}>
          {people.map((person: IName) => (
            <NameItem key={person.id} person={person} />
          ))}
        </ul>
      ) : (
        <p>Group is empty</p>
      )}
    </div>
  );
}

export default NameList;
