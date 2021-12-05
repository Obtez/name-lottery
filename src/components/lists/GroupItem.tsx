import React, { useEffect, useState } from 'react';
import NameList from './NameList';
import { IGroup } from '../../types/types';

interface IProps {
  group: IGroup;
  showNames: boolean;
  chooseGroup: (groupID: string) => void;
}

function GroupItem({ group, showNames, chooseGroup }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(showNames);
  }, []);

  if (!group) return null;

  return (
    <li>
      <button type="button" onClick={() => chooseGroup(group.id)}>
        Choose Group
      </button>
      <h3>{group.groupName}</h3>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Members' : 'Show Members'}
      </button>
      {isOpen && <NameList key={group.id} people={group.people} />}
    </li>
  );
}

export default GroupItem;
