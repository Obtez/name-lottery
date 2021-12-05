import React from 'react';
import { IName } from '../../types/types';
import styles from './Names.module.scss';

interface IProps {
  person: IName;
}

function NameItem({ person }: IProps) {
  return <li className={styles.nameItem}>{person.name}</li>;
}

export default NameItem;
