import React, { useState } from 'react';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { IGroup } from '../../types/types';
import NameListAdmin from './NameListAdmin';

interface IProps {
  group: IGroup;
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupItemAdmin({ group, deleteGroup, deleteNameFromGroup }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!group) return null;

  return (
    <li>
      <AiOutlineUsergroupDelete onClick={() => deleteGroup(group.id)} />
      <h3>{group.groupName}</h3>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Members' : 'Show Members'}
      </button>
      {isOpen && <NameListAdmin key={group.id} people={group.people} deleteNameFromGroup={deleteNameFromGroup} />}
    </li>
  );
}

export default GroupItemAdmin;
