import React from 'react';
import { IGroup } from '../../types/types';

interface IProps {
  group: IGroup;
}

function GroupListItem({ group }: IProps) {
  const { groupName, people } = group;

  return (
    <li>
      <h3>{groupName}</h3>
      <ul>
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </li>
  );
}

export default GroupListItem;
