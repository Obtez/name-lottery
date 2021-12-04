import React, { useState, ChangeEvent } from 'react';
import styles from './Form.module.scss';

interface IProps {
  addName: (name: string) => void;
}

function Form({ addName }: IProps) {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" value={name} onChange={handleChange} autoComplete="off" required />
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
