import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IName } from '../../types/types';

interface IProps {
  person: IName;
  deleteNameFromGroup: (nameID: string) => void;
}

function NameItem({ person, deleteNameFromGroup }: IProps) {
  const handleClick = () => {
    deleteNameFromGroup(person.id);
  };

  return (
    <li>
      <AiOutlineUserDelete onClick={handleClick} />
      <span>{person.name}</span>
    </li>
  );
}

export default NameItem;
