import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { IGroup } from '../../types/types';

interface IProps {
  chosenGroup: IGroup;
  updateGroupSize: (size: string) => void;
}

function GroupRandomizer({ chosenGroup, updateGroupSize }: IProps) {
  const [groupSize, setGroupSize] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShowError(false);
    setErrorMessage('');

    if (Number(value) >= chosenGroup.people.length) {
      setErrorMessage('Number must be less than group members');
      setShowError(true);
      return;
    }

    setGroupSize(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(groupSize) < chosenGroup.people.length) {
      updateGroupSize(groupSize);
      setGroupSize('');
    } else {
      alert('Error: Something went wrong...');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="groupSize">
          Group Size
          <input type="number" id="groupSize" value={groupSize} onChange={handleChange} required />
        </label>
        {showError && errorMessage}
        <button type="submit">START</button>
      </form>
    </div>
  );
}

export default GroupRandomizer;
