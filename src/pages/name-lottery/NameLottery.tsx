import React, { useState, useEffect } from 'react';

import Form from '../../components/form/Form';
import NameList from '../../components/name-list/NameList';
import Helper from './nameLotteryHelper';

import styles from './NameLottery.module.scss';

interface IError {
  isError: boolean;
  message: string;
}

const { getRandomName } = Helper;

const emptyError = { isError: false, message: '' };

const NameLottery = function () {
  const [names, setNames] = useState<string[]>([]);
  const [chosenName, setChosenName] = useState<string>('');
  const [prevChosenNames, setPrevChosenNames] = useState<string[]>([]);
  const [isOnlyUnique, setIsOnlyUnique] = useState<boolean>(false);
  const [showError, setShowError] = useState<IError>(emptyError);

  // useEffect(() => {
  //   const namesInStorage = localStorage.getItem("names")
  //   if (namesInStorage) {
  //     setNames(JSON.parse(namesInStorage))
  //   }
  // }, [])

  // const saveNamesToLocalStorage = () => {
  //   localStorage.setItem("names", JSON.stringify(names))
  // }

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
      setChosenName(name);
    }
  };

  const addName = (name: string): void => {
    const sanitizedName = name.trim();
    if (sanitizedName.length === 0) return;

    setNames([...names, sanitizedName]);
  };

  const clearName = () => {
    setChosenName('');
  };

  return (
    <div className={styles.nameLottery}>
      <h1>Name Lottery</h1>
      <Form addName={addName} />
      <NameList names={names} />
      <button type="button" onClick={handleClick}>
        Start Lottery
      </button>
      <button type="button" onClick={clearName}>
        Clear
      </button>
      {showError.isError && <p>{showError.message} </p>}
      <p>{chosenName}</p>
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
};

export default NameLottery;
