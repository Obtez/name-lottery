import React from 'react';
import { IName } from '../../types/types';
import NameItem from './NameItem';

interface IProps {
  people: IName[];
}

function NameList({ people }: IProps) {
  return (
    <div>
      {people.length > 0 ? (
        <ul>
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
