import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';
import NameList from '../../components/name-list/NameList';
import Helper from './nameLotteryHelper';
import { IName } from '../../types/types';
import styles from './NameLottery.module.scss';

interface IError {
  isError: boolean;
  message: string;
}

const { getRandomName } = Helper;

const emptyError = { isError: false, message: '' };

function NameLottery() {
  const [names, setNames] = useState<IName[]>([]);
  const [chosenName, setChosenName] = useState<string>('');
  const [prevChosenNames, setPrevChosenNames] = useState<string[]>([]);
  const [isOnlyUnique, setIsOnlyUnique] = useState<boolean>(false);
  const [showError, setShowError] = useState<IError>(emptyError);

  const saveNamesToLocalStorage = () => {
    localStorage.setItem('names', JSON.stringify(names));
  };

  useEffect(() => {
    const namesInStorage = localStorage.getItem('names');
    if (namesInStorage) {
      setNames(JSON.parse(namesInStorage));
    }
  }, []);

  useEffect(() => {
    saveNamesToLocalStorage();
  }, [names]);

  const handleClick = (): void => {
    if (names.length === 0) {
      setShowError({
        ...showError,
        isError: true,
        message: 'No names added yet.',
      });
    }

    if (names.length > 0) {
      setShowError(emptyError);

      if (isOnlyUnique) {
        // TODO do this one
      }

      const name = getRandomName(names);
      setChosenName(name.name);
    }
  };

  const addName = (name: string): void => {
    const sanitizedName = name.trim();
    if (sanitizedName.length === 0) return;

    const nameExists = names.find((n) => n.name === sanitizedName);

    if (nameExists) {
      setShowError({
        ...showError,
        isError: true,
        message: `${sanitizedName} already exists.`,
      });
      return;
    }

    setNames([
      ...names,
      {
        name: sanitizedName,
        id: uuidv4(),
      },
    ]);
  };

  const deleteName = (id: string): void => {
    const filteredNames = names.filter((n) => n.id !== id);
    setNames(filteredNames);
  };

  return (
    <div className={styles.nameLottery}>
      <Link to="/">Back to home</Link>
      <h1>Random Name</h1>

      <Form addName={addName} />

      {chosenName ? <p>{chosenName}</p> : <NameList names={names} deleteName={deleteName} />}

      <button type="button" onClick={handleClick} className={styles.startBtn}>
        Start
      </button>

      {showError.isError && <p>{showError.message} </p>}

      <label htmlFor="isOnlyUnique">
        <input
          type="checkbox"
          id="isOnlyUnique"
          onChange={() => setIsOnlyUnique(!isOnlyUnique)}
          checked={isOnlyUnique}
        />
        Only unique names
      </label>
    </div>
  );
}

export default NameLottery;
