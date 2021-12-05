import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IName } from '../../types/types';

interface IProps {
  groups: IName[][];
}

function RandomGroupList({ groups }: IProps) {
  return (
    <div>
      {groups.length ? (
        <ul>
          {groups.map((group: IName[], index: number) => {
            return (
              <div key={uuidv4()}>
                <h3>Group {index}</h3>
                <ul>
                  {group.map((person) => (
                    <li key={person.id}>{person.name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </ul>
      ) : (
        <p />
      )}
    </div>
  );
}

export default RandomGroupList;
