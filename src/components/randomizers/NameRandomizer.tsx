import React, { useState, useEffect } from 'react';
import { IName } from '../../types/types';

interface IProps {
  names: IName[];
}

function NameRandomizer({ names }: IProps) {
  const [randomName, setRandomName] = useState<string>('');
  const [remainingNames, setRemainingNames] = useState<IName[]>([]);
  const [isUniqueOnly, setIsUniqueOnly] = useState<boolean>(false);

  useEffect(() => {
    setRemainingNames(names);
  }, []);

  const getRandomName = () => {
    let chosenName: IName = {
      id: '',
      name: '',
    };

    if (isUniqueOnly) {
      const randomIndex = Math.floor(Math.random() * remainingNames.length);
      chosenName = remainingNames[randomIndex];
      const updatedRemainingNames = remainingNames.filter((name: IName) => name.id !== chosenName.id);
      setRemainingNames(updatedRemainingNames);
    } else {
      const randomIndex = Math.floor(Math.random() * names.length);
      chosenName = names[randomIndex];
    }
    setRandomName(chosenName.name);
  };

  const resetNames = () => {
    setRemainingNames(names);
    setRandomName('');
  };

  return (
    <div>
      <h2>{randomName || 'Click START to get a random name'}</h2>

      {remainingNames.length ? (
        <button type="button" onClick={getRandomName}>
          START
        </button>
      ) : (
        <button type="button" onClick={resetNames}>
          RESET
        </button>
      )}

      <label htmlFor="uniqueOnly">
        <input type="checkbox" id="uniqueOnly" checked={isUniqueOnly} onChange={() => setIsUniqueOnly(!isUniqueOnly)} />
        Use names only once
      </label>
    </div>
  );
}

export default NameRandomizer;
