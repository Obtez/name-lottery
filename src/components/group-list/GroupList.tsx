import React from 'react';
import { IGroup } from '../../types/types';
import GroupListItem from '../group-list-item/GroupListItem';

interface IProps {
  groups: IGroup[];
  groupActions: any;
}

function GroupList({ groups, groupActions }: IProps) {
  return (
    <div>
      <h2>Groups</h2>
      <ul>
        {groups.map((group) => (
          <GroupListItem key={group.id} group={group} groupActions={groupActions} />
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
