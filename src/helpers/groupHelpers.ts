import { v4 as uuidv4 } from 'uuid';
import { IName, IGroup } from '../types/types';

function createGroup(groupName: string): IGroup {
  const sanitizedGroupName = groupName.trim();

  if (sanitizedGroupName.length === 0) {
    throw new Error('Group name cannot be empty');
  }

  const newGroup: IGroup = {
    id: uuidv4(),
    groupName: sanitizedGroupName,
    people: [],
  };

  return newGroup;
}

function createPerson(name: string): IName {
  const sanitizedName = name.trim();

  if (sanitizedName.length === 0) {
    throw new Error('Name cannot be empty');
  }

  const newPerson: IName = {
    id: uuidv4(),
    name: sanitizedName,
  };

  return newPerson;
}

function addPersonToGroup(name: string, groupID: string, groups: IGroup[]): IGroup[] {
  const newPerson = createPerson(name);
  const updatedGroups = groups.map((group: IGroup) => {
    if (group.id === groupID) {
      return {
        ...group,
        people: [...group.people, newPerson],
      };
    }
    return group;
  });

  return updatedGroups;
}

export default {
  createGroup,
  addPersonToGroup,
};
