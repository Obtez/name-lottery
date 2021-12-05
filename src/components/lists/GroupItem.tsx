import React, { useState } from 'react';
import { IGroup } from '../../types/types';
import NameList from './NameList';

interface IProps {
  group: IGroup;
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupItem({ group, deleteGroup, deleteNameFromGroup }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!group) return null;

  return (
    <li>
      <h3>{group.groupName}</h3>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Members' : 'Show Members'}
      </button>
      {isOpen && <NameList key={group.id} people={group.people} deleteNameFromGroup={deleteNameFromGroup} />}
    </li>
  );
}

export default GroupItem;
