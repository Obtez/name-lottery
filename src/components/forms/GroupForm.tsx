import React, { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
  submitGroup: (groupName: string) => void;
}

function GroupForm({ submitGroup }: IProps) {
  const [groupName, setGroupName] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitGroup(groupName);
    setGroupName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="groupName">
        Group Name
        <input type="text" name="groupName" id="groupName" value={groupName} onChange={handleChange} />
      </label>
      <button type="submit">Add Group</button>
    </form>
  );
}

export default GroupForm;
