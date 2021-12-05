import React, { useState } from 'react';
import { IGroup } from '../../types/types';
import NameList from './NameList';

interface IProps {
  group: IGroup;
}

function GroupItem({ group }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!group) return null;

  return (
    <li>
      <h3>{group.groupName}</h3>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Members' : 'Show Members'}
      </button>
      {isOpen && <NameList key={group.id} people={group.people} />}
    </li>
  );
}

export default GroupItem;
