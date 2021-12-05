import React from 'react';
import { IGroup } from '../../types/types';
import GroupItem from './GroupItem';

interface IProps {
  groups: IGroup[];
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupList({ groups, deleteGroup, deleteNameFromGroup }: IProps) {
  return (
    <div>
      <h1>Groups</h1>
      {groups.length > 0 ? (
        <ul>
          {groups.map((group: IGroup) => (
            <GroupItem
              key={group.id}
              group={group}
              deleteGroup={deleteGroup}
              deleteNameFromGroup={deleteNameFromGroup}
            />
          ))}
        </ul>
      ) : (
        <p>No groups</p>
      )}
    </div>
  );
}

export default GroupList;
