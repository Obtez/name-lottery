import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IName, IGroup } from '../../types/types';

function AddNames() {
  const [userName, setUserName] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [assignedGroup, setAssignedGroup] = useState<string>('');

  const getGroupNames = () => {
    return groups.map((group) => group.groupName);
  };

  useEffect(() => {
    const localGroups = localStorage.getItem('groups');
    if (localGroups) {
      setGroups(JSON.parse(localGroups));
      const initialAssignedGroup = getGroupNames()[0];
      setAssignedGroup(initialAssignedGroup);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'groupName':
        setGroupName(value);
        break;

      case 'userName':
        setUserName(value);
        break;

      default:
        alert('There was an error');
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAssignedGroup(e.target.value);
  };

  const handleGroupSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const sanitizedGroupName = groupName.trim();

    if (sanitizedGroupName.length === 0) return;

    const newGroup: IGroup = {
      id: uuidv4(),
      groupName: sanitizedGroupName,
      people: [],
    };

    setGroups([...groups, newGroup]);
    setGroupName('');
  };

  const handleUserNameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitizedUserName = userName.trim();

    if (sanitizedUserName.length === 0) return;

    const newUserName: IName = {
      id: uuidv4(),
      name: sanitizedUserName,
    };

    const newGroups = groups.map((group) => {
      if (group.groupName === assignedGroup) {
        return {
          ...group,
          people: [...group.people, newUserName],
        };
      }
      return group;
    });

    setGroups(newGroups);

    setUserName('');
  };

  const deleteName = () => {
    return null;
  };

  const deleteGroup = () => {
    return null;
  };

  return (
    <div>
      <h1>Your Groups</h1>

      <div>
        <h2>New Group</h2>
        <form onSubmit={handleGroupSubmit}>
          <label htmlFor="groupName">
            Group Name
            <input type="text" name="groupName" id="groupName" value={groupName} onChange={handleChange} />
          </label>
          <button type="submit">Add Group</button>
        </form>
      </div>

      <div>
        <h2>New Name</h2>
        <form onSubmit={handleUserNameSubmit}>
          <label htmlFor="assignedGroup">
            Assign to Group
            <select name="assignedGroup" id="assignedGroup" value={assignedGroup} onChange={handleSelect}>
              {getGroupNames().map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="userName">
            Name
            <input type="text" name="userName" id="userName" value={userName} onChange={handleChange} />
          </label>
          <button type="submit">Add Name</button>
        </form>
      </div>
    </div>
  );
}

export default AddNames;
