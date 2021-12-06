import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IGroup } from '../../types/types';

interface IProps {
  groups: IGroup[];
  submitName: (name: string, groupID: string) => void;
}

function NameForm({ groups, submitName }: IProps) {
  const [name, setName] = useState<string>('');
  const [assignedGroupID, setAssignedGroupID] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAssignedGroupID(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitName(name, assignedGroupID);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      </label>

      <label htmlFor="assignedGroup">
        Assign to Group
        <select name="assignedGroup" id="assignedGroup" value={assignedGroupID} onChange={handleSelect}>
          <option value="">Select a group</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.groupName}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
