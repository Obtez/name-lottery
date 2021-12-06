import React from 'react';
import { IName } from '../../types/types';
import styles from './Names.module.scss';

interface IProps {
  variant: string;
  person: IName;
}

function NameItem({ variant, person }: IProps) {
  return <li className={styles[`nameItem__${variant}`]}>{person.name}</li>;
}

export default NameItem;
