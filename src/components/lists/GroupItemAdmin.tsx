import React, { useState } from 'react';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { IGroup } from '../../types/types';
import NameListAdmin from './NameListAdmin';
import styles from './Groups.module.scss';

interface IProps {
  group: IGroup;
  deleteGroup: (id: string) => void;
  deleteNameFromGroup: (nameID: string) => void;
}

function GroupItemAdmin({ group, deleteGroup, deleteNameFromGroup }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!group) return null;

  return (
    <li className={styles.groupItemAdmin}>
      <div className={styles.groupHeader}>
        <AiOutlineUsergroupDelete className={styles.deleteIcon} onClick={() => deleteGroup(group.id)} />
        <h3>{group.groupName}</h3>
      </div>
      <button className="secondaryBtn" type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Members' : 'Show Members'}
      </button>
      {isOpen && <NameListAdmin key={group.id} people={group.people} deleteNameFromGroup={deleteNameFromGroup} />}
    </li>
  );
}

export default GroupItemAdmin;
