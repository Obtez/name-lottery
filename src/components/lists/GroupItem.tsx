import React, { useEffect, useState } from 'react';
import NameList from './NameList';
import { IGroup } from '../../types/types';
import styles from './Groups.module.scss';

interface IProps {
  variant: string;
  group: IGroup;
  showNames: boolean;
  chooseGroup: (groupID: string) => void;
}

function GroupItem({ variant, group, showNames, chooseGroup }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(showNames);
  }, []);

  if (!group) return null;

  return (
    <li className={styles[`groupItem__${variant}`]}>
      <h3>{group.groupName}</h3>
      <div>
        <button type="button" className="primaryBtn" onClick={() => chooseGroup(group.id)}>
          Choose Group
        </button>
        <button type="button" className="secondaryBtn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide Members' : 'Show Members'}
        </button>
      </div>
      {isOpen && <NameList variant={variant} key={group.id} people={group.people} />}
    </li>
  );
}

export default GroupItem;
