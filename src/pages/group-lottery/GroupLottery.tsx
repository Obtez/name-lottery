import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IName, IGroup } from '../../types/types';
import styles from './GroupLottery.module.scss';

const GroupLottery = function () {
  const [names, setNames] = useState<IName[]>([]);

  useEffect(() => {
    const namesInStorage = localStorage.getItem('names');
    if (namesInStorage) {
      setNames(JSON.parse(namesInStorage));
    }
  }, []);

  return (
    <div>
      <h1>Group Lottery</h1>
    </div>
  );
};

export default GroupLottery;
