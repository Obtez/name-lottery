import React, { useState, KeyboardEvent } from 'react';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { IGroup } from '../../types/types';

interface IProps {
  group: IGroup;
  groupActions: any;
}

function GroupListItem({ group, groupActions }: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { groupName, people } = group;

  const toggle = () => setIsOpen(!isOpen);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <div onClick={() => setIsOpen(!isOpen)} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        <AiOutlineUsergroupDelete onClick={() => groupActions.deleteGroup(group.id)} />
        <h3>{groupName}</h3>
        {isOpen && (
          <ul>
            {people.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default GroupListItem;
