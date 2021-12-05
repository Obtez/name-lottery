import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  submitName: (name: string) => void;
}

function TempNameForm({ submitName }: IProps) {
  const [name, setName] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitName(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TempNameForm;
