import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import GroupList from '../../components/lists/GroupList';
import NameList from '../../components/lists/NameList';
import RandomGroupList from '../../components/lists/RandomGroupList';
import GroupRandomizer from '../../components/randomizers/GroupRandomizer';
import { IName, IGroup } from '../../types/types';
import styles from './RandomGroup.module.scss';

const emptyGroup: IGroup = {
  id: '',
  groupName: '',
  people: [],
};

function RandomGroups() {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [chosenGroup, setChosenGroup] = useState<IGroup>(emptyGroup);
  const [randomGroups, setRandomGroups] = useState<IName[][]>([]);
  const [groupSize, setGroupSize] = useState<string>('');

  useEffect(() => {
    const groupsInStorage = localStorage.getItem('groups');
    if (groupsInStorage && groupsInStorage.length > 0) {
      setGroups(JSON.parse(groupsInStorage));
    }
  }, []);

  useEffect(() => {
    if (groups.length) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  const shuffleArray = (array: IName[]) => {
    let currentIndex: number = array.length;
    let randomIndex: number;

    const randomArray = [...array];

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [randomArray[currentIndex], randomArray[randomIndex]] = [randomArray[randomIndex], randomArray[currentIndex]];
    }
    return randomArray;
  };

  const getRandomGroups = (size: number) => {
    if (!chosenGroup) return;
    const randomArray: IName[] = shuffleArray(chosenGroup.people);
    const randomGroupsArray: IName[][] = [];

    while (randomArray.length) {
      if (randomArray.length > size) {
        const newGroup = randomArray.splice(0, size);
        randomGroupsArray.push(newGroup);
      } else {
        randomGroupsArray.push(randomArray);
        break;
      }
    }

    setRandomGroups(randomGroupsArray);
  };

  const updateGroupSize = (size: string) => {
    setGroupSize(size);
    getRandomGroups(Number(size));
  };

  const chooseGroup = (groupID: string) => {
    const specificGroup = groups.filter((group: IGroup) => group.id === groupID)[0];
    setChosenGroup(specificGroup);
  };

  return (
    <div className={styles.randomGroup}>
      <Link to="/">
        <div>
          <FiArrowLeft />
          Back to home
        </div>
      </Link>
      <h1>Random Groups</h1>
      {groups.length > 0 ? (
        <div>
          <GroupList groups={groups} showNames={false} chooseGroup={chooseGroup} />
          <GroupRandomizer chosenGroup={chosenGroup} updateGroupSize={updateGroupSize} />
          {randomGroups.length ? <RandomGroupList groups={randomGroups} /> : <NameList people={chosenGroup.people} />}
        </div>
      ) : (
        <div>
          <p>No groups saved.</p>
          <Link to="/manage-groups">Click here to add a new group</Link>
        </div>
      )}
    </div>
  );
}

export default RandomGroups;
