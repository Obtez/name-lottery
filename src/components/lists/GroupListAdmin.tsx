import React from 'react';
import { IGroup } from '../../types/types';
import GroupItemAdmin from './GroupItemAdmin';

interface IProps {
  groups: IGroup[];
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupListAdmin({ groups, deleteGroup, deleteNameFromGroup }: IProps) {
  return (
    <div>
      <h1>Groups</h1>
      {groups.length > 0 ? (
        <ul>
          {groups.map((group: IGroup) => (
            <GroupItemAdmin
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

export default GroupListAdmin;
