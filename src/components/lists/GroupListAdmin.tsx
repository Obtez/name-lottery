import React from 'react';
import { IGroup } from '../../types/types';
import GroupItemAdmin from './GroupItemAdmin';
import styles from './Groups.module.scss';

interface IProps {
  groups: IGroup[];
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupListAdmin({ groups, deleteGroup, deleteNameFromGroup }: IProps) {
  return (
    <div className={styles.groupListAdmin}>
      <h2>Groups</h2>
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
