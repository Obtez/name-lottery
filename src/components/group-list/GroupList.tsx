import React from 'react';
import { IGroup } from '../../types/types';
import GroupListItem from '../group-list-item/GroupListItem';

interface IProps {
  randomGroups: IGroup[];
}

function GroupList({ randomGroups }: IProps) {
  return (
    <div>
      <h2>Groups</h2>
      <ul>
        {randomGroups.map((group) => (
          <GroupListItem key={group.id} group={group} />
        ))}
      </ul>
    </div>
  );
}

export default GroupList;
