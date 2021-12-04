import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IName } from '../../types/types';
import styles from './NameListItem.module.scss';

interface IProps {
  name: IName;
  deleteName: (id: string) => void;
}

const NameListItem = ({ name, deleteName }: IProps) => (
  <li className={styles.nameListItem}>
    <span>{name.name}</span>
    <AiOutlineUserDelete onClick={() => deleteName(name.id)} />
  </li>
);

export default NameListItem;
