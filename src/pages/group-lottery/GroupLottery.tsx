import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import NameList from '../../components/name-list/NameList';
import Helper from './groupLotteryHelper';
import { IName, IGroup } from '../../types/types';
import GroupList from '../../components/group-list/GroupList';
import styles from './GroupLottery.module.scss';

const { getRandomGroups } = Helper;

function GroupLottery() {
  const [names, setNames] = useState<IName[]>([]);
  const [groupSize, setGroupSize] = useState<number>(0);
  const [randomGroups, setRandomGroups] = useState<IGroup[]>([]);

  const deleteName = (id: string): void => {
    const filteredNames = names.filter((n) => n.id !== id);
    setNames(filteredNames);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    setGroupSize(Number(value));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (groupSize > 0 && names.length > 0) {
      const groups = getRandomGroups(groupSize, names);
      setRandomGroups(groups);
    }
  };

  return (
    <div>
      <Link to="/">Back to home</Link>
      <h1>Random Group</h1>
      <NameList names={names} deleteName={deleteName} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="groupSize">
          Group Size
          <select name="groupSize" id="groupSize" onChange={handleChange} value={groupSize}>
            {names.map((n, index) => (
              <option key={uuidv4()} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default GroupLottery;
