import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GroupForm from '../../components/forms/GroupForm';
import NameForm from '../../components/forms/NameForm';
import GroupList from '../../components/lists/GroupList';
import { IName, IGroup } from '../../types/types';
import helpers from '../../helpers/groupHelpers';
import styles from './AddNames.module.scss';

interface IProps {
  groupActions: any;
}

const { createGroup, addPersonToGroup } = helpers;

function AddNames({ groupActions }: IProps) {
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const groupsInStorage = localStorage.getItem('groups');
    if (groupsInStorage) {
      setGroups(JSON.parse(groupsInStorage));
    }
  }, []);

  useEffect(() => {
    if (groups.length) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  const submitGroup = (groupName: string): void => {
    const newGroup: IGroup = createGroup(groupName);
    setGroups([...groups, newGroup]);
  };

  const submitName = (name: string, groupID: string) => {
    const updatedGroups = addPersonToGroup(name, groupID, groups);
    setGroups(updatedGroups);
  };

  const deleteGroup = (groupID: string) => {
    const newGroups: IGroup[] = groups.filter((group: IGroup) => group.id !== groupID);
    setGroups(newGroups);
  };

  const deleteNameFromGroup = (nameID: string) => {
    const newGroups = groups.map((group) => {
      return group.people.filter((person: IName) => person.id !== nameID);
    });

    setGroups(newGroups);
  };

  return (
    <div className={styles.manageGroups}>
      <h1>Your Groups</h1>

      <div>
        <h2>New Group</h2>
        <GroupForm submitGroup={submitGroup} />
      </div>

      <div>
        <h2>New Name</h2>
        <NameForm groups={groups} submitName={submitName} />
      </div>

      <GroupList groups={groups} />
    </div>
  );
}

export default AddNames;
