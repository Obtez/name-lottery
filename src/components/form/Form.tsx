import React, { useState, ChangeEvent } from 'react';

interface IProps {
  addName: (name: string) => void;
}

const Form = function ({ addName }: IProps) {
  const [name, setName] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addName(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" value={name} onChange={handleChange} autoComplete="off" required />
      </label>

      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
