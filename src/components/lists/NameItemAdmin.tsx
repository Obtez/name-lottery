import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IName } from '../../types/types';
import styles from './Names.module.scss';

interface IProps {
  person: IName;
  deleteNameFromGroup: (nameID: string) => void;
}

function NameItemAdmin({ person, deleteNameFromGroup }: IProps) {
  const handleClick = () => {
    deleteNameFromGroup(person.id);
  };

  return (
    <li className={styles.nameItemAdmin}>
      <AiOutlineUserDelete className={styles.deleteIcon} onClick={handleClick} />
      <span>{person.name}</span>
    </li>
  );
}

export default NameItemAdmin;
