import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { IName, IGroup } from '../../types/types';

function AddNames() {
  const [name, setName] = useState<string>('');
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const localGroups = localStorage.getItem('groups');
    if (localGroups) {
      setGroups(JSON.parse(localGroups));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    return null;
  };

  const addName = () => {
    return null;
  };

  const addGroup = () => {
    return null;
  };

  const deleteName = () => {
    return null;
  };

  const deleteGroup = () => {
    return null;
  };

  return (
    <div>
      <h1>Add New Names</h1>
    </div>
  );
}

export default AddNames;
