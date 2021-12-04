import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IName, IGroup } from '../../types/types';

const getRandomGroups = (groupSize: number, people: IName[]): IGroup[] => {
  const shufflePeople = shuffleArray(people);
  const groups: IGroup[] = [];

  let index = 0;
  while (shufflePeople.length) {
    if (shufflePeople.length >= groupSize) {
      const newGroup = {
        people: shufflePeople.splice(0, groupSize),
        groupName: `Group ${index}`,
        id: uuidv4(),
      };

      groups.push(newGroup);
    } else {
      // If there are less people than the needed group size
      const newGroup = {
        people: shufflePeople,
        groupName: `Group ${index}`,
        id: uuidv4(),
      };

      groups.push(newGroup);
    }

    index++;
  }

  return groups;
};

const shuffleArray = (people: IName[]): IName[] => {
  let currentIndex: number = people.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [people[currentIndex], people[randomIndex]] = [people[randomIndex], people[currentIndex]];
  }

  return people;
};
