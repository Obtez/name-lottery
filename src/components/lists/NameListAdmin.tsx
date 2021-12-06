import React from 'react';
import { IName } from '../../types/types';
import NameItemAdmin from './NameItemAdmin';
import styles from './Names.module.scss';

interface IProps {
  people: IName[];
  deleteNameFromGroup: (nameID: string) => void;
}

function NameListAdmin({ people, deleteNameFromGroup }: IProps) {
  return (
    <div className={styles.nameListAdmin}>
      {people.length > 0 ? (
        <ul>
          {people.map((person: IName) => (
            <NameItemAdmin key={person.id} person={person} deleteNameFromGroup={deleteNameFromGroup} />
          ))}
        </ul>
      ) : (
        <p>Group is empty</p>
      )}
    </div>
  );
}

export default NameListAdmin;
