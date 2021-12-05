import React, { useState, useEffect } from 'react';
import Router from './router/Router';
import { IGroup } from './types/types';

function App() {
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const groupsInStorage = localStorage.getItem('groups');
    if (groupsInStorage) {
      setGroups(JSON.parse(groupsInStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group: IGroup): void => {
    setGroups([...groups, group]);
  };

  const deleteGroup = (id: string): void => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  const updateGroup = (newGroups: IGroup[]): void => {
    console.log(newGroups);
    setGroups(newGroups);
  };

  const removeUserFromGroup = (userID: string, groupID: string): void => {
    const newGroups = groups.map((group) => {
      if (group.id === groupID) {
        group.people = group.people.filter((person) => person.id !== userID); // eslint-disable-line
      }
      return group;
    });
    updateGroup(newGroups);
  };

  const groupActions = {
    addGroup,
    deleteGroup,
    updateGroup,
    removeUserFromGroup,
  };

  return <Router groupActions={groupActions} />;
}

export default App;
