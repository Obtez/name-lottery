import React from 'react';
import GroupItem from './GroupItem';
import { IGroup } from '../../types/types';

interface IProps {
  groups: IGroup[];
  chooseGroup: (groupID: string) => void;
}

function GroupList({ groups, chooseGroup }: IProps) {
  return (
    <div>
      <h1>Groups</h1>
      {groups.length > 0 ? (
        <ul>
          {groups.map((group: IGroup) => (
            <GroupItem key={group.id} group={group} chooseGroup={chooseGroup} />
          ))}
        </ul>
      ) : (
        <p>No groups</p>
      )}
    </div>
  );
}

export default GroupList;
