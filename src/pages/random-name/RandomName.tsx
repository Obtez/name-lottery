import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import NameForm from '../../components/forms/NameForm';
import TempNameForm from '../../components/forms/TempNameForm';
import GroupList from '../../components/lists/GroupList';
import helpers from '../../helpers/groupHelpers';
import { IName, IGroup } from '../../types/types';
import NameList from '../../components/lists/NameList';
import NameRandomizer from '../../components/randomizers/NameRandomizer';

const { addPersonToGroup } = helpers;

const emptyGroup: IGroup = {
  id: '',
  groupName: '',
  people: [],
};

function RandomName() {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [chosenGroup, setChosenGroup] = useState<IGroup>(emptyGroup);
  const [tempGroup, setTempGroup] = useState<IGroup>(emptyGroup);
  const [isTempGroup, setIsTempGroup] = useState<boolean>(true);

  useEffect(() => {
    const groupsInStorage = localStorage.getItem('groups');
    if (groupsInStorage) {
      setGroups(JSON.parse(groupsInStorage));
    }
  }, []);

  useEffect(() => {
    if (groups.length) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  useEffect(() => {
    const tempGroupInStorage = localStorage.getItem('tempGroup');
    if (tempGroupInStorage) {
      setTempGroup(JSON.parse(tempGroupInStorage));
    }
  }, []);

  useEffect(() => {
    if (tempGroup) {
      localStorage.setItem('tempGroup', JSON.stringify(tempGroup));
    }
  }, [tempGroup]);

  const submitName = (name: string) => {
    const sanitizedName = name.trim();

    if (sanitizedName.length) {
      const newPerson = {
        id: uuidv4(),
        name: sanitizedName,
      };

      setTempGroup({
        ...tempGroup,
        people: [...tempGroup.people, newPerson],
      });
    }
  };

  const chooseGroup = (groupID: string) => {
    const specificGroup = groups.filter((group: IGroup) => group.id === groupID)[0];
    setChosenGroup(specificGroup);
    setIsTempGroup(false);
  };

  return (
    <div>
      <Link to="/">Back to home</Link>
      <h1>Random Name</h1>

      {groups.length > 0 ? (
        <GroupList groups={groups} showNames={false} chooseGroup={chooseGroup} />
      ) : (
        <div>
          <p>No groups saved.</p>
          <Link to="/manage-groups">Click here to add a new group</Link>
        </div>
      )}

      {isTempGroup ? (
        <div>
          <TempNameForm submitName={submitName} />
          <NameList people={tempGroup.people} />
        </div>
      ) : (
        <div>
          <NameList people={chosenGroup.people} />
          <NameRandomizer names={chosenGroup.people} />
        </div>
      )}
    </div>
  );
}

export default RandomName;
