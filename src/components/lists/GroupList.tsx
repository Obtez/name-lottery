import React from 'react';
import GroupItem from './GroupItem';
import { IGroup } from '../../types/types';
import styles from './Groups.module.scss';

interface IProps {
  groups: IGroup[];
  showNames: boolean;
  chooseGroup: (groupID: string) => void;
}

function GroupList({ groups, showNames, chooseGroup }: IProps) {
  return (
    <div className={styles.groupList}>
      <h2>Choose a Group</h2>
      {groups.length > 0 ? (
        <ul>
          {groups.map((group: IGroup) => (
            <GroupItem key={group.id} group={group} showNames={showNames} chooseGroup={chooseGroup} />
          ))}
        </ul>
      ) : (
        <p>No groups</p>
      )}
    </div>
  );
}

export default GroupList;
