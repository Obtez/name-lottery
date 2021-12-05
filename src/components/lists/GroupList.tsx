import React from 'react';
import { IGroup } from '../../types/types';
import GroupItem from './GroupItem';

interface IProps {
  groups: IGroup[];
}

function GroupList({ groups }: IProps) {
  return (
    <div>
      <h1>Groups</h1>
      {groups.length > 0 ? (
        <ul>
          {groups.map((group: IGroup) => (
            <GroupItem key={group.id} group={group} />
          ))}
        </ul>
      ) : (
        <p>No groups</p>
      )}
    </div>
  );
}

export default GroupList;
