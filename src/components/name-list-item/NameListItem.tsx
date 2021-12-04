import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IName } from '../../types/types';
import styles from './NameListItem.module.scss';

interface IProps {
  name: IName;
  deleteName: (id: string) => void;
}

function NameListItem({ name, deleteName }: IProps) {
  return (
    <li className={styles.nameListItem} onClick={(e) => e.stopPropagation()} aria-hidden="true">
      <span>{name.name}</span>
      <AiOutlineUserDelete onClick={() => deleteName(name.id)} />
    </li>
  );
}

export default NameListItem;
