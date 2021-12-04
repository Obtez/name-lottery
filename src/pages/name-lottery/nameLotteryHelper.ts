import { IName } from '../../types/types';

const getRandomName = (names: IName[]): IName => {
  const randomNum = Math.floor(Math.random() * names.length);
  return names[randomNum];
};

export default {
  getRandomName,
};
