import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IName } from '../../types/types';
import styles from './Groups.module.scss';

interface IProps {
  groups: IName[][];
}

function RandomGroupList({ groups }: IProps) {
  return (
    <div className={styles.randomGroups}>
      {groups.length ? (
        <ul>
          {groups.map((group: IName[], index: number) => {
            return (
              <li className={styles.groupContainer} key={uuidv4()}>
                <h2>Group {index + 1}</h2>
                <ul>
                  {group.map((person) => (
                    <li key={person.id}>{person.name}</li>
                  ))}
                </ul>
              </li>
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
