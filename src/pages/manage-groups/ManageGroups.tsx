import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GroupForm from '../../components/forms/GroupForm';
import NameForm from '../../components/forms/NameForm';
import GroupList from '../../components/lists/GroupList';
import { IName, IGroup } from '../../types/types';
import helpers from '../../helpers/groupHelpers';
import styles from './AddNames.module.scss';

const { createGroup, addPersonToGroup } = helpers;

function ManageGroups() {
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

    if (newGroups.length) {
      setGroups(newGroups);
    } else {
      setGroups([]);
      localStorage.removeItem('groups');
    }
  };

  const deleteNameFromGroup = (nameID: string) => {
    const updatedGroups = groups.map((group: IGroup) => {
      const newPeople = group.people.filter((person: IName) => person.id !== nameID);
      return { ...group, people: newPeople };
    });

    setGroups(updatedGroups);
  };

  return (
    <div className={styles.manageGroups}>
      <Link to="/">Back to home</Link>
      <h1>Your Groups</h1>

      <div>
        <h2>New Group</h2>
        <GroupForm submitGroup={submitGroup} />
      </div>

      <div>
        <h2>New Name</h2>
        <NameForm groups={groups} submitName={submitName} />
      </div>

      <GroupList groups={groups} deleteGroup={deleteGroup} deleteNameFromGroup={deleteNameFromGroup} />
    </div>
  );
}

export default ManageGroups;
