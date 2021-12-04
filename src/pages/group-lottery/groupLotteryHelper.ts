import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IName, IGroup } from '../../types/types';

const shuffleArray = (array: IName[]): IName[] => {
  let currentIndex: number = array.length;
  let randomIndex: number;
  const people = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [people[currentIndex], people[randomIndex]] = [people[randomIndex], people[currentIndex]];
  }

  return people;
};

const getRandomGroups = (groupSize: number, people: IName[]): IGroup[] => {
  const shufflePeople = shuffleArray(people);
  const groups: IGroup[] = [];

  let index = 0;
  while (shufflePeople.length > 0) {
    if (shufflePeople.length >= groupSize) {
      const newGroup = {
        people: shufflePeople.splice(0, groupSize),
        groupName: `Group ${index + 1}`,
        id: uuidv4(),
      };

      groups.push(newGroup);
    } else {
      // If there are less people than the needed group size
      const newGroup = {
        people: shufflePeople,
        groupName: `Group ${index + 1}`,
        id: uuidv4(),
      };

      groups.push(newGroup);
      // exit the while loop, since splice is not used
      break;
    }

    index += 1;
  }

  return groups;
};

export default {
  getRandomGroups,
};
