import React from 'react';
import { IName } from '../../types/types';
import NameItem from './NameItem';

interface IProps {
  people: IName[];
  deleteNameFromGroup: (nameID: string) => void;
}

function NameList({ people, deleteNameFromGroup }: IProps) {
  return (
    <div>
      {people.length > 0 ? (
        <ul>
          {people.map((person: IName) => (
            <NameItem key={person.id} person={person} deleteNameFromGroup={deleteNameFromGroup} />
          ))}
        </ul>
      ) : (
        <p>Group is empty</p>
      )}
    </div>
  );
}

export default NameList;
